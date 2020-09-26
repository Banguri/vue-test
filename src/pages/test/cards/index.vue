<template>
  <div>
    <DefaultList
            :tid="tid"
            :columns = "columns"
            :searchFields = "searchFields"
            :menuName ="menuName"
            :propCallBackFunc ="callBackFunc"
            :defaultSearchParams="defaultSearchParams"
            :listUrl="listUrl"
            :listButtons="listButtons"
            ref="defaultList"            
    />
    <CardCmyModal ref="modalRef"
                :Fields="column"
                :callBackFunc="callBackFunc"
                :propItems="item"
                :formType="formType"
    />    
  </div>
</template>

<script>
  //기본리스
  import DefaultList from "../../../common/components/elements/default/DefaultList";
  //컬럼설정
  import { ListTest,createColumn,updateColumn } from "../../../fetchSheets/nodeType/cardTest";
  import CardCmyModal from "./cardCmyModal"

  export default {
    name : "TestList",
    components: {
      DefaultList,
      CardCmyModal
    },
    methods:{
      callBackFunc:  function(type,object,columns) {
        console.log('called!!!!!!!!!!!!'+type,object,columns);
        switch (type) {
            case "checkBoxChanged":
              this.selectItems = object
              break;
            case "Btn":
              break;
            case "doubleClick":
              break;
            case "btnCreate":
                this.column = createColumn;
                this.formType = "create";
                this.item = {siteId:{label:"LG",value:"111"}};
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

      },
      onClickSelect: function () {
        console.log("select",this.selectItems);
      }
    },
    data(){
      return{
        tid :'nodeType',
        columns : ListTest.columns,
        searchFields: ListTest.searchField,
        listButtons: ListTest.listButtons,
        menuName :'test 카드사 관리 index',
        defaultSearchParams :{"tid_wildcard":"test"},
        selectItems : ()=>[],
        listUrl : null,
        item : {},
        formType :""        
      }
    },
    mounted() {
    }
  };
</script>

<style>
</style>
