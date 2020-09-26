import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import cookie from 'js-cookie';
import Vue from 'vue';

export const name = 'cookie';

export const types = {
  SET: 'SET',
  REMOVE: 'REMOVE',
  LOAD: 'LOAD',
};


export const namespaced = true;

export const state = () => ({
  cookies: {},
});

export const getters = {
  read: state => key => {
    const value = state.cookies[key];

    return value;
  },

  readAll: state => {
    return state.cookies;
  },
};


export const actions = {
  SET({ commit }, cookies ) {
    return commit(types.SET, cookies);
  },

  REMOVE({ commit }, keys) {
    return commit(types.REMOVE, keys);
  },

  LOAD({ commit }) {
    return commit(types.LOAD);
  },
};

export const mutations = {
  [types.SET]: function(state, cookies ) {
    if (typeof cookies === 'object' && cookies) {
      const keys = Object.keys(cookies);
      let key;
      let value;
      for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        value = cookies[key];

        if (state.cookies.hasOwnProperty(key)) {
          state.cookies[key] = value;
        } else {
          Vue.set(state.cookies, key, value);
        }

        cookie.set(key, value);
      }
    }
  },

  [types.LOAD]: function(state) {
    if (typeof document !== 'undefined') {
      const cookies = document.cookie;
      const pairTokens = cookies.split(';');
      const cookieMap = {};
      let pair;
      let key;
      let value;
      let token;
      for (let i = 0; i < pairTokens.length; i++) {
        token = pairTokens[i].trim();
        pair = token.split('=');
        key = pair[0];
        value = pair[1];

        if (key) {
          cookieMap[key] = value;
        }
      }
      state.cookies = cookieMap;
    }
  },

  [types.REMOVE]: function(state, keys) {
    let key;
    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
      delete state.cookies[key];

      cookie.remove(key);
    }
  },
};
