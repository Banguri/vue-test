<template>
    <div :class="className">
            <v-select :options="options" @search="onSearch" @input="setSelected"
                :key="pid"
                :reduce="item => item"
                class="style-chooser"
                :disabled="disabled"
                :required = "required"
                :placeholder="placeholder"
                label="label"
                v-model="itemObj"
                >
            </v-select>
            <Common-Btn v-if="btnCheck()" v-bind="btnObject" :onPropClick="onBtnClick" />
        </div>
</template>

<script>
    // <template slot="option" slot-scope="option">
    //     {{option[ displayKey ]}}
    // </template>
    // <template slot="selected-option" slot-scope="option">
    //     {{option[ displayKey ]}}
    // </template>
    export default {
        name:'Select',
        components :{
        },
        props:{
            onEventPropFunc :{
                type : Function,
                default : function (e) {
                    //console.log("search");
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
            searhKey :{
                type : String,
                default : ""
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
            },
            placeholder:{
              default : "",
              type:String
            }
        },
        methods:{
            btnCheck(){
                return !_.isEmpty(this.btnObject);
            },
            onBtnClick(key){
                this.onEventPropFunc(key,this.getValue());
            },
            setSelected(obj){
                if(obj == null || _.isUndefined(obj)){
                    this.itemObj = null;
                    this.value = obj;
                }else if(_.isObject(obj)){
                    this.itemObj = obj;
                    this.value = obj[this.valueKey];
                }else{
                    this.itemObj = null;
                    this.value = obj;
                }
                this.onEventPropFunc("setValue",obj,this.pid);
            },
            getValue(){
                let pid = this.pid;
                const data = {};
                data[pid] = this.value;
                return data;
            },
            getObjValue(){
                let pid = this.pid;
                const data = {};
                data[pid] = this.itemObj;
                return data;
            },
            onSearch(search,loading){
                loading(true);
                this.search(loading,search,this);
            },
            reloadData(changeQuery){
                this.changeQuery = changeQuery;
                this.loadData(this,"");
            },
            search:_.debounce((loading,search,vm)=>{
                console.log("searchSelect",search);
                vm.loadData(vm,search);
                loading(false);
            },500),
            loadData(vm,search){
                let textQuery = {};
                if(!_.isUndefined(this.searhKey) && this.searhKey != ""){
                    textQuery[this.searhKey] = search
                }
                const searchQuery =
                    Object.assign({},this.defaultQuery,textQuery,this.changeQuery);
                vm.$fetch({
                    api: {
                        path: vm.selectUrl,
                        method: "get",
                    },
                    query : searchQuery
                }).then(res => {
                    console.log("result",res);
                    vm.options = res.data.items;
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
            },
            defaultObj(){
                if(this.propValue){
                    return {value :this.propValue, label :this.propValue};
                }else{
                    return null;
                }
            }
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
                options :[],
                value : this.propValue,
                changeQuery: {},
                disabled : this.propDisabled,
                className : "",
                validation : !this.required,
                itemObj: this.defaultObj()
            }
        },
        mounted() {
        },
        created() {
            console.log("propValue",this.propValue);
            this.checkValidation(true);
            this.loadData(this,"");
        }
    };
</script>

<style>
    .style-chooser{
        min-width: 150px;
    }
</style>
