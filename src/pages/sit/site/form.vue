<template>
  <article>
    <panel :title="menuName">
      <div class="row row-space-0">
        <!--<b-tabs nav-class="nav-tabs-inverse" nav-wrapper-class="nav-tabs nav-tabs-inverse">-->
        <b-tabs pills nav-class="mb-3" content-class="p-2">
          <b-tab active>
            <template slot="title">
              <span class="d-sm-none">Tab 1</span>
              <span class="d-sm-block d-none">영업계약정보</span>
            </template>
            <configurationForm :goList="goList" :SiteID="SiteID"/>
          </b-tab>
          <b-tab>
            <template slot="title">
              <span class="d-sm-none">Tab 2</span>
              <span class="d-sm-block d-none">사이트 설정 정보</span>
            </template>
            <settingForm :goList="goList" :SiteID="SiteID"/>
          </b-tab>
        </b-tabs>
      </div>
      <Common-Alert ref="commonAlert"/>

    </panel>
  </article>
</template>

<script>

//컬럼설정
import {defaultColumn} from "./configurationSheets.js";
import configurationForm from "./configurationForm";
import settingForm from "./settingForm";

export default {
  name: "formBasic",
  props: {
    goList : {
      type : Function
    },
    item : {
      type : Object,
      default : {},
    },
    SiteID : {
      type : String,
      default : null,
    }
  },
  components: {
    configurationForm,
    settingForm
  },
  data() {
    return {
      DefaultColumn: defaultColumn,
      menuName: '사이트 생성 요청 관리 등록/수정/상세',
    }
  }
}
</script>

<style scoped>

</style>