import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex';

// import { RootState } from 'store';
import * as page from './page';
import * as site from './site';
import * as sessionService from './sessionService';
import * as device from './device';

export const types = {};


export const state = () => ({});

export const getters  = {};

export const actions  = {
  // async nuxtServerInit({ commit }, context ) {
  //   try {
  //     const siteInit = await site.nuxtServerInit({ commit }, context);
  //     if( siteInit ){
  //       const siteId = siteInit.siteId;
  //       if (siteId === '_nuxt' || siteId === 'assan') return false;

  //       await device.nuxtServerInit({ commit }, context);
  //       try {
  //         await sessionService.getToken({ commit }, context);
  //       } catch (e) {
  //         console.error(e);
  //         return context.error({
  //           statusCode: 406,
  //           message: "Couldn't get token.",
  //         });
  //       }

  //       await site.readSiteInfo({ commit }, context);
  //     }

  //   } catch (e) {
  //     console.error(e);
  //     context.error({
  //       statusCode: 404,
  //       message: e.message,
  //     });
  //   }

  //   return true;
  // },
};

export const mutations = {};
