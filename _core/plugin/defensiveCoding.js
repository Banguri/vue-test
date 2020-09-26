import Vue from 'vue';
import { get } from 'lodash';

Vue.use({
  install: function(Vue, options) {
    Vue.prototype.$$get = function(o, key, defaultV) {
      return get(o, key, defaultV);
    };
  },
});
