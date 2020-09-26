import Vuex from 'vuex';
import * as root from '../../_core/store/root';
import * as page from '../../_core/store/page';
import * as http from '../../_core/store/http';
import * as site from '../../_core/store/site';
import * as session from '../../_core/store/sessionService';
import * as device from '../../_core/store/device';
import * as nodeType from './modules/nodeType';
import * as cookie from '../../_core/store/cookie';
import * as storage from '../../_core/store/storage';
import * as tabMenu from '../../_core/store/tabMenu';

// More info about store: https://vuex.vuejs.org/en/core-concepts.html
// See https://nuxtjs.org/guide/vuex-store#classic-mode
// structure of the store:
// types: Types that represent the keys of the mutations to commit
// state: The information of our app, we can get or update it.
// getters: Get complex information from state
// action: Sync or async operations that commit mutations
// mutations: Modify the state

// export type RootState = root.State;

const createStore = () => {
  return new Vuex.Store({
    state: root.state(),
    getters: root.getters,
    mutations: root.mutations,
    actions: root.actions,
    modules: {
      page,
      http,
      session,
      site,
      device,
      nodeType,
      cookie,
      storage,
      tabMenu
    },
  });
};

export default createStore;
