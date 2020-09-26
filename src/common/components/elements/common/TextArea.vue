<template>
    <div :class="className">
        <textarea class="form-control form-control-sm"
                  rows="5"
                  :disabled="disabled"
                  v-model="value" >
        </textarea>
    </div>
</template>

<script>

    export default {
        name:'TextArea',
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
            propDisabled:{
                default : false
            },
            btnObject:{
                type:Object,
                default :function () {
                    return {};
                }
            },
            required:{
                default : false
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
            setValue(value){
                this.value = value;
            },
            checkValidation(createCheck){
                let className = this.className;
                let validation = this.validation;
                if(this.required){
                    const val = this.value;
                    if(!_.isUndefined(val) && !_.isEmpty(val) && val.trim() != ""){
                        if(!this.validation) {
                            validation = true;
                            className = " is-valid";
                        }
                    }else{
                        validation = false;
                        className =" is-invalid";
                    }
                    if(createCheck){
                        this.validation = validation;
                        this.className = className;
                    }else if(validation != this.validation){
                        this.validation = validation;
                        this.className = className;
                    }
                }
            },
            getValidation(){
                return this.validation;
            }
        },
        computed : {
        },
        watch:{
            propValue () {
               this.value = this.propValue;
            },
            value : function (val,oval) {
                this.checkValidation();
            }
        },
        data(){
            return{
                value : this.propValue,
                disabled : this.propDisabled,
                className : "",
                validation : !this.required
            }
        },
        created() {
            this.checkValidation(true);
        },
        mounted() {
        }
    };
</script>

<style>

</style>
