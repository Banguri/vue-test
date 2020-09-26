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
        <Default-Form :Fields="column" ref="defaultForm" :propItems="propItems" />
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
    //btnClass : 'btn btn-default'
    export default {
        name:'cardComContactModal',
        props:{
            label :{
                type: String,
                default : "카드사 담당자 등록/수정"
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
            formType:{
                type : String
            }
        },
        methods:{
            async onClick(e){
                const getValidation = this.$refs.defaultForm.getValidation();
                let message = "등록";
                let title = "등록";
                if(this.formType == 'update'){
                    message = '수정';
                    title = '수정/상세';
                }
                if(getValidation){
                    this.$refs.commonAlert.confirmShow('카드사 담당자 등록/수정','저장하시겠습니까?','create','저장','닫기');
                }else {
                    this.$refs.commonAlert.closeShow('카드사 담당자 등록/수정','필수 입력값을 입력해 주세요.');
                }
                // const getDataQuery = this.$refs.defaultForm.getValueQuery();
                // console.log("getDataQuery",getDataQuery);
                // console.log("getValidation",getValidation);
            },
            modalBtnClick(type,modalKey){
                console.log("type",type);
                switch (type) {
                    case "confirm":
                        this.save(modalKey);
                    case "close":
                        break;
                }
            },
            modalShow(column){
              this.column = column;
              this.show = true;
            },
            close(){
                this.show = false;
                this.callBackFunc("close");
            },
            async save(modalKey){
                let res = {}
                res = await this.$refs.defaultForm.saveSubmit("/mng/pntCardComContact/save");
                if(res['status'] == '200'){
                    if(res['data']['result'] == '401'){
                        this.$refs.commonAlert.closeShow('카드사 담당자 등록/수정','순번이 아마 중복인가?');
                    }else{
                        this.$refs.commonAlert.closeShow('카드사 담당자 등록/수정','카드사 담당자 정보 저장 되었습니다.');
                        this.show = false;
                        this.callBackFunc("reload");
                    }
                }
            }
        },
        computed : {

        },
        watch:{
        },
        data(){
          return {
              show : false,
              column : []
          }
        },
        created() {
        }
    };
</script>

<style>

</style>