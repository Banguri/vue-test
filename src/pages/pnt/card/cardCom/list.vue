<template>
  <div>
        <DefaultList
                    :tid="tid"
                    :columns = "columns"
                    :searchFields = "searchFields"
                    :menuName ="menuName"
                    :propCallBackFunc ="callBackFunc"
                    :listUrl="listUrl"
                    :listButtons="listButtons"
                    ref="defaultList"
        />
        <CardComModal ref="modalRef"
                    :Fields="column"
                    :callBackFunc="callBackFunc"
                    :propItems="item"
                    :propDefaultSearchParams ="defaultSearchParams"
                    :formType="formType"
        />
  </div>
</template>

<script>
import { log } from '~/static/js/adapter-7.2.5';
  //기본리스트
  import DefaultList from "../../../../common/components/elements/default/DefaultList";
  //컬럼설정
  import {ListFields,searchColumn,createColumn,updateColumn} from "./cardCom.js";
  import CardComModal from "./cardComModal.vue";

  export default {
    name: "CardComList",
    components: {
      DefaultList,
      CardComModal,
    },
    methods:{
        callBackFunc:  function(type,object,columns) {
            console.log("list event!!!!",type,object,columns);
            switch (type) {
                case "checkBoxChanged":
                    this.selectItems = object
                    break;
                case "Btn":
                    break;
                case "atag":
                    this.column = updateColumn;
                    this.item = object;
                    this.defaultSearchParams = {"cardComID_matching": object.CardComID};
                    this.formType = "update";
                    this.$refs.modalRef.modalShow();
                    break;
                case "btnCreate":
                    this.column = createColumn;
                    this.formType = "create";
                    this.item = {};
                    //TODO : btnCreate 시 siteId 처리
                    // this.item = {siteId:{label:"LG",value:"111"}};
                    console.log("outterModal.column", this.column);
                    this.$refs.modalRef.modalShow();
                    break;
                case "close":
                    this.dataInit();
                    break;
                case "reload":
                    this.dataInit();
                    this.$refs.defaultList.loadData();
                    break;
            }
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
    data() {
      return {
        tid: 'PntCardCom',
        columns : ListFields.columns,
        searchFields: searchColumn,
        listButtons: ListFields.listButtons,
        column : [],
        menuName :'카드사 관리',
        defaultSearchParams :{},
        selectItems : ()=>[],
        listUrl : null,
        item : {},
        formType :""
      }
    },
    mounted() {
    }
  }
</script>

<style>

</style>