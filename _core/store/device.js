import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
// import { RootState } from 'store';

export const name = 'device';

export const types = {
  CHANGE_DEVICE: 'CHANGE_DEVICE',
};

export const namespaced = true;

export const state = ()  => ({
  type: 'pc',
});

export const getters = {};


export const actions = {
  async change({ commit }, type) {
    await commit(types.CHANGE_DEVICE, type);
  },
};

export const mutations = {
  [types.CHANGE_DEVICE]: function(state, type) {
    state.type = type;
  },
};

export async function nuxtServerInit({ commit }, { req, app, route }) {
  if (process.env.DEVICE) {
    await commit(name + '/' + types.CHANGE_DEVICE, process.env.DEVICE);
  }
}
