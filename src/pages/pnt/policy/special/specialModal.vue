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
        name:'SpecialModal',
        props:{
            label :{
                type: String,
                default : "특별포인트정책 등록/수정"
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
                    this.$refs.commonAlert.confirmShow('특별포인트정책 등록/수정','저장하시겠습니까?','create','저장','닫기');
                }
            },
            modalBtnClick(type,modalKey){
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
                if(this.formType == 'create'|| this.formType == 'copy'){
                    let defaultData = {pointTypeCode : "02"}
                    res = await this.$refs.defaultForm.saveSubmit("/mng/pntPolicy/create",defaultData);
                }else if(this.formType == 'update'){
                    res = await this.$refs.defaultForm.saveSubmit("/mng/pntPolicy/update");
                }
                if(res['status'] == '200'){
                    this.show = false;
                    this.$refs.commonAlert.closeShow('특별포인트 정책 등록/수정','특별포인트 정책이 저장 되었습니다.');
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