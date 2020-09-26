import Vue from 'vue'

import DynamicComponent from '../common/components/elements/Dynamic-Components'
import CommonBtn from '../common/components/elements/common/CommonBtn'
import CommonAlert from '../common/components/elements/common/commonAlert'
import SearchForm from '../common/components/nodeType/SearchForm'
import DefaultForm from '../common/components/nodeType/DefaultForm'
import ErrorPage from '../pages/ErrorPage'
import DynamicLink from '../pages/Dynamic-link'
import DatePick from '../common/components/elements/common/DatePicker'
import VueFragment from './common/VueFragment'
import FrameGroup from './common/FrameGroup'
import FrameLayout from './common/FrameLayout'

Vue.component('Dynamic-Component', DynamicComponent);
Vue.component('Common-Btn', CommonBtn);
Vue.component('Default-Form', DefaultForm);
Vue.component('Common-Alert', CommonAlert);
Vue.component('Search-Form', SearchForm);

Vue.component('Dynamic-link', DynamicLink);
Vue.component('ErrorPage', ErrorPage);
Vue.component('date-pick', DatePick);
Vue.component('fragment', VueFragment);
Vue.component('frame-group', FrameGroup);
Vue.component('frame-layout', FrameLayout);