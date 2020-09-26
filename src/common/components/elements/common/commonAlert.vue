<template>
    <div>
        <b-modal
                v-model="show"
                :title="label"
                :size="size"
                :no-close-on-backdrop="true"
        >
            <b-container>
                <p>
                    {{ message }}
                </p>
            </b-container>
            <template v-slot:modal-footer>
                <b-button
                        v-if="confirmBtn"
                        variant="primary"
                        class="float-right"
                        size="sm"
                        v-on:click="onConfirmClick($event)"
                >
                    {{ confirmBtnLabel }}
                </b-button>
                <b-button
                        variant="default"
                        class="float-right"
                        size="sm"
                        v-on:click="close"
                >
                    {{ closeBtnLabel }}
                </b-button>
            </template>
        </b-modal>
    </div>
</template>


<script>
    //btnClass : 'btn btn-default'
    export default {
        name:'commnAlert',
        props:{
            size :{
                type: String,
                default : "sm"
            },
            callBackFunc:{
                type : Function,
                default : function () {
                }
            }
        },
        methods:{
            async onConfirmClick(e){
                this.show = false;
                this.callBackFunc("confirm",this.modalKey);
                this.init();
            },
            //버튼1,닫기버튼.
            confirmShow(modalLabel,message,modalKey,conFirmbtnLabel,closebtnLabel){
                this.show = true;
                this.confirmBtn = true;
                if(modalLabel){
                    this.label = modalLabel;
                }
                if(message){
                    this.message = message;
                }
                if(modalKey){
                    this.modalKey = modalKey;
                }

                if(conFirmbtnLabel){
                    this.confirmBtnLabel = conFirmbtnLabel;
                }
                if(closebtnLabel){
                    this.closeBtnLabel = closebtnLabel;
                }
            },
            //닫기버튼만 존재.
            closeShow(modalLabel,message,modalKey){
                this.show = true;

                if(modalKey){
                    this.modalKey = modalKey;
                }
                if(modalLabel){
                    this.label = modalLabel;
                }
                if(message){
                    this.message = message;
                }
                this.confirmBtn = false;
            },
            close(){
                this.show = false;
                this.callBackFunc("close",this.modalKey);
                this.init();
            },
            init(){
                this.label= "확인";
                this.closeBtnLabel = "닫기";
                this.confirmBtnLabel = "확인";
                this.modalKey = "";
            }
        },
        data(){
            return {
                show : false,
                label : "확인",
                closeBtnLabel : "닫기",
                confirmBtnLabel : "확인",
                confirmBtn : false,
                modalKey : "",
                message : ""
            }
        },
        created() {
        }
    };
</script>

<style>

</style>