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
        <Default-Form :Fields="Fields" ref="defaultForm" :propItems="propItems" />
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
        name:'prpayModal',
        props:{
            label :{
                type: String,
                default : "특별포인트 정산 그룹코드 등록/수정"
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
                    this.$refs.commonAlert.confirmShow('특별포인트 정산그룹코드 '+title,'정산그룹코드를'+message+' 하시겠습니까?',this.formType,
                        '저장','닫기');
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
            modalShow(){
              this.show = true;
            },
            close(){
                this.show = false;
                this.callBackFunc("close");
            },
            async save(modalKey){
                let res = {}
                if(this.formType == 'create'){
                    res = await this.$refs.defaultForm.saveSubmit("/mng/pntSettlementGroupCode/create");
                }else if(this.formType == 'update'){
                    res = await this.$refs.defaultForm.saveSubmit("/mng/pntSettlementGroupCode/update");
                }
                if(res['status'] == '200'){
                    if(res['data']['result'] == '401'){
                        this.$refs.commonAlert.closeShow('특별포인트 정산 그룹코드 등록/수정','존재하는 그룹코드 입니다.');
                    }else{
                        this.$refs.commonAlert.closeShow('특별포인트 정산 그룹코드 등록/수정','특별포인트 정산 그룹코드 저장 되었습니다.');
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
              show : false
          }
        },
        created() {
        }
    };
</script>

<style>

</style>