import axios, { AxiosRequestConfig, AxiosResponse } from 'axios/index';

import Promise from 'bluebird';
import pick from 'lodash/pick';
import jsonBeautifier from 'json-beautify';
import moment from 'moment';
import { getConfig } from '../../config';
import { GenerateMockup } from './MockupDataBuilder';
const clc = {
  green: a => a,
  red: a => a,
  blue: a => a,
  info: a => a,
  yellow: a => a,
  cyanBright: {
    bold: a => a,
  },
};
const config = getConfig();

const ENABLED_LOG = false;

const isServer = process.server;

export function getAxios() {
  const host = config.apiHost;

  let baseURL;

  if (isServer) {
    baseURL = `http://${host}/`;
  } else {
    baseURL = `//${host}/`;
    if (config.protocol) {
      baseURL = config.protocol + baseURL;
    }
  }

  return axios.create({
    baseURL,
    timeout: 99000,
    withCredentials: true,
  });
}
// export type FilterFunction = () => void;

// export interface IFetchResultConfig {
//   headers: {
//     [str: string]: string;
//   };
//   method: string;
//   baseURL: string;
//   withCredentials: boolean;
//   url: string;
//   params: { [str: string]: string };
//   data: string;
// }
//
// export interface IFetchResult<T> {
//   data: T;
//   config: IFetchResultConfig;
//   headers: { [str: string]: string };
//   statusText: string;
//   status: number;
// }
//
// export interface IAPISheet {
//   path: string;
//   method?: string;
//   query?: { [str: string]: string };
//   data?: any;
//   withCredentials?: boolean;
//   multipart?: boolean;
//   mockup?: any;
//   mockupOptions?: any;
// }
//
// export interface IFetchOptions {
//   api: IAPISheet;
//
//   baseURL?: string;
//
//   query?: { [str: string]: string }; // HTTP 쿼리 오브젝트
//   data?: any; // body 데이터로 전송 될 데이터 JSON또는 문자열
//   headers?: { [str: string]: string };
//
//   filterFunctions?: FilterFunction[]; // [등록된 function 명 또는 function객체]의 배열또는 그 자체, 요청 응답이 정상적이면 순차적으로 호출되어 필터링 한다.
//   afterFunction?: () => any; // 등록된 function 명 또는 function객체,
//
//   withBlocking?: boolean;
//   withCredentials?: boolean;
//
//   cacheable?: boolean;
//   useDataFieldTemplate?: boolean; // true 가 입력되면 data의 각 필드에 템플릿이 적용된다.
//
//   sendWithoutCookie?: boolean;
//
//   log?: boolean;
// }
/**
 * Fetch
 * @param options : fetch 대상 명세 options
 * @returns {Promise<*>}
 */
export async function fetch(
  application,
  options
){
  const serverSide = isServer;
  const ax = getAxios();
  // console.log("application",application);
  console.log("options",options);
  let baseURL = options.baseURL;

  // [등록된 function 명 또는 function객체]의 배열또는 그 자체, 요청 응답이 정상적이면 순차적으로 호출되어 필터링 한다.
  let filterFunctions= options.filterFunctions || [];

  const {
    api,

    afterFunction, // 등록된 function 명 또는 function객체,

    log = true,
  } = options;

  let {
    withCredentials = true,
    query, // HTTP 쿼리 오브젝트
    data, // body 데이터로 전송 될 데이터 JSON또는 문자열
    headers,
  } = options;

  // 오류 벨리데이션 추가 2018.11.23 - favicon.ico 호출하시는 부분 아시는 분은 호출부에서 제거해주세요.
  // if (((api || {}).query || {}).id === 'favicon.ico') return null;

  const binder = application;
  const siteId = binder.store.state.site.id;

  let apiSheet = api;
  if (typeof apiSheet === 'string') {
    apiSheet = require('../../src/fetchSheets/' + apiSheet).default;
  }

  const {
    path,

    withCredentials: defaultWithCredentials,
  } = apiSheet;
  const mockData = apiSheet.mockup;
  const mockupOptions = apiSheet.mockupOptions;
  let method = apiSheet.method || 'get';
  let multipart = apiSheet.multipart || false;
  const { query: defaultQuery, data: defaultData } = apiSheet;

  query = {
    ...defaultQuery,
    ...query,
  };

  data = {
    ...defaultData,
    ...data,
  };

  /*
   *
   * 2018 11 27 deviceType 추가
   *
   * */
  if (method === 'post') {
  } else {
  }

  headers = {
    ...headers,
  };

  const sessionState = binder.store.state.session;
  if (isServer && sessionState.jwt) {
    headers.cookie =
      (headers.cookie ? headers.cookie.trim().replace(/(;$|$)/, ';') : '') +
      `${sessionState.tokenName}=${sessionState.jwt}; ` +
      `${sessionState.refreshTokenName}=${sessionState.refresh};`;
  }

  if (defaultWithCredentials !== undefined) {
    withCredentials = defaultWithCredentials;
  }

  if (method === 'post') {
    const dataKeys = Object.keys(data);

    for (let i = 0; i < dataKeys.length; i++) {
      if (!serverSide && data[dataKeys[i]] instanceof File) {
        multipart = true;
        break;
      }
    }
  }

  method = method.toLowerCase();

  const requestOptions = {
    url: path,
    params: query,
    headers: {
      ...headers,
    },
    method,
    withCredentials,
  };

  console.log('Call API', path);
  // baseURL이 [loopback] 으로 입력되면 자신의 호스트를 baseURL로 사용한다.
  if (baseURL === '[loopback]') {
    requestOptions.baseURL = '';
  } else if (baseURL) {
    requestOptions.baseURL = `http://${baseURL}`;
  } else {
    baseURL = ax.defaults.baseURL;
  }

  if (data) {
    if (multipart) {
      if (data instanceof FormData) {
        requestOptions.data = data;
      } else {
        const formData = new FormData();
        const keys = Object.keys(data);

        let key;
        let value;
        for (let i = 0; i < keys.length; i++) {
          key = keys[i];
          value = data[key];

          if (typeof value === 'object' && !(value instanceof File)) {
            value = JSON.stringify(value);
          }
          formData.append(key, value);
        }

        requestOptions.data = formData;
      }
    } else if (typeof data === 'string') {
      requestOptions.data = data;
    } else {
      // data = {
      //     ...data,
      // }

      const keys = Object.keys(data);
      const queries= [];
      let key;

      let queryData;
      for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        queryData = data[key];

        if (typeof queryData === 'object') {
          queryData = encodeURIComponent(JSON.stringify(queryData));
        } else if (typeof queryData === 'string') {
          queryData = encodeURIComponent(queryData);
        }

        queries.push(`${key}=${queryData}`);
      }
      requestOptions.data = queries.join('&');
    }
  }

  let apiResponse= null;

  const debugTitle = `[fetch] - [${method}][${baseURL}]${path}`;
  if (ENABLED_LOG && log) {
    if (serverSide) {
      console.info(
        clc.green('---------------------- <Fetch> ----------------------')
      );
      console.info(
        clc.yellow(`* ${moment().format()} -> retrieve:`),
        clc.yellow('Incomming cookie : ')
      );
      console.info(
        clc.green(debugTitle),
        '\nOptions >',
        jsonBeautifier(requestOptions, null, 3, 100)
      );
      console.info(
        clc.green('---------------------- </Fetch> ----------------------')
      );
    } else {
      console.info(`%c------- <Fetch> ------- ${new Date()}`, 'color:green;');
      console.info(`%c${debugTitle}`, 'color:green;');
      console.info('\nOptions >', jsonBeautifier(requestOptions, null, 3, 100));
      console.info('%c------- </Fetch> -------', 'color:green;');
    }
  }
  const requestStartTime = Date.now();

  /** ******************************
   * Request
   */

  try {
    if (config.useAPIMockup && mockData) {
      const dataSet = GenerateMockup(mockData, mockupOptions);

      apiResponse = {
        config: requestOptions,
        status: 200,
        statusText: '200',
        headers: [],
        data: {
          result: 200,
          ...dataSet,
        },
      };
    } else {
      apiResponse = await ax.request(requestOptions);
    }
  } catch (err) {
    if (ENABLED_LOG && log) {
      if (serverSide) {
        console.info(
          clc.red('---------------------- <FetchError> ----------------------')
        );
        console.info(clc.yellow(`* ${moment().format()}`));
        console.info(
          clc.green(debugTitle),
          '\nOptions >',
          jsonBeautifier(requestOptions, null, 3, 100)
        );
        console.error(err.config);
        console.error(err.response && err.response.data);
        console.info(
          clc.red('---------------------- </FetchError> ----------------------')
        );
      } else {
        console.info(
          '%c---------------------- <FetchError> ----------------------',
          'color:red;'
        );
        console.info(`%c${debugTitle}`, 'color:green;');
        console.info(
          '\nOptions >',
          jsonBeautifier(requestOptions, null, 3, 100)
        );
        console.error(err);
        console.error(err.response && err.response.data);
        console.info(
          '%c---------------------- </FetchError> ----------------------',
          'color:red;'
        );
      }
    }

    throw new Error(err);
  }
  /**
   * End Request
   */

  if (ENABLED_LOG && log) {
    if (serverSide) {
      const duration = moment.duration(Date.now() - requestStartTime);

      console.info(
        clc.cyanBright.bold(
          '---------------------- <FetchResponse> ----------------------'
        )
      );
      console.info(
        clc.yellow(
          `* ${moment().format()} - ${duration.minutes()}:${duration.seconds()}:${duration.milliseconds()}ms`
        )
      );
      console.info(clc.green(apiResponse.request.path));
      console.info(
        clc.green(debugTitle),
        '\nOptions >',
        jsonBeautifier(requestOptions, null, 3, 100)
      );
      console.info(
        clc.blue(apiResponse.status),
        clc.blue(
          `${JSON.stringify(apiResponse.data, null, 3).slice(0, 150)}...`
        )
      );
      console.info(
        clc.cyanBright.bold(
          '---------------------- </FetchResponse> ----------------------'
        )
      );
    } else {
      const duration = moment.duration(Date.now() - requestStartTime);
      console.info(
        '%c---------------------- <FetchResponse> ----------------------',
        'color:cyan;font-weight:bold;background-color:#000;padding:2px;'
      );
      console.info(
        `%c* ${moment().format()} - ${duration.minutes()}:${duration.seconds()}:${duration.milliseconds()}ms`,
        'color:yellow;;background-color:#000;padding:2px;'
      );
      console.info(`%c${debugTitle}`, 'color:green;');
      console.info('Options >', requestOptions);
      console.info(apiResponse.status, apiResponse.data);
      console.info(
        '%c---------------------- </FetchResponse> ----------------------',
        'color:cyan;font-weight:bold;background-color:#000;padding:2px;'
      );
    }
  }

  if (afterFunction && typeof afterFunction === 'function') {
    console.error('After function 구현중');
  }

  // 필터 적용
  if (filterFunctions && apiResponse) {
    // 단일 요소도 허용하므로 실제 처리에서 분기를 하지 않기위하여 Array가 아닌 경우에 array로 변환한다.
    if (!Array.isArray(filterFunctions)) {
      filterFunctions = [filterFunctions];
    }

    let data = apiResponse.data;
    await Promise.each(filterFunctions, (filterFunc) => {
      let func;

      if (typeof filterFunc === 'function') {
        func = filterFunc;

        const result = func(data, options);
        if (result) {
          if (typeof result.then === 'function') {
            return result
              .then((resultData) => (data = resultData))
              .catch(e => console.error(e));
          }
        }

        data = result;
        return true;
      } else if (typeof filterFunc === 'string') {
        throw new Error('filter 는 함수여야 합니다.');
      }
    });

    apiResponse.data = data;
  }

  // return apiResponse;
  return pick(apiResponse, [
    'data',
    'config',
    'headers',
    'statusText',
    'status',
  ]);
}

export function getItems(apiRes) {
  if (!apiRes) {
    return [];
  }

  if (!apiRes.data) {
    return [];
  }

  if (!apiRes.data.items) {
    return [];
  }

  return apiRes.data.items;
}
