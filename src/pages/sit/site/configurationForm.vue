<template>
  <article>
    <div class="groupWrap m-b-20">
      <Default-Form :Fields="column" ref="defaultForm" :propItems="propItems"/>
    </div>
    <div class="btnBox">
      <b-button
          variant="success"
          size="sm"
          v-on:click="save">
        <i class="fa fa-save"></i>&nbsp;저장
      </b-button>
      <b-button
          variant="default"
          size="sm"
          v-on:click="goList">
        <i class="fa fa-list"></i>&nbsp;목록
      </b-button>
    </div>
    <Common-Alert ref="commonAlert"/>
  </article>
</template>

<script>

//컬럼설정
import {defaultColumn} from "./configurationSheets.js";

export default {
  name: "formBasic",
  props: {
    goList: {
      type: Function
    },
    SiteID: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      column: defaultColumn,
      propItems: {},
      menuName: '영업계약 승인 관리',
    }
  },
  async created() {
    await this.loadItem();
  },
  methods: {
    async loadItem() {
      if (!_.isNull(this.SiteID)) {
        const res = await this.$fetch({
          api: {
            path: `/mng/sitConfiguration/read?id=${this.SiteID}`,
            method: "get",
          }
        });
        if (res && res.status && res.status === 200) {
          if (res.data && res.data && res.data.result && res.data.result === '200') {
            this.propItems = res.data.item;
          }
        }
      }
    },
    async save() {
      const res = await this.$refs.defaultForm.saveSubmit("/mng/sitConfiguration/save");

      if (_.isEmpty(res)) {
        this.$refs.commonAlert.closeShow(`${this.menuName} 저장`, '필수값을 확인해주세요');
      } else if ( _.get(res, 'status') === '200' || _.get(res, 'data.result') === '200') {
        this.$refs.commonAlert.closeShow(`${this.menuName} 저장`, '저장 되었습니다.');
      } else {
        console.log("저장 에러 ", _.get(res, "data.result"), _.get(res, "data.resultMessage"));
        this.$refs.commonAlert.closeShow(`${this.menuName} 저장`, '저장에 실패 하였습니다.');
      }
    }
  }
}
</script>

<style scoped>

</style>