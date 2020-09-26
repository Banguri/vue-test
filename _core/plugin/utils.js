import Vue from 'vue';
import { get, isPlainObject, isString } from 'lodash';
import { getConfig } from '../../config';
import { actionTypes } from '../store/http';
import VueLocalStroage from 'vue-localstorage';
import isNil from 'lodash/isNil';
import qs from 'query-string';

const config = getConfig();
Vue.use({
  install: function(Vue, options) {
    Vue.prototype.$get = function(o, key, defaultV) {
      return get(o, key, defaultV) || defaultV;
    };

    Vue.prototype.$fetchImageUrl = function(subImageUrl, defaultImageUrl) {
      if (typeof subImageUrl !== 'string') return subImageUrl;

      const prefix = `http://${config.apiHost}/file/`;

      if (subImageUrl.indexOf(prefix) === 0) return subImageUrl;

      return `${prefix}${
        subImageUrl.indexOf('/') === 0
          ? subImageUrl.substr(1, subImageUrl.length)
          : subImageUrl
      }`;
    };

    Vue.prototype.$fullFileUrl = function(storePath) {
      const prefix = `http://${config.apiHost}`;

      return `${prefix}/${storePath}`;
    };

    Vue.prototype.$fetchApi = function(fetchId, fetchQuery) {
      // TODO
    };

    Vue.prototype.$isEditor = function() {
      return this.$store.state.page && this.$store.state.page.isEditor;
    };

    Vue.prototype.$checkEditMode = function() {
      return this.$store.state.page && this.$store.state.page.isEditor;
    };

    Vue.prototype.$currency = function(value) {
      if (isNil(value) || typeof value !== 'number') {
        return console.warn(
          'The parameter must always be a "Number" type.\nThis parameter is not a numeric type.',
          value
        );
      }
      try {
        if (typeof value === 'string') {
          value *= 1;
        }
        return value.toLocaleString();
      } catch (exception) {
        console.error('transfer to currency format failed ', value, exception);
        return value;
      }
    };

    Vue.prototype.$errorImage = function(event) {
      event.preventDefault();
      event.target.src = '/sbdc/images/product/web_noimg_500.png';
    };

    Vue.prototype.$dashPhone = function(phoneHead, phoneBodyString) {
      let slicedPhone = [phoneHead];
      let phoneTail = '';
      let phoneMid = '';
      if (phoneBodyString.length > 4) {
        phoneTail = phoneBodyString.substr(phoneBodyString.length - 4, 4);
        phoneMid = phoneBodyString.substring(0, phoneBodyString.length - 4);
      } else {
        phoneMid = phoneBodyString;
      }
      if (phoneMid) slicedPhone.push(phoneMid);
      if (phoneTail) slicedPhone.push(phoneTail);

      return slicedPhone.length > 1 ? slicedPhone.join('-') : slicedPhone[0];
    };

    Vue.prototype.$retrieveConfig = function() {
      return config;
    };

    Vue.prototype.$localStorageManager = function(
      key,
      command,
      data,
      initValue
    ) {
      let initial = !initValue
        ? ''
        : typeof initValue === 'object'
        ? JSON.stringify(initValue)
        : initValue;
      let returnValue = '';
      switch (command) {
        case 'init':
          localStorage.setItem(key, initial);
          break;
        case 'update':
          if (typeof data === 'object') data = JSON.stringify(data);
          localStorage.setItem(key, data);
          break;
        case 'get':
          returnValue = localStorage.getItem(key);
          break;
        case 'remove':
        default:
          // clear
          localStorage.removeItem(key);
          break;
      }
      return returnValue;
    };

    Vue.prototype.$cookieManager = function(command, cname, cvalue, expire) {
      let rtn = '';
      switch (command) {
        case 'set':
          let d = new Date();
          d.setTime(d.getTime() + expire * 24 * 60 * 60 * 1000);
          const expires = 'expires=' + d.toUTCString();
          const path = this.$store.state.site.siteId
            ? this.$store.state.site.siteId
            : '';
          document.cookie =
            cname + '=' + cvalue + ';' + expires + ';path=/' + path;
          break;
        case 'get':
          const name = cname + '=';
          const ca = document.cookie.split(';');
          for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              rtn = c.substring(name.length, c.length);
            }
          }
          break;
      }
      return rtn;
    };

    Vue.prototype.fetch_v2 = async function(api, query = {}, options = {}) {
      if (!api) {
        throw 'required parameter : api';
      }

      let apiSheet = api;
      if (typeof apiSheet === 'string') {
        try {
          apiSheet = require('../../src/fetchSheets/' + apiSheet).default;
        } catch (e) {
          console.error('해당 모듈을 찾을 수 없음 ', e);
        }
      }

      let queryType = apiSheet.method === 'post' ? 'data' : 'query';

      const result = await this.fetch({ api: apiSheet, [queryType]: query });

      const { blocking } = options;

      if (result.status !== 200) {
        alert('Network Error : ' + result.status);
        // throw 'Network status is corrupted';
      }

      if (blocking) {
        return result;
      }

      if (result.data.result !== '200') {
        alert(result.data.resultMessage || 'API Error');
        throw result.data.resultMessage || 'API Error';
      }

      return result;
    };

    Vue.prototype.$getServiceCustomer = function(useAnonymousUser) {
      let user = null;
      try {
        user = this.$store.state.session.customer;
        if (!user.customerId && useAnonymousUser) {
          user = {
            customerId: 'anonymous',
          };
        }
      } catch (e) {
        console.error('Fail to retrieve', e);
        if (useAnonymousUser) {
          user = {
            customerId: 'anonymous',
          };
        }
      }
      return user;
    };
  },
});

Vue.prototype.$printContent = function() {
  window.print();
};
// localstorage
Vue.use(VueLocalStroage, { name: 'localstorage' });

Vue.prototype.$checkRealName = async function(
  bankCode,
  accountNum,
  birthDate,
  bankAccountHolder,
  disabledAlert = false,
  rsp_code = 'A0000',
) {
  const res = await this.$fetch({
    api: {
      method: 'post',
      path: `svc/bankSvcApi/checkRealName`,
      data: {
        bankCode: bankCode,
        accountNum: accountNum,
        birthDate: birthDate,
      },
    },
  });
  const data = this.$get(res, 'data', '');

  const demoData =
    bankCode === '004' &&
    accountNum === '57570201198954' &&
    birthDate === '19891206' &&
    bankAccountHolder === '민경찬';
  
  let result = false;
  if (demoData) {
    result = demoData;
    !disabledAlert && alert('확인되었습니다.');
  } else {
    if (data.rsp_code === rsp_code) {
      alert('확인되었습니다.');
      result = true;
    } else {
      result = false;
      alert('계좌번호가 정상적이지 않습니다. 다시 확인하고 입력해주세요.');
    }
  }
  this.$nuxt.$loading.finish();
  return result;
};
