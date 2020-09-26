<template>
    <div>
        <b-modal
            v-model="show"
            :title="label"
            :size="size"
            :no-close-on-backdrop="true"
            :scrollable="true"
        >

            <b-container>
                <Default-Form
                    :Fields="Fields"
                    :propItems="propItems"
                    :propCallBackEvent="modalBtnClick"
                    ref="defaultForm"
                />
                <CardComContactList
                    v-if="propItems.id"
                    :tid="tid"
                    :columns = "columns"
                    :propCallBackFunc ="modalBtnClick"
                    :propDefaultSearchParams ="propDefaultSearchParams"
                    :listUrl="listUrl"
                    :listButtons="listButtons"
                    ref="cardComContactList"
                />
                <CardComContactModal ref="innerModalRef"
                            :Fields="column"
                            :callBackFunc="modalBtnClick"
                            :propItems="item"
                            :formType="formType"
                />
            </b-container>

            <template v-slot:modal-footer>
                <b-button
                  variant="primary"
                  class="float-right"
                  size="sm"
                  v-on:click="onClick($event)"
                >
                    저장
                </b-button>
                <b-button
                        variant="default"
                        class="float-right"
                        size="sm"
                        v-on:click="close"
                >
                    닫기
                </b-button>
            </template>
        </b-modal>
        <Common-Alert ref="commonAlert" :callBackFunc="modalBtnClick"/>
    </div>
</template>


<script>
//기본리스트
import CardComContactList from "../cardComContact/CardComContactList.vue";
//컬럼설정
import {ListFields,searchColumn,createColumn,updateColumn} from "../cardComContact/cardComContact.js";
import CardComContactModal from "../cardComContact/cardComContactModal.vue";

import { log } from '~/static/js/adapter-7.2.5';
    //btnClass : 'btn btn-default'
    export default {
        name:'cardComModal',
        components: {
            CardComContactList,
            CardComContactModal,
        },
        props:{
            label :{
                type: String,
                default : "카드사 등록/수정"
            },
            size :{
                type: String,
                default : "lg"
            },
            Fields :{
            },
            propItems:{
                default :()=>{}
            },
            callBackFunc:{
                type : Function,
                default : function () {
                }
            },
            propDefaultSearchParams:{
                type : Object,
                default :function () {
                    return {}
                }
            },

            // formType:{
            //     type : String
            // }
        },
        methods:{
            async onClick(e){
                const getValidation = this.$refs.defaultForm.getValidation();
                if(getValidation){
                    this.$refs.commonAlert.confirmShow('카드사 등록/수정','저장하시겠습니까?','save','저장','닫기');
                }else {
                    this.$refs.commonAlert.closeShow('카드사 등록/수정','필수 입력값을 입력해 주세요.');
                }
            },
            modalBtnClick(type,object,modalKey){
                console.log("modal event!!!!",type, modalKey);
                switch (type) {
                    case "btnDupe":
                        alert("중복검사버튼 from modal");
                        break;
                    case "reload":
                        this.dataInit();
                        this.$refs.cardComContactList.loadData();
                        break;
                    case "atag":
                        this.column = updateColumn;
                        object.CardComID = this.propItems.CardComID;
                        this.item = object;
                        this.formType = "update";
                        this.$refs.innerModalRef.modalShow(updateColumn);
                        break;
                    case "btnCreate":
                        this.column = createColumn;
                        this.formType = "create";
                        this.item = this.propItems;
                        //TODO : btnCreate 시 siteId 처리
                        // this.item = {siteId:{label:"LG",value:"111"}};
                        console.log("innerModal.column", this.column);
                        this.$refs.innerModalRef.modalShow(createColumn);
                        break;
                    case "confirm":
                        this.save(modalKey);
                        break;
                    case "close":
                        break;
                }
            },
            modalShow(){
              this.show = true;
            },
            close(){
                this.show = false;
                this.callBackFunc("close");
            },
            async checkDupe(modalKey) {
              const pid = Object.keys(modalKey)[0];
              const result = await this.$fetch({
                api: {
                  path: "mng/pntCardCom/read",
                  method: "get",
                },
                query: modalKey
              });
              //TODO : validation fail 처리 어떻게 나타내지
              if(result.data.result == '200') {
                this.$refs.commonAlert.closeShow('카드사 등록/수정','이미 존재하는 ID 입니다.');
                this.setValidation(pid, result);
              }else {
                this.$refs.commonAlert.closeShow('카드사 등록/수정','사용하실수 있는 ID 입니다.');;
                this.setValidation(pid, result);
              }
            },
            searchAddr() {
              //TODO : 우편번호 주소찾기 => 공통 컴포넌트 사용
              console.log("주소찾기");
            },
            async save(modalKey){
                let res = {}
                res = await this.$refs.defaultForm.saveSubmit("/mng/pntCardCom/save");
                if(res['status'] == '200'){
                    if(res['data']['result'] == '401'){
                        this.$refs.commonAlert.closeShow('카드사 등록/수정','존재하는 ID 입니다.');
                    }else{
                        this.$refs.commonAlert.closeShow('카드사 등록/수정',' 저장 되었습니다.');
                        this.show = false;
                        this.callBackFunc("reload");
                    }
                }
            },
            dataInit(){
                this.column = [];
                this.item = {};
                this.formType =""
            },
        },


        data(){
          return {
            //for CardComContactList
            tid: 'PntCardComContact',
            columns : ListFields.columns,
            searchFields: searchColumn,
            createColumn : createColumn,
            updateColumn: updateColumn,
            listButtons: ListFields.listButtons,
            column : [],
            selectItems : ()=>[],
            listUrl : null,
            item : {},
            formType :"",

            //for CardComModal
            show: false,
          }
        },
        created() {
        },
    };
</script>

<style>

</style>