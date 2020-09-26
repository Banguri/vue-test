<template>
    <div>
        <b-button
                :variant="color"
                v-bind:class="btnClass"
                :size="size"
                v-on:click="onClick($event)"
        >
            {{ this.label }}
        </b-button>
    </div>
</template>


<script>
    //btnClass : 'btn btn-default'
    export default {
        name:'CommonBtn',
        props:{
            onPropClick :{
                type : Function,
                default : function (e) {
                }
            },
            btnObject:{
                type:Object,
                default :function () {
                    return {};
                }
            },
            label :{
                type: String,
                default : "버튼"
            },
            btnKey :{
                type: String,
                default : "btn"
            },
            btnClass :{
                type: String,
                default : "float-right"
            },
            color :{
                type:String,
                default : "default"
            },
            size : {
                type:String,
                default : "sm"
            }
        },
        methods:{
            btnCheck(){
                return !_.isEmpty(this.btnObject);
            },
            async onClick(e){
                e.stopPropagation();
                await this.onPropClick(this.btnKey,null);
            }
        },
        computed : {
        },
        watch:{
        },
        created() {
        }
    };
</script>

<style>

</style>