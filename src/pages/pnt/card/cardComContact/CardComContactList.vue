<template>
    <div>
        <article>         
            <div class="row titleBox">
                <div class="col-xs-6">
                    <h6><i class="fa fa-caret-right"></i> 카드사 담당자 목록</h6>
                </div>
                <div class="col-xs-6 text-right">
                    <fieldset>
                        <template v-for="(buttoninfo,index) in listButtons">
                            <Common-Btn :key="index" v-bind="buttoninfo" :onPropClick="propCallBackFunc" />
                        </template>
                    </fieldset>
                </div>
            </div>
            <div class="form-group">
                <NodeList
                        ref="nodeList"
                        :tid="tid"
                        :columns="columns"
                        :onEventPropFunc="onEventCallBackFunc"
                        :initSearchParams="initSearchParams"
                        :propDefaultSearchParams ="propDefaultSearchParams"
                        :listUrl="listUrl"
                        :checkBoxEnabled="checkBoxEnabled"
                />
            </div>
        </article>
    </div>
</template>

<script>
    import NodeList from "../../../../common/components/nodeType/NodeList.vue";
    export default {
        name : "cardComContactList",
        components: {
            NodeList,
        },
        props : {
            tid :{
                type : String,
                required : true,
                default :""
            },
            //fetchSheets nodeType 참고
            columns :{
                type : Array,
                required: true,
                default :()=>[]
            },
            listButtons : {
                type : Array,
                default :()=>[]
            },
            menuName :{
                type : String,
                default : ""
            },
            //콜백 메소드
            propCallBackFunc : {
                type : Function,
                default : function () {
                    console.log("CallBackFunc not Found");
                }
            },
            //페이지 뒤로가기 고민필요..
            initSearchParams :{
                type : Object,
                default : function () {
                    return {}
                }
            },
            propDefaultSearchParams :{
                type : Object,
                default : function () {
                    return {}
                }
            },
            listUrl :{
                type:String,
                default : null
            },
            checkBoxEnabled :{
                default : true
            },
        },
        methods:{
            onEventCallBackFunc:  function(type,object,column) {
                this.propCallBackFunc(type,object,column);
            },
            loadData(){
                this.$refs.nodeList.loadData();
            },
            getSelectItems(){
                return this.selectItems;
            },
            getListPageQuery(){

            }
        },
        data(){
            return{
                selectItems : ()=>[],
                // defaultSearchParams: this.propDefaultSearchParams,
            }
        },
        created() {

        },
    };
</script>

<style>
</style>
