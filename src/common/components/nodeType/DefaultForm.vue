<template>
    <div>
    <template v-for="(Field,index) in fieldList">
    <div class="m-b-20">
        <div class="row titleBox">
            <div class="col-xs-6">
                <h5><i class="fa fa-caret-square-right"></i> {{ Field.group }}</h5>
            </div>
        </div>
        <div class="formBox">
            <form class="" action="#"  role="form" name="searchForm">
                <div class="form-wrap">
                    <div class="form-group row row-space-0" >
                    <template v-for="(pidInfo,index) in Field.pids">
                        <div :class="makeClass(pidInfo)" v-bind:key="pidInfo.type+'_'+pidInfo.pid">
                            <div class="row row-space-0" v-if="!notActiveElements.includes(pidInfo.pid)">
                                <label class="col-custom-1 col-form-label">
                                    <span v-if="pidInfo.required" class="el-required">*</span>
                                    {{ makeLabel(pidInfo) }}
                                </label>
                                <Elements
                                        :fieldInfo = "pidInfo"
                                        :index = "index"
                                        :propCallBackEvent ="callBackEvent"
                                        :formType = "formType"
                                        :ref="`defaultRefs_`+pidInfo.pid"
                                        :propValue="getItemValue(propItems, pidInfo.pid)"
                                        :originValue="getItemOriginValue(propItems, pidInfo.pid)"
                                />
                            </div>
                        </div>
                    </template>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </template>
    </div>
</template>

<script>
    /**
     * notActiveElements : element 제거 및 생성.
     */
    import Elements from "../elements/common/Elements";
    import { cloneDeep } from 'lodash';
    export default {
        name:'DefaultForm',
        components: {
            Elements
        },
        props:{
            propCallBackEvent :{
                type : Function,
                default : function (e) {
                    console.log("default");
                }
            },
            Fields :{
                type : Array,
                required : true
            },
            propItems : {
                type : Object,
                default : function (e) {
                    return {};
                }
            }
        },
        methods:{
            getValueQuery(){
                const fields = this.fieldList;
                let valueQuery = {};
                for(let i in fields){
                    const pids = fields[i]['pids'];
                    for(let j in pids) {
                        const refKey = `defaultRefs_${pids[j].pid}`;
                        const tagType = `${pids[j].type}`;
                        //필요한 value만 가져갈수있도록 고민필요.
                        if ("btn" == tagType) continue;
                        let ref = this.$refs[refKey];
                        if (!ref || _.isEmpty(ref)) continue;
                        ref = ref[0];
                        const refData = ref.getValue();
                        const keys = _.keys(refData);
                        for (let t in keys) {
                            valueQuery[keys[t]] = refData[keys[t]];
                        }
                    }
                }
                console.log("valueQuery",valueQuery);
                return valueQuery;
            },
            getObjValueQuery(){
                const fields = this.fieldList;
                let valueQuery = {};
                for(let i in fields){
                    const pids = fields[i]['pids'];
                    for(let j in pids) {
                        const refKey = `defaultRefs_${pids[j].pid}`;
                        const tagType = `${pids[j].type}`;
                        //필요한 value만 가져갈수있도록 고민필요.
                        if ("btn" == tagType) continue;
                        let ref = this.$refs[refKey];
                        if (!ref || _.isEmpty(ref)) continue;
                        ref = ref[0];
                        const refData = ref.getObjValue();
                        const keys = _.keys(refData);
                        for (let t in keys) {
                            valueQuery[keys[t]] = refData[keys[t]];
                        }
                    }
                }
                console.log("getObjValue",valueQuery);
                return valueQuery;
            },
            getValidation(){
                const fields = this.fieldList;
                for(let i in fields){
                    const pids = fields[i]['pids'];
                    for(let j in pids) {
                        const refKey = `defaultRefs_${pids[j].pid}`;
                        const tagType = `${pids[j].type}`;
                        if ("btn" == tagType) continue;
                        let ref = this.$refs[refKey];
                        if (!ref || _.isEmpty(ref)) continue;
                        ref = ref[0];
                        const refValidation = ref.getValidation();
                        if(!refValidation){
                            return false;
                        }
                    }
                }
                return true;
            },
            getItemValue(propItems, pid){
              const item = propItems;
              if(_.isEmpty(item)) return "";

              let value = "";
              //Array일 경우.....??
              if(_.isArray(item[pid])){
                return _.isEmpty(item[pid]) ? "" : _.map( item[pid], obj => { return obj['value'] }).join(",");
              }else if(_.isObject(item[pid])){
                  value =  item[pid]['value'];
              }else{
                  value =  _.isUndefined(item) ? "" : item[pid];
              }
              return value;
            },
            getItemOriginValue(propItems, pid){
                return propItems ? propItems[pid] : "";
            },
            callBackEvent(type,object){
                console.log(type,object);
                this.propCallBackEvent(type,object);
            },
            setNotActiveElements(pids){
                if(_.isArray(pids)){
                    this.notActiveElements = pids;
                }
            },
            getNotActiveElements(){
                return this.notActiveElements;
            },
            //TODO 200924 this.Fields -> 옵저버 객체?
            makeFields(){
                const fields = cloneDeep(this.Fields);
                console.log("defaultForm's prop fields", this.Fields);
                console.log("defaultForm's cloned fields", fields);
                for(let i in fields) {
                    const fieldinfo = fields[i]
                    const pids = fieldinfo['pids'];
                    let pidArray = [];
                    for (let j in pids) {
                        let pidInfo = pids[j];
                        let colClass = "col-custom-11";
                        let colLineClass = "col-lg-12";
                        if (_.isArray(pidInfo)) {
                            let size = pidInfo.length;
                            let colSize = (12-size)/size;
                            let colLineSize = colSize+1;
                            colClass = "col-custom-"+colSize;
                            colLineClass = "col-lg-"+colLineSize;
                            for (let k in pidInfo) {
                                pidInfo[k]['colSize'] = colClass;
                                pidInfo[k]['colLineSize'] = colLineClass;
                                pidArray.push(pidInfo[k]);
                            }
                        } else if (_.isObject(pidInfo)) {
                            pidInfo['colSize'] = colClass;
                            pidInfo['colLineSize'] = colLineClass;
                            pidArray.push(pidInfo);
                        }
                    }
                    fieldinfo['pids'] = pidArray;
                }
                // console.log("fields",fields);
                return fields;
            },
            makeClass(pidInfo){
                return pidInfo['colLineSize'];
            },
            makeLabel(pidInfo){
                let label = pidInfo.label;
                // if(pidInfo.required){
                //     label = "*"+label;
                // }
                return label;
            },
            async saveSubmit(url,addObject){
                if(!this.getValidation()) return {};
                let data = Object.assign({},this.getValueQuery());
                if(_.isObject(addObject)){
                    data = Object.assign({},data,addObject);
                }
                const res = await this.$fetch({
                    api: {
                        path: url,
                        method: "post",
                    },
                    data: data,
                });
                return res;
            }
        },
        data(){
            return{
                formType : "defaultForm",
                notActiveElements :[],
//                item : cloneDeep(this.propItems),
                fieldList:this.makeFields()
            }
        }
    };
</script>

<style>
</style>
