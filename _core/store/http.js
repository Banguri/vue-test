import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
// import { RootState } from 'store';
// import { IFetchResult } from '../utils/api';

import Vue from 'vue';

export const name = 'http';

export const types = {
  BEGIN: 'BEGIN',
  FINISH: 'FINISH',
};

// interface IRequestSeed {
//   accessKey: string;
//   url: string;
//   loaded: boolean;
//   method: string;
//   withBlocking: boolean;
// }
//
// interface IRequestFinish <DataFrame extends any>{
//   accessKey: string;
//   loaded: boolean;
//   hasError: boolean;
//   response?: IFetchResult<DataFrame>;
// }

// export interface IRequestStatement <DataFrame extends any> extends IRequestSeed, IRequestFinish<DataFrame> {}

// export interface State {
//   requests: Record<string, IRequestStatement<any>>;
// }

export const namespaced = true;

export const state = () => ({
  requests: {},
});

export const getters = {
  retrieve: state => key => {
    const req = state.requests[key];

    if (req) {
      return state.requests[key];

      // const res :string = state.requests[key].response;
      //
      // let parsed;
      // try {
      //   parsed = JSON.parse(res || 'null');
      // } catch (e) {
      //   return {
      //     ...state.requests[key],
      //     hasError: true,
      //     response: 'respond problem',
      //   };
      // }
      //
      // return {
      //   ...state.requests[key],
      //   response: parsed,
      // };
    }

    return {
      ...state.requests[key],
    };
  },
};

// export interface Actions<S, R> extends ActionTree<S, R> {
//   begin(context: ActionContext<S, R>, data:IRequestSeed): void;
//   finish(context: ActionContext<S, R>, data: IRequestFinish<any>): void;
// }

export const actions = {
  begin({ commit }, data) {
    return commit(types.BEGIN, data);
  },

  finish({ commit }, data ) {
    return commit(types.FINISH, data);
  },
};

export const mutations = {
  [types.BEGIN]: function(state, data ) {
    Vue.set(
      state.requests,
      data.accessKey,
      Object.assign({}, state.requests[data.accessKey], {
        url: data.url,
        loaded: false,
        hasError:false,
        method: data.method,
        withBlocking: data.withBlocking,
      })
    );
  },

  [types.FINISH]: function(state, data ) {
    // Vue.set 사용 안함 이미 추적중인 속성(requestBegin에 의해)으로 지정되어 있으므로.

    // state.requests[accessKey] = Object.assign(state.requests[accessKey], {
    //   loaded : true,
    //   hasError,
    //   response,
    // });

    state.requests[data.accessKey].loaded = true;
    state.requests[data.accessKey].hasError = data.hasError;

    // let stringified = JSON.stringify(response);
    Vue.set(state.requests[data.accessKey], 'response', data.response);
  },
};
