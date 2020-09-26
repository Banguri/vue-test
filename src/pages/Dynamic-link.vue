<template>
    <div>
        <component :is="component" v-if="component"/>
    </div>
</template>

<script>
    export default {
        props : [
           'componentPath'
        ],
        mounted() {
            this.loader()
            .then(()=>{
                this.component = () => this.loader();
            }).catch(()=>{
                this.component = () => import(`../pages/ErrorPage`)
            });
        },
        computed : {
            loader(){
                if(!this.componentPath){
                    return null
                }
                return ()=> import(`../pages/${this.componentPath}`)
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
