<template>
    <div class="formLayout m-b-20">
        <Default-Form :Fields="searchFields" ref="defaultForm" :propCallBackEvent="callBackEvent" />
        <div class="btnBox">
            <b-button
                    variant="green"
                    size="sm"
                    v-on:click="searchClick"
            >
            <i class="fa fa-search"></i> 검색
            </b-button>
        </div>
    </div>
</template>

<script>
    /**
     * notActiveElements : element 제거 및 생성.
     */
    export default {
        name:'SearchForm',
        components: {
        },
        props:{
            searchEvent :{
                type : Function,
                default : function (e) {
                    console.log("search");
                }
            },
            searchFields :{
                type : Array,
                required : true
            },
            queryParams :{
                type : Object,
                default : function () {
                    return () => {}
                }
            },
        },
        methods:{
            getSearchQuery(){
                if(_.isEmpty(this.queryParams)){
                    this.searchQuery = this.$refs.defaultForm.getValueQuery();
                }else{
                    this.searchQuery = this.queryParams;
                }
                console.log("searchQuery",this.searchQuery);
                return this.searchQuery;
            },
            getObjValueQuery(){
                return this.$refs.defaultForm.getObjValueQuery();
            },
            searchClick:function (e) {
                console.log("Search Click!!!!");
                this.getSearchQuery();
                this.searchEvent(this.searchQuery);
                if(!_.isUndefined(e)) {
                    e.preventDefault();
                }
            },
            callBackEvent(type,object){
                console.log(type,object);
                this.searchEvent(object);
                // if(type !== 'initMounted'){
                //     const searchKey = `searchRefs_text`;
                //     const searchRef = this.$refs[searchKey][0];
                //     searchRef.setValue(object["test2"]);
                // }
            }
        },
        data(){
            return{
                formType : "searchForm",
                searchQuery : {},
                notActiveElements :[]
            }
        },
        mounted() {
            // this.searchClick();
        }
    };
</script>

<style>
</style>
