import Vue from 'vue';
import Promise from 'bluebird';
import { actionTypes } from '../store/page';

let domainTokens = location.hostname.split( '.' );
let domainScope = [ domainTokens.pop(), domainTokens.pop() ].reverse().join( '.' );

try {
  document.domain = domainScope;
} catch ( e ) {
  console.error( 'Fail nuxt domain setting', e );
}

function EDITOR_MAIN_EVENTNAME ( pageId ) {
  return `__editor_main_${ pageId }`;
}

function GET_EDITOR_EVENT_SYSTEM () {
  return window.parent.___globalEventSystem;
}

function LISTEN_EDITOR_MESSAGE ( editorId, eventName, func ) {
  return GET_EDITOR_EVENT_SYSTEM().on( `${ eventName }[${ editorId }]`, func );
}

/**
 * 초기 도메인 세팅 후에 일시적으로 크로스도메인문제로 블럭되는데 성공할 때 까지 시도한다.
 * @param eventKey
 * @param data
 * @constructor
 */
function EMIT_PARENT_WINDOW ( eventKey, data ) {
  // console.time('emit parent '+ eventKey);
  return new Promise( r => {
    function tryDomain () {
      try {
        GET_EDITOR_EVENT_SYSTEM().emit( eventKey, data );
        r();
      } catch ( e ) {
        setTimeout( tryDomain, 1 );
      }
    }

    tryDomain();
  } );
}

// Vue.mixin( {
// 	props: {
// 		instanceId: {
// 			type: Number
// 		}
// 	},
//
//
// 	mounted () {
//
//
// 		// if ( this.instanceId ) {
// 		// 	this.$autoBootstrap();
// 
// 		// }
// 	},
//
//
// 	methods: {
// 		// $instanceBoot () {
// 		//
// 		//
// 	
// 		//
// 		// 	if ( this.$store.state.page.willInsertInstance === this.instanceId ) {
// 		// 		this.$store.commit( actionTypes.insertInstanceDone );
// 		//
// 		// 		this.EMIT_EDITOR_MAIN_EVENT( {
// 		// 			key: 'instanceStarted',
// 		// 			id: this.instanceId
// 		// 		} );
// 		// 	}
// 		//
// 		// },
// 		//
// 		// $autoBootstrap () {
// 		// 	if ( !this.$loadData ) {
// 		// 		this.$instanceBoot();
// 		// 	}
// 		// }
// 	}
// } );

//
export default async function ( context ) {
  let EDITOR_ID = context.query.__editorId;

  // if ( EDITOR_ID ) {
  //   context.store.dispatch( actionTypes.signEditor )
  // }

  if ( parent && window !== parent.window ) {
    function EMIT_MAIN_EDITOR_EVENT ( data ) {
      return EMIT_PARENT_WINDOW( EDITOR_MAIN_EVENTNAME( EDITOR_ID ), data );
    }

    if ( EDITOR_ID ) {
      await EMIT_MAIN_EDITOR_EVENT( 'ready' );

      Vue.prototype.editorId = EDITOR_ID;
      Vue.prototype.LISTEN_EDITOR_MESSAGE = function ( eventName, func ) {
        LISTEN_EDITOR_MESSAGE( EDITOR_ID, eventName, func );
      };
      Vue.prototype.EMIT_PARENT_WINDOW = EMIT_PARENT_WINDOW;
      Vue.prototype.EMIT_EDITOR_MAIN_EVENT = EMIT_MAIN_EDITOR_EVENT;
    }
  }
}
