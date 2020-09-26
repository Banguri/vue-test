import Vue from 'vue';
import { get } from 'lodash';
import { $$getTheme, $$switchThemeComponent } from '../helper/builderComponent';

Vue.use({
  install: function(Vue, options) {
    Vue.prototype.$$getTheme = $$getTheme;
    Vue.prototype.$$switchThemeComponent = $$switchThemeComponent;
  },
});
