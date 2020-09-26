<template>
    <div>
        <component :is="component" v-if="component"
                   v-bind="filedInfo"
                   :onEventPropFunc="onEventPropFunc"
                   :propValue="propValue"
                   :attrProps="attrProps"
                   :ref="`subDynamicElement_`+filedInfo.pid"
        />
    </div>
</template>

<script>
    export default {
        props : {
            filedInfo :{
                type : Object,
                required : true
            },
            onEventPropFunc : {
                type : Function
            },
            propValue :{
            },
            attrProps :{
                type:Object
            }
        },
        methods : {
            setValue(value){
                const subElementRefsKey = `subDynamicElement_${this.filedInfo.pid}`;
                const subElementRefs = this.$refs[subElementRefsKey];
                subElementRefs.setValue(value);
            },
            getValue(){
                const subElementRefsKey = `subDynamicElement_${this.filedInfo.pid}`;
                const subElementRefs = this.$refs[subElementRefsKey];
                return subElementRefs.getValue();
            },
            reloadData(query){
                const subElementRefsKey = `subDynamicElement_${this.filedInfo.pid}`;
                const subElementRefs = this.$refs[subElementRefsKey];
                subElementRefs.reloadData(query);
            }
        },
        mounted() {
            this.loader()
            .then(()=>{
                this.component = () => this.loader();
            }).catch(()=>{
                this.component = () => import(`../../../pages/ErrorPage`)
            });
        },
        computed : {
            loader(){
                if(!this.filedInfo.componentPath){
                    return null
                }
                console.log("componentPath",this.filedInfo.componentPath);
                return ()=> import(`../../../pages/${this.filedInfo.componentPath}`)
            }
        },
        data()  {
            return {
                component : null
            }
        }
    };
</script>

<style>
</style>
