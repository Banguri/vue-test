import {
  componentId,
  registerComponent,
} from '../../_core/utils/AsyncComponentRegister';
export default {

  [componentId( 'productList' )]: registerComponent( () =>
    import( './productList.mc' )
  ),
  [componentId( 'product' )]: registerComponent( () =>
    import( './product.mc' )
  ),
  // 'test': registerComponent(() => import('./header/default.vue'))
  // [componentId( '', 'editor' )]: registerComponent( () =>
  //   import( './editor/Editor.vue' )
  // ),
  // [componentId( '', 'calender' )]: registerComponent( () =>
  //   import( './Calender/Calender.vue' )
  // ),
  // [componentId('', 'container-component')]: registerComponent(() =>
  //   import('../common/components/containers/Container.vue')
  // ),
  // [componentId('', 'card-noticeList')]: registerComponent(() =>
  //   import('./unishop/ecommerce/presentational/SliderMain.vue')
  // ),
  // [componentId('', 'datatable-type2')]: registerComponent(() =>
  //   import('./unishop/ecommerce/presentational/WishList.vue')
  // ),
};
