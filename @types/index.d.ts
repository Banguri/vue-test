// import { IRequestStatement } from '../_core/store/http';
// import { IFetchOptions, IFetchResult } from '../_core/utils/api';
import Vue from 'vue/types/vue';
import { Store } from 'vuex';

interface NuxtConfigPlugin {
  src: string;
  ssr: boolean;
}
export type Config = {
  protocol: string;
  apiHost: string;
  baseHost: string;

  useAPIMockup: boolean;
  dynamicSiteRouting: boolean; // 사용하게 되면 접근 URL의 첫번째 패스는 SiteID 로 사용된다.

  /**
   * if dynamicSiteRouting is false, This option will be affect the System
   */
  exclusiveSiteId?: string | null; // 전용 사이트 아이디

  /**
   * if dynamicSiteRouting is true, This option can be affect the System
   */
  designatedSiteIds?: string[]; // 지정된 사이트 아이디 목록

  plugins?: NuxtConfigPlugin[];

  modules?: string[];

  deviceType?: string;
};

export type FetchOptions = {
  api: any; // URL Path

  baseURL: string;

  query: Record<string, any>; // HTTP 쿼리 오브젝트
  data: Record<string, any> | string; // body 데이터로 전송 될 데이터 JSON또는 문자열
  headers: Record<string, string>;

  // filterFunctions; // [등록된 function 명 또는 function객체]의 배열또는 그 자체, 요청 응답이 정상적이면 순차적으로 호출되어 필터링 한다.
  // afterFunction; // 등록된 function 명 또는 function객체,

  // withBlocking;
  // withCredentials = true,
  //
  // cacheable,
  // useDataFieldTemplate, // true 가 입력되면 data의 각 필드에 템플릿이 적용된다.
  //
  // sendWithoutCookie,
  //
  // log = true,
  // siteId,
  // pil,
};

declare module 'vue-property-decorator' {
  export class Vue {
    // $read: (key: string) => any;
    // $rev: (key:string) => IRequestStatement<any>;

    /**
     * <Type>this.$fetch
     * CMS Server 로 부터 데이터를 가져와서 반환하는 메서드
     *
     * await 사용가능
     *
     * 옵션 예제
     * {
     *   api: {
     *     path: "/svc/PATH/TO",
     *     method: "get" | "post"
     *   },
     *
     *   query: {
     *     [Key]: Data
     *   }
     * }
     */
    // $fetch: <Type>(options: IFetchOptions) => Promise<IFetchResult<Type>>;

    /**
     * this.$load
     * 기본사용법은 $fetch 와 같습니다.
     */
    // $load: (key: string, options: IFetchOptions) => void;
    /**
     * $read
     *
     */
    // $read: <DataFrame extends any>(key: string) => DataFrame;
    // $rev: <DataFrame extends any>(key: string) => IRequestStatement<DataFrame>;
    // $get: (data: any, path: string, defaults: any) => any;
    // $$config: any;
    // $store: Store<any>;
    // $cmsSrc: (data: any) => string;

    EMIT_EDITOR_MAIN_EVENT: any;
    LISTEN_EDITOR_MESSAGE: any;
  }
}
//
// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//     components?: any;
//   }
// }
