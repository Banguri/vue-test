<template>
    <div>
        <p class="form-text">{{ this.makeColumn() }}</p>
        <input type="hidden" :value="value" />
    </div>
</template>

<script>
    export default {
        name:'TextP',
        components :{
        },
        props:{
            onEventPropFunc :{
                type : Function,
                default : function (e) {
                }
            },
            pid:{
                type:String,
                required: true
            },
            propValue : {
            },
            btnObject:{
                type:Object,
                default :function () {
                    return {};
                }
            },
            propDisabled:{
                default : false
            },
            required:{
                default : false
            },
            displayKey : {
                type : String,
                default : "label"
            },
            originValue:{
            }
        },
        methods:{
            getValue(){
                let pid = this.pid;
                const data = {};
                data[pid] = this.value;
                return data;
            },
            makeColumn(){
                let display = "";

                if(_.isObject(this.originValue)){
                    const displaykey = this.displayKey.split(",");
                    if(displaykey.length == 2){
                        display = this.originValue[displaykey[0]]+"("+this.originValue[displaykey[1]]+")";
                    }else{
                        display = this.originValue[displaykey[0]];
                    }
                }else{
                    display =  this.originValue;
                }

                return display;
            },
            getValidation(){
                return true;
            }
        },
        data(){
            return{
                value : this.propValue,
                displayName : this.makeColumn()
            }
        },
        created() {
        },
        mounted() {
        }
    };
</script>

<style>

</style>
