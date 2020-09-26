console.log('###live_play### start');

WebSocket.prototype.sendJson = function (json) {
  this.send(JSON.stringify(json));
};

// //////////////////////////////////////////////////////////////////////////////////
// WebLivePlay class
// //////////////////////////////////////////////////////////////////////////////////

function WebLivePlay(config) {

  // 공통 파라미터
  // let websocket_domain = "kw.jangjonghwa.me"//location.host;
  let websocket_domain = 'live.redpenai.com';// location.host;
  // let websocket_domain = location.host;
  let rid = 'livetest';
  let uid = null;
  let key = null;
  let isPlayMode = true;
  let isDebug = false;
  let websocket_chat_url = 'wss://' + websocket_domain + ':3002/websocket?transport=websocket';
  let websocket_video_url = 'wss://' + websocket_domain + ':5443/WebRTCAppEE/websocket?transport=websocket';

  if (typeof _chat_address !== 'undefined') {
    websocket_chat_url = 'wss://' + _chat_address + '/websocket?transport=websocket';
  } else if (location.host.indexOf('localhost') >= 0) {
    websocket_chat_url = 'ws://' + 'localhost:3002' + '/websocket?transport=websocket';
  }

  if (typeof _video_address !== 'undefined') {
    websocket_video_url = 'wss://' + _video_address + ':5443/WebRTCAppEE/websocket?transport=websocket';
  }

  let thiz = this;
  let ws_chat = null;
  let isScriptLoaded = false;
  let chatTimerId = null;
  let videoTimerId = null;

  config = config || {};

  if (config.rid)
    rid = config.rid;
  if (typeof config.isDebug !== 'undefined')
    isDebug = config.isDebug;
  if (config.key)
    key = config.key;
  if (!config.done) {
    throw new KWLiveException('DONE function not defined.');
  }

  // 일단 캐시 미적용
  // $.ajaxSetup({cache: true});
  $.when(
    $.getScript('https://live.redpenai.com/live/js/adapter-7.2.5.js'),
    $.getScript('https://live.redpenai.com/live/js/webrtc_adaptor.js'),

    $.Deferred(function (deferred) {
      $(deferred.resolve);
    })
  ).done(function () {
    console.log('###live_play### js loaded');
    isScriptLoaded = true;
    if (config.done) {
      config.done(thiz);
    }
  });

  thiz.startLiveChat = function (config) {

    thiz.stopLiveChat();

    config = config || {};

    if (config.websocket_chat_url)
      websocket_chat_url = config.websocket_chat_url;

    if (!isScriptLoaded) {
      throw new KWLiveException('js not loaded');
    }

    function get_chat_ws() {
      if (!websocket_chat_url) {
        return null;
      }

      let ws = new WebSocket(websocket_chat_url);

      ws.onopen = function (e) {
        console.log('chat connected');
        let mjson = {
          cmd: 'join',
          rid: rid
        };

        if (key) {
          mjson.key = key;
        }

        this.sendJson(mjson);

        thiz.callback(config.onChatOpen);
      };

      ws.onmessage = function (a) {
        let mjson = JSON.parse(a.data);

        if (isDebug) {
          console.log('msg : ' + a.data);
        }

        if (mjson.isImportant) {
          thiz.callback(config.onImportantMsg, mjson.obj);
        } else if (mjson.type == 'chat') {
          thiz.callback(config.onChatMsg, mjson.obj);
        }

      };

      ws.onclose = function () {
        console.log('ws_chat onclose');
        // ws = get_chat_ws();
        thiz.callback(config.onChatClose);
      };

      return ws;
    }

    thiz.ws_chat = get_chat_ws();

    thiz.chatTimerId = window.setInterval(function () {
      if (thiz.ws_chat == null || thiz.ws_chat.readyState === 3) {
        console.log('chat-server reconnect');
        thiz.ws_chat = get_chat_ws();
      }
    }, 1000);
  };

  thiz.stopLiveChat = function () {
    if (thiz.ws_chat) {
      try {
        thiz.ws_chat.close();
      } catch (e) {
        console.log(e);
      }
      thiz.ws_chat = null;
    }
    if (thiz.chatTimerId) {
      window.clearInterval(thiz.chatTimerId);
      thiz.chatTimerId = null;
    }
  };

  thiz.joinChat = function (uid, name) {
    thiz.uid = uid;
    let mjson = {
      cmd: 'join',
      rid: rid,
      uid: uid,
      name: name
    };

    if (key) {
      mjson.key = key;
    }

    if (!!thiz.ws_chat && thiz.ws_chat.readyState === 1) {
      thiz.ws_chat.sendJson(mjson);
    }
  };

  thiz.sendChat = function (chatMsgObj, callback) {
    let mjson = {
      cmd: 'msg',
      type: 'chat',
      rid: rid,
      obj: chatMsgObj
    };
    thiz.sendChatCmd(mjson, callback);
  };

  thiz.sendChatCmd = function (mjson, callback) {
    if (!!thiz.ws_chat && thiz.ws_chat.readyState === 1) {
      thiz.ws_chat.sendJson(mjson);
      thiz.callback(callback, new KWResult(0, 'success'));
    } else {
      console.log('chat-server not connected');
    }
    thiz.callback(callback, new KWResult(9999, 'fail'));
  };

  thiz.startLiveVideo = function (config) {

    thiz.stopLiveVideo();

    config = config || {};

    if (!config.remote_video_id && !config.local_video_id) {
      throw new KWLiveException('remote_video_id or local_video_id not defined');
    }
    if (!isScriptLoaded) {
      throw new KWLiveException('js not loaded');
    }

    if (location.protocol !== 'https:') {
      if (location.hostname !== 'localhost') {
        console.log('https를 이용해 주세요.');
        thiz.callback(config.onError, new KWLiveException('https를 이용해 주세요.'));
        return;
      }
    }

    var pc_config = null;

    var sdp_constraints = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
    };
    var media_constraints = {
      video: false,
      audio: false
    };

    if (config.sdp_constraints)
      sdp_constraints = config.sdp_constraints;
    if (config.media_constraints)
      media_constraints = config.media_constraints;
    if (config.websocket_video_url)
      websocket_video_url = config.websocket_video_url;
    if (typeof config.isPlayMode !== 'undefined')
      isPlayMode = config.isPlayMode;

    var webrtc_adapter = new WebRTCAdaptor({
      websocket_url: websocket_video_url,
      mediaConstraints: media_constraints,
      peerconnection_config: pc_config,
      sdp_constraints: sdp_constraints,
      remoteVideoId: config.remote_video_id,
      localVideoId: config.local_video_id,
      isPlayMode: isPlayMode,
      debug: isDebug,
      callback: function (info, description) {
        if (info == 'initialized') {
          console.log('initialized');
          thiz.callback(config.onInitialized, webrtc_adapter);
        } else if (info == 'streamInformation') {
          console.log('stream information');
          thiz.callback(config.onStreamInformation, webrtc_adapter);
        } else if (info == 'publish_started') {
          console.log('publish_started');
          thiz.callback(config.onPublishStarted, webrtc_adapter);
        } else if (info == 'publish_finished') {
          console.log('publish_finished');
          thiz.callback(config.onPublishFinished, webrtc_adapter);
        } else if (info == 'play_started') {
          console.log('play started');
          thiz.callback(config.onPlayStarted, webrtc_adapter);
        } else if (info == 'play_finished') {
          console.log('play finished');
          thiz.callback(config.onPlayFinished, webrtc_adapter);
        } else if (info == 'closed') {
          console.log('Connection closed');
          if (typeof description !== 'undefined') {
            console.log('Connecton closed: ' + JSON.stringify(description));
          }

          thiz.callback(config.onClosed, webrtc_adapter);
        }

      },
      callbackError: function (error) {
        // some of the possible errors, NotFoundError, SecurityError,PermissionDeniedError

        console.log('error callback: ' + JSON.stringify(error));

        // alert(JSON.stringify(error));

        thiz.callback(config.onError, error, webrtc_adapter);
      }
    });

    thiz.webrtc_adapter = webrtc_adapter;
    return webrtc_adapter;
  };

  thiz.stopLiveVideo = function () {
    if (thiz.webrtc_adapter) {
      try {
        thiz.webrtc_adapter.closeWebSocket();
      } catch (e) {
        console.log(e);
      }
      thiz.webrtc_adapter.remoteVideo.srcObject = null;
      thiz.webrtc_adapter = null;
    }
  };

  thiz.callback = function (func, param1, param2) {
    if (func) {
      func(param1, param2);
    }
  };
}

// //////////////////////////////////////////////////////////////////////////////////
// KWResult
// //////////////////////////////////////////////////////////////////////////////////

function KWResult(code, msg) {
  this.code = code;
  this.message = msg;
  this.name = 'KWResult';
}

KWResult.prototype.toString = function () {
  return this.name + ': "' + '(' + this.code + ') ' + this.msg + '"';
};

// //////////////////////////////////////////////////////////////////////////////////
// KWLiveException
// //////////////////////////////////////////////////////////////////////////////////

function KWLiveException(msg) {
  this.code = 9999;
  this.message = msg;
  this.name = 'KWLiveException';
}

function KWLiveException(code, msg) {
  this.code = code;
  this.message = msg;
  this.name = 'KWLiveException';
}

KWLiveException.prototype.toString = function () {
  return this.name + ': "' + '(' + this.code + ') ' + this.msg + '"';
};

console.log('###live_play### end');