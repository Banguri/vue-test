import Vue from 'vue';
import { fetch, IFetchOptions, IFetchResult } from '../utils/api';
import get from 'lodash/get';

import { types, name, IRequestStatement } from '../store/http';

export default function(context) {
  const { app } = context;

  app.fetch = fetch.bind(null, app);
  app.load = async function(key, options) {
    await app.store.commit(name + '/' + types.BEGIN, {
      accessKey: key,
    });

    try {
      const result = await fetch.bind(null,app)(options);

      await app.store.commit(name + '/' + types.FINISH, {
        accessKey: key,
        response: result,
      });
    } catch (e) {
      await app.store.commit(name + '/' + types.FINISH, {
        accessKey: key,
        response: {},
        hesError: true,
      });
    }
  };

  app.load = app.load.bind(app);

  Vue.prototype.$fetch = function(
    options
  ) {
    return fetch.bind(null, app)(options);
  };

  Vue.prototype.$load = function(key, options) {
    return app.load(key, options);
  };

  Vue.prototype.$read = function(key) {
    const retriever = this.$store.getters[name + '/retrieve'];

    const ret = retriever(key);

    return ret ? get(ret, 'response.data', null) : null;
  };

  Vue.prototype.$rev = function(
    key
  ){
    const retriever = this.$store.getters[name + '/retrieve'];
    const ret = retriever(key);

    return ret;
  };

  Vue.prototype.fetch = function(options){
    console.warn("fetch method is will be deprecated. use \"$fetch\" instead of \"fetch\".");
    return this.$fetch(options);
  }
}
