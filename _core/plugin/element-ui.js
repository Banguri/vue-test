import Vue from 'vue';

/**
 * http://element.eleme.io/?ref=madewithvuejs.com#/en-US
 */
//move css to layout, due to use custom theme
// import 'element-ui/lib/theme-chalk/index.css';

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ko';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.use(ElementUI);
