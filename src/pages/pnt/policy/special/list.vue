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
                :checkBoxEnabled="false"
                ref="defaultList"
        />
        <SpecialModal ref="modalRef"
                    :Fields="column"
                    :callBackFunc="callBackFunc"
                    :propItems="getItem()"
                    :formType="formType"
        />
        <Common-Alert ref="commonAlert"/>
    </div>
</template>

<script>
    //기본리스트
    import DefaultList from "../../../../common/components/elements/default/DefaultList";
    //컬럼설정
    import {ListFields,searchColumn,createColumn,updateColumn} from "./specialSheets.js";
    import SpecialModal from "./specialModal"

    export default {
        name : "SpecialList",
        components: {
            DefaultList,
            SpecialModal
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
                    case "btnCopy":
                        if(this.copyItem == null || _.isEmpty(this.copyItem)){
                            this.$refs.commonAlert.closeShow('포인트 정책복사','복사할 포인트를 선택해주세요.');
                        }else{
                            this.$refs.modalRef.modalShow();
                        }
                        break;
                    case "Radio":
                        console.log("object",object);
                        this.column = createColumn;
                        this.copyItem = object;
                        this.formType = "copy";
                        // this.$refs.modalRef.modalShow();
                        break;
                    case "atag":
                        console.log("object",object);
                        if(columns['field'] == "PointName"){
                            this.column = updateColumn;
                            this.item = object;
                            this.formType = "update";
                            this.$refs.modalRef.modalShow();
                        }
                        break;
                    case "btnCreate":
                        const siteInfo = this.$refs.defaultList.getObjValueQuery();
                        const site = siteInfo['siteID_matching'];
                        console.log("site",site);
                        if(site == null || _.isEmpty(site)){
                            this.$refs.commonAlert.closeShow('특별포인트등록','검색목록에서 사이트를 선택해 주세요.');
                        }else{
                            this.column = createColumn;
                            this.formType = "create";
                            const site = siteInfo['siteID_matching']
                            this.item = {siteID:{label:site['value'],value:site['value']}};
                            this.$refs.modalRef.modalShow();
                        }
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
                this.item = {};
                if(!_.isEmpty(this.copyItem)){
                    this.formType ="copy";
                    this.column = createColumn;
                }else{
                    this.formType ="";
                    this.column = [];
                }

            },
            onClick:function () {
                // pntPolicyreLoadData
            },
            onClickSelect: function () {
                console.log("select",this.selectItems);
            },
            getItem(){
                if(this.formType == 'copy'){
                    return this.copyItem;
                }else{
                    return this.item;
                }
            }
        },
        data(){
            return{
                tid :'pntPolicy',
                columns : ListFields.columns,
                searchFields: searchColumn,
                listButtons: ListFields.listButtons,
                column : [],
                menuName :'특별포인트 정책',
                defaultSearchParams :{"pointTypeCode_matching":"02"},
                selectItems : ()=>[],
                listUrl : null,
                item : {},
                formType :"",
                copyItem : {}
            }
        },
        mounted() {
            console.log("ListTest.columns",ListFields.columns);
        }
    };
</script>

<style>
</style>
