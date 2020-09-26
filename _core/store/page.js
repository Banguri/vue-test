import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
// import { RootState } from 'store';

export const name = 'page';

export const types = {
  SET: 'SET',
  ERR: 'ERR',
  SET_SEED: 'SET_SEED',
  SET_SITEID: 'SET_SITEID',
  UPDATE_EDITOR_FLASH_DATA_STORE: 'UPDATE_EDITOR_FLASH_DATA_STORE',
  SIGN_EDITOR: 'SIGN_EDITOR',
  WILL_INSERT_INSTANCE: 'WILL_INSERT_INSTANCE',
  INSERT_INSTANCE_DONE: 'INSERT_INSTANCE_DONE',
};


export const namespaced = true;

export const state = ()  => ({
  seedSvcPage: null,
  pageId: null,
  pageRoute: null,

  dragging: true,
  isEditor: false,
  editorFlashDataStore: {
    instanceProps: {},
  },

  willInsertInstance: null,
});

export const getters = {
  seedSvcPage: state => state.seedSvcPage,
};


export const actions = {
  async setSeed({ commit }, svcPage ) {
    await commit(types.SET_SEED, svcPage);
  },

  async updateEditorFlashDataStore({ commit }, data ) {
    await commit(types.UPDATE_EDITOR_FLASH_DATA_STORE, data);
  },

  async signEditor({ commit }) {
    await commit(types.SIGN_EDITOR);
  },

  async willInsertInstance({ commit }, instanceId ) {
    await commit(types.WILL_INSERT_INSTANCE, instanceId);
  },
  async insertInstanceDone({ commit }) {
    await commit(types.INSERT_INSTANCE_DONE);
  },
};

export const mutations = {
  [types.SET_SEED]: function(state, svcPage ) {
    if( svcPage ){
      state.pageId = svcPage.id;
      state.pageRoute = svcPage.pageRoute;
      state.seedSvcPage = svcPage;
    } else {
      state.pageId = null;
      state.pageRoute = null;
      state.seedSvcPage = null;
    }
  },

  [types.UPDATE_EDITOR_FLASH_DATA_STORE]: function(state, data ) {
    state.editorFlashDataStore = data;
  },

  [types.SIGN_EDITOR]: function(state) {
    state.isEditor = true;
  },

  [types.WILL_INSERT_INSTANCE]: function(state, instanceId ) {
    state.willInsertInstance = instanceId;
  },

  [types.INSERT_INSTANCE_DONE]: function(state) {
    state.willInsertInstance = null;
  },
};
