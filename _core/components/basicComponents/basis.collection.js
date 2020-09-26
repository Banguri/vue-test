import {
  componentId,
  registerComponent,
} from '../../utils/AsyncComponentRegister';
export default {
  [componentId('container')]: registerComponent(() =>
    import('./Container.vue')
  ),
  [componentId( 'tbt-dummy')]: registerComponent(() =>
    import('./tenbyten.vue')
  ),
};
