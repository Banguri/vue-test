import {
  componentId,
  registerComponent,
} from '../../../_core/utils/AsyncComponentRegister';
//

export default {
  /**
   * ComponentId : registerComponent(()=> import(모듈 상대 경로))
   * 여기에 등록하는 컴포넌트는 BackendCore 에 컴포넌트 데이터를 추가해야 합니다
   * ComponentId 는 경로의 디렉토리 구분자를 - 로 치환하여 지정합니다.
   * componentId 의 시작명칭은
   * theme 입니다.
   * ID에는 소문자만 사용합니다.
   */
  [componentId('container-component')]: registerComponent(() =>
    import('./containers/Container.vue')
  ),
  [componentId('row-component')]: registerComponent(() =>
    import('./containers/Row.vue')
  ),
  [componentId('column-component')]: registerComponent(() =>
    import('./containers/Column.vue')
  ),
};
