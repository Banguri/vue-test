<template>
  <DefaultList
      v-if="formType === 'list'"
      :tid="tid"
      :columns="columns"
      :searchFields="searchFields"
      :menuName="menuName"
      :propCallBackFunc="callBackFunc"
      :defaultSearchParams="defaultSearchParams"
      :listUrl="listUrl"
      :listButtons="listButtons"
      ref="defaultList"
  />
  <siteForm v-else-if="formType === 'form'" :goList="goList" :item="item" :SiteID="SiteID"/>
</template>

<script>
//기본리스트
import DefaultList from "../../../common/components/elements/default/DefaultList";
import siteForm from "./form";
//컬럼설정
import {ListFields, searchColumn} from "./listSheets.js";

export default {
  name : "siteList",
  components: {
    DefaultList,
    siteForm
  },
  methods:{
    callBackFunc:  function(type,object,columns) {
      console.log("event!!!!",type,object,columns);
      switch (type) {
        case "checkBoxChanged":
          this.selectItems = object
          break;
        case "Btn":
          break;
        case "close":
          this.dataInit();
          break;
        case "reload":
          this.dataInit();
          this.$refs.defaultList.loadData();
          break;
        case "atag":
          this.item = object;
          this.formType = 'form';
          this.SiteID = object.SiteID;
          break;
      }
    },
    goList() {
      console.log("gogogogogogogogogogo ");
      this.formType = 'list';
    },
    dataInit(){
      this.column = [];
      this.item = {};
      this.formType =""
    },
    onClick:function () {
      // pntPolicyreLoadData
    },
    onClickSelect: function () {
      console.log("select",this.selectItems);
    }
  },
  data(){
    return{
      tid :'sitSite',
      columns : ListFields.columns,
      searchFields: searchColumn,
      listButtons: ListFields.listButtons,
      column : [],
      menuName :'사이트 생성 요청 관리',
      defaultSearchParams :{},
      selectItems : ()=>[],
      listUrl : null,
      item : {},
      formType :'list',
      SiteID: null
    }
  },
  mounted() {
  }
};
</script>

<style>
</style>
