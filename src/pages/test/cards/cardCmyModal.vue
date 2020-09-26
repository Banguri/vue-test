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
                default : "카드사 등록 (조회/수정)"
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
                if(getValidation){
                    this.$refs.commonAlert.confirmShow('선복포인트정책 등록/수정','저장하시겠습니까?','create','저장','닫기');
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
                    let defaultData = {pntTypCd : "10",siteId :"111"}
                    res = await this.$refs.defaultForm.saveSubmit("/node/pntPolicy/create.json",defaultData);
                }else if(this.formType == 'update'){
                    res = await this.$refs.defaultForm.saveSubmit("/node/pntPolicy/update.json");
                }
                if(res['status'] == '200'){
                    this.show = false;
                    this.callBackFunc("reload");
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