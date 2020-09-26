<template>
  <div>
    <article>
      <panel :title="menuName">
        <SearchForm
          ref="searchForm"
          :searchEvent="searchEvent"
          :searchFields="searchFields"
        />
        <div class="row titleBox">
          <div class="col-xs-6">
            <h6><i class="fa fa-caret-right"></i> 조회결과 목록</h6>
          </div>
          <div class="col-xs-6 text-right">
            <fieldset>
              <template v-for="(buttoninfo, index) in listButtons">
                <Common-Btn
                  :key="index"
                  v-bind="buttoninfo"
                  :onPropClick="propCallBackFunc"
                />
              </template>
            </fieldset>
          </div>
        </div>
        <div class="form-group">
          <NodeList
            ref="nodeList"
            :tid="tid"
            :columns="columns"
            :onEventPropFunc="onEventCallBackFunc"
            :initSearchParams="initSearchParams"
            :propDefaultSearchParams="defaultSearchParams"
            :listUrl="listUrl"
            :checkBoxEnabled="checkBoxEnabled"
          />
        </div>
      </panel>
    </article>
  </div>
</template>

<script>
import NodeList from "../../nodeType/NodeList";
import SearchForm from "../../nodeType/SearchForm";

export default {
  name: "DefaultList",
  components: {
    NodeList,
    SearchForm,
  },
  props: {
    tid: {
      type: String,
      required: true,
      default: "",
    },
    //fetchSheets nodeType 참고
    columns: {
      type: Array,
      required: true,
      default: () => [],
    },
    //fetchSheets nodeType 참고
    searchFields: {
      type: Array,
      required: true,
      default: () => [],
    },
    listButtons: {
      type: Array,
      default: () => [],
    },
    menuName: {
      type: String,
      default: "",
    },
    //콜백 메소드
    propCallBackFunc: {
      type: Function,
      default: function() {
        console.log("CallBackFunc not Found");
      },
    },
    //페이지 뒤로가기 고민필요..
    initSearchParams: {
      type: Object,
      default: function() {
        return {};
      },
    },
    defaultSearchParams: {
      type: Object,
      default: function() {
        return {};
      },
    },
    listUrl: {
      type: String,
      default: null,
    },
    checkBoxEnabled: {
      default: true,
    },
  },
  methods: {
    onEventCallBackFunc: function(type, object, column) {
      this.propCallBackFunc(type, object, column);
      // switch (type) {
      //     case "checkBoxChanged":
      //         this.selectItems = object
      //         break;
      // }
    },
    searchEvent(searchItems) {
      console.log("searchItems", searchItems);
      this.$refs.nodeList.changeSearchParam(searchItems);
    },
    loadData() {
      this.$refs.nodeList.loadData();
    },
    getSelectItems() {
      return this.selectItems;
    },
    getListPageQuery() {},
    getSearchQuery() {
      return this.$refs.searchForm.getSearchQuery();
    },
    getObjValueQuery() {
      return this.$refs.searchForm.getObjValueQuery();
    },
  },
  data() {
    return {
      selectItems: () => [],
    };
  },
  mounted() {},
};
</script>

<style></style>
