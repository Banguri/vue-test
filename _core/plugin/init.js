import Vue from 'vue';
import { VueFlux, FluxPagination, Transitions } from 'vue-flux';
import { RotateSquare2 } from 'vue-loading-spinner';

import Promise from 'bluebird';
const UseVueFlux = true;
import { types, name as $nCookie } from '../store/cookie';

// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min');

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css');
// require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css');




require('bootstrap-vue/dist/bootstrap-vue.css');
require('nvd3/build/nv.d3.min.css');
require('vue-event-calendar/dist/style.css');
require('vue-hljs/dist/vue-hljs.min.css');
require('@agametov/vueditor/dist/style/vueditor.min.css');
require('pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css');
require('simple-line-icons/css/simple-line-icons.css');
require('flag-icon-css/css/flag-icon.min.css');
require('ionicons/dist/css/ionicons.min.css');
require('vue-good-table/dist/vue-good-table.css');
require('fullcalendar/dist/fullcalendar.css');
require('vue-select/dist/vue-select.css');
require('vue-slider-component/theme/antd.css');
require('vue2-daterange-picker/dist/vue2-daterange-picker.css');

// color admin css
require('../../src/colorAdmin/template/template_vue/src/assets/css/default/app.min.css');
require('../../src/scss/vue.scss');
require('bootstrap-social/bootstrap-social.css');

// publishing css
require('../../src/scss/pub/custom-style.scss');

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg';
Vue.use(VueFroala);

import UUID from 'vue-uuid'
Vue.use(UUID);

if (UseVueFlux) {
  Vue.component('VueFlux', VueFlux);
  Vue.component('VueFluxFluxPagination', FluxPagination);
  Vue.prototype.VueFluxTransitions = Transitions;
}

// 로딩바 추가
Vue.component(RotateSquare2);

export default async function(context) {
  /**
   * Async Test
   */
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 1));

  await context.store.dispatch($nCookie + '/' + types.LOAD);
}
