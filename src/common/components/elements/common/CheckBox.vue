<template>
    <div class="form-group">
        <div :class="className">
            <template v-for="(item,index) in items" >
            <div class="form-check form-check-inline" v-bind:key="pid+'_'+item[valueKey]+'_'+index">
                <input type="checkbox" :value="item[valueKey]" :id="pid+'_'+item[valueKey]+'_'+index+'_'+uuid" class="form-check-input" v-model="checkdValue" />
                <label class="form-check-label" :for="pid+'_'+item[valueKey]+'_'+index+'_'+uuid">{{ item[displayKey] }} </label>
            </div>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        name:'CheckBox',
        props:{
            onEventPropFunc :{
                type : Function,
                default : function (e) {
                    console.log("search");
                }
            },
            label : {
                type : String,
                default : "테스트"
            },
            selectUrl :{
                type : String,
                default :"",
                required : true
            },
            valueKey:{
                type : String,
                default : "value"
            },
            displayKey : {
                type : String,
                default : "label"
            },
            defaultQuery :{
                type : Object,
                default : function () {
                    return {};
                }
            },
            pid:{
                type:String,
                required: true
            },
            propValue : {
            },
            required:{
                default : false
            }
        },
        methods:{
            getValue(){
                let pid = this.pid;
                const data = {};
                data[pid] = this.checkdValue.join(",");
                console.log("checkdValue",this.checkdValue);
                return data;
            },
            loadData(){
                let textQuery = {};
                if(!_.isUndefined(this.searhKey) && this.searhKey != ""){
                    textQuery[this.searhKey] = search
                }
                const searchQuery =
                    Object.assign(this.defaultQuery,textQuery);
                this.$fetch({
                    api: {
                        path: this.selectUrl,
                        method: "get",
                    },
                    query : searchQuery
                }).then(res => {
                    console.log("result",res);
                    this.items = res.data.items;
                });
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
        watch:{
            propValue () {
                this.value = this.propValue;
                this.checkdValue = this.propValue.split(",");
            },
            value : function (val,oval) {
                this.checkValidation();
            }
        },
        data(){
            return{
                items :[],
                value : this.propValue,
                checkdValue : [],
                className : "",
                validation : !this.required,
                uuid : this.$uuid.v1()
            }
        },
        mounted() {
        },
        created() {
            console.log("propValue",this.propValue);
            this.checkValidation(true);
            this.loadData();
        }
    };
</script>

<style>

</style>
