<template>
  <div>
    <DefaultList
            :tid="tid"
            :columns = "columns"
            :searchFields = "searchFields"
            :menuName ="menuName"
            :propCallBackFunc ="callBackFunc"
            :defaultSearchParams="defaultSearchParams"
    />
  </div>
</template>

<script>
  //기본리스
  import DefaultList from "../../../common/components/elements/default/DefaultList";
  //컬럼설정
  import ListTest from "../../../fetchSheets/nodeType/test";

  export default {
    name : "TestList",
    components: {
      DefaultList
    },
    methods:{
      callBackFunc:  function(type,object,columns) {
        console.log(type,object,columns);
        switch (type) {
            case "checkBoxChanged":
              this.selectItems = object
              break;
            case "Btn":
              break;
            case "doubleClick":
              break;
        }
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
        menuName :'Default Test Table RaRaRa',
        defaultSearchParams :{"tid_wildcard":"test"},
        selectItems : ()=>[]
      }
    },
    mounted() {
    }
  };
</script>

<style>
</style>
