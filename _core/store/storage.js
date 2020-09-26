import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import Vue from 'vue';

export const name = 'storage';

export const types = {
  SET: 'SET',
  REMOVE: 'REMOVE',
  LOAD: 'LOAD',
};


export const namespaced = true;

export const state = () => ({
  values: {},
});

export const getters  = {
  read: state => key => {
    if (state.values.hasOwnProperty(key)) {
      const value = state.values[key];

      return value;
    }

    return null;
  },

  readAll: state => {
    return state.values;
  },
};


export const actions = {
  SET({ commit }, cookies) {
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
  [types.SET]: function(state, values) {
    if (typeof values === 'object' && values) {
      const keys = Object.keys(values);
      let key;
      let value;
      for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        value = values[key];

        if (state.values.hasOwnProperty(key)) {
          state.values[key] = value;
        } else {
          Vue.set(state.values, key, value);
        }

        localStorage.setItem(key, value);
      }
    }
  },

  [types.LOAD]: function(state, key) {
    if (typeof document !== 'undefined') {
      const v = localStorage.getItem(key) || '';

      if (state.values.hasOwnProperty(key)) {
        state.values[key] = v;
      } else {
        Vue.set(state.values, key, v);
      }
    }
  },

  [types.REMOVE]: function(state, keys) {
    let key;
    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
      delete state.values[key];

      localStorage.removeItem(key);
    }
  },
};
