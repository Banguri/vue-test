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
                :checkBoxEnabled=false
                ref="defaultList"
        />
        <PsgcdModal ref="modalRef"
                    :Fields="column"
                    :callBackFunc="callBackFunc"
                    :propItems="item"
                    :formType="formType"
        />
    </div>
</template>

<script>
    //기본리스트
    import DefaultList from "../../../../common/components/elements/default/DefaultList";
    //컬럼설정
    import {ListFields,searchColumn,createColumn,updateColumn} from "./pntSettlementGroupCdSheets.js";
    import PsgcdModal from "./psgcdModal"

    export default {
        name : "pntSettlementGroupCode",
        components: {
            DefaultList,
            PsgcdModal
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
                    case "atag":
                        console.log("object",object);
                        this.column = updateColumn;
                        this.item = object;
                        this.formType = "update";
                        this.$refs.modalRef.modalShow();
                        break;
                    case "btnCreate":
                        this.column = createColumn;
                        this.formType = "create";
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
        data(){
            return{
                tid :'pntSettlementGroupCode',
                columns : ListFields.columns,
                searchFields: searchColumn,
                listButtons: ListFields.listButtons,
                column : [],
                menuName :'특별포인트 정산 그룹코드',
                defaultSearchParams :{},
                selectItems : ()=>[],
                listUrl : null,
                item : {},
                formType :""
            }
        },
        mounted() {
            console.log("ListTest.columns",ListFields.columns);
        }
    };
</script>

<style>
</style>
