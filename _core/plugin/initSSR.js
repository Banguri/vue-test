import Vue from 'vue';
import propertyInstanceSlot from '../components/propertyInstanceSlot.vue';
import propertyAssetArea from '../components/propertyAssetArea.vue';
import propertyTextArea from '../components/propertyTextArea.vue';
import childrenSlot from '../components/childrenSlot.vue';
import sceneChildrenSlot from '../components/sceneChildrenSlot.vue';
import deviceSwitch from '../components/deviceSwitch.vue';
import siteSwitch from '../components/siteSwitch.vue';
import builderPlaceholder from '../components/builderPlaceholder.vue';
import cmsImage from '../components/cmsImage.vue';
import ThemeSwitch from '../components/ThemeSwitch';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getConfig } from '../../config';

// Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('property-instance-slot', propertyInstanceSlot);
Vue.component('property-asset-area', propertyAssetArea);
Vue.component('property-text-area', propertyTextArea);
Vue.component('children-slot', childrenSlot);
Vue.component('scene-children-slot', sceneChildrenSlot);
Vue.component('device-switch', deviceSwitch);
Vue.component('site-switch', siteSwitch);
Vue.component('system-container', require('../components/container').default);
Vue.component(
  'system-column-division',
  require('../components/columnDivision').default
);
Vue.component('system-scene', require('../components/scene').default);
Vue.component('builder-placeholder', builderPlaceholder);
Vue.component('cms-image', cmsImage);
Vue.component('theme-switch', ThemeSwitch);

const config = getConfig();

export default function(context) {
  // const { app, req, res, redirect: nativeRedirect, route } = context;
  Vue.prototype.$$config = config;
}
