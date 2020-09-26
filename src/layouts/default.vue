<template>
    <div class="fade page-sidebar-fixed page-header-fixed show page-container" v-if="!pageOptions.pageEmpty" v-bind:class="{
		'page-sidebar-minified': pageOptions.pageSidebarMinified,
		'page-content-full-height': pageOptions.pageContentFullHeight,
		'page-without-sidebar': pageOptions.pageWithoutSidebar,
		'page-with-right-sidebar': pageOptions.pageWithRightSidebar,
		'page-with-two-sidebar': pageOptions.pageWithTwoSidebar,
		'page-with-wide-sidebar': pageOptions.pageWithWideSidebar,
		'page-with-light-sidebar': pageOptions.pageWithLightSidebar,
		'page-with-top-menu': pageOptions.pageWithTopMenu,
		'page-sidebar-toggled': pageOptions.pageMobileSidebarToggled,
		'page-right-sidebar-toggled': pageOptions.pageMobileRightSidebarToggled || pageOptions.pageRightSidebarToggled,
		'page-right-sidebar-collapsed': pageOptions.pageRightSidebarCollapsed,
		'has-scroll': pageOptions.pageBodyScrollTop
	}">
        <Header />
        <TopMenu v-if="pageOptions.pageWithTopMenu" />
        <Sidebar v-if="!pageOptions.pageWithoutSidebar"
                 v-bind:tabMenuAdd = "tabMenuAdd"
        />
<!--        <SidebarRight v-if="pageOptions.pageWithTwoSidebar" />-->
        <div id="content" class="content" v-bind:class="{ 'content-full-width': pageOptions.pageContentFullWidth, 'content-inverse-mode': pageOptions.pageContentInverseMode }">
            <nuxt />
            <vue-ins-progress-bar></vue-ins-progress-bar>
        </div>
        <Footer v-if="pageOptions.pageWithFooter" />
    </div>
    <div v-else>
        <nuxt />
        <vue-ins-progress-bar></vue-ins-progress-bar>
    </div>
</template>

<script>
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Sidebar from '../components/sidebar/Sidebar.vue'
    import SidebarRight from '../components/sidebar-right/SidebarRight.vue'
    import Header from '../components/header/Header.vue'
    import TopMenu from '../components/top-menu/TopMenu.vue'
    import Footer from '../components/footer/Footer.vue'
    import PageOptions from '../config/PageOptions.vue'
    import $ from 'jquery';
    import VueRouter from "vue-router";
    import routes from "../config/PageRoutes";
    const router = new VueRouter({
        routes
    })

    export default {
        name: 'app',
        components: {
            Sidebar,
            SidebarRight,
            Header,
            TopMenu,
            Footer
        },
        data() {
            return {
                pageOptions: PageOptions
            }
        },
        head() {
            return {
                title: 'Default LG',
            };
        },
        methods: {
            handleScroll: function() {
                if(process.client) {
                    PageOptions.pageBodyScrollTop = window.scrollY;
                }
            },
            tabMenuAdd: function (menu) {
                //사용안함.
                console.log("menuClick!!!", menu);
            }
        },
        mounted () {
            if(process.client) {
                this.$insProgress.finish()
            }
        },
        created() {
            if(process.client){
                PageOptions.pageBodyScrollTop = window.scrollY;
                window.addEventListener('scroll', this.handleScroll);
                this.$router.beforeEach((to, from, next) => {
                    console.log("router",to,from);
                    this.$insProgress.start()
                    next()
                })
                this.$router.afterEach(() => {
                    this.$insProgress.finish()
                })
            }
        }
    }
</script>
<style lang="scss">
</style>