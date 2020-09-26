<template>
	<div>
		<!-- begin #header -->
		<div id="header" class="header navbar-default">
			<!-- begin navbar-header -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle pull-left" v-on:click="toggleMobileRightSidebar" v-if="pageOptions.pageWithTwoSidebar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link to="/dashboard/v2" class="navbar-brand"><span class="navbar-logo"></span> <b>LG BOS</b> </router-link>
				<button type="button" class="navbar-toggle pt-0 pb-0 mr-0 collapsed" v-on:click="toggleMobileTopMenu" v-if="pageOptions.pageWithTopMenu && !pageOptions.pageWithoutSidebar">
					<span class="fa-stack fa-lg text-inverse">
						<i class="far fa-square fa-stack-2x"></i>
						<i class="fa fa-cog fa-stack-1x"></i>
					</span>
				</button>
				<button type="button" class="navbar-toggle" v-on:click="toggleMobileTopMenu" v-if="pageOptions.pageWithTopMenu && pageOptions.pageWithoutSidebar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<button type="button" class="navbar-toggle p-0 m-r-0" v-on:click="toggleMobileMegaMenu" v-if="pageOptions.pageWithMegaMenu">
					<span class="fa-stack fa-lg text-inverse m-t-2">
						<i class="far fa-square fa-stack-2x"></i>
						<i class="fa fa-cog fa-stack-1x"></i>
					</span>
				</button>
				<button type="button" class="navbar-toggle" v-on:click="toggleMobileSidebar" v-if="!pageOptions.pageWithoutSidebar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div>
			<!-- end navbar-header -->

			<header-mega-menu v-if="pageOptions.pageWithMegaMenu"></header-mega-menu>

			<!-- begin header-nav -->
			<ul class="navbar-nav navbar-right">
				<b-nav-item-dropdown menu-class="dropdown-menu-right" class="dropdown navbar-user" no-caret>
					<template slot="button-content">
						<img src="/assets/img/user/user-13.jpg" alt="" />
						<span class="d-none d-md-inline">{{ userInfo['id'] }}</span> <b class="caret"></b>
					</template>
					<b-dropdown-item href="javascript:;">Edit Profile</b-dropdown-item>
					<b-dropdown-item href="javascript:;">Calendar</b-dropdown-item>
					<b-dropdown-item href="javascript:;">Setting</b-dropdown-item>
					<b-dropdown-divider></b-dropdown-divider>
					<b-dropdown-item href="javascript:#" @click="logOut">Log Out</b-dropdown-item>
				</b-nav-item-dropdown>
				<li class="divider d-none d-md-block" v-if="pageOptions.pageWithTwoSidebar"></li>
				<li class="d-none d-md-block" v-if="pageOptions.pageWithTwoSidebar">
					<a href="javascript:;" v-on:click="toggleRightSidebarCollapsed" class="f-s-14">
						<i class="fa fa-th"></i>
					</a>
				</li>
			</ul>
			<!-- end header navigation right -->
		</div>
		<!-- end #header -->
	</div>
</template>

<script>
import PageOptions from '../../config/PageOptions.vue'
import HeaderMegaMenu from './HeaderMegaMenu.vue'
import UserApi  from '../../common/api/UserApi';
// UserApi
export default {
  name: 'Header',
	components: {
		HeaderMegaMenu
	},
  data() {

	  console.log("user",this.$store.state.session.user.userInfo);
		return {
			userInfo : _.isObject(this.$store.state.session.user.userInfo) ? this.$store.state.session.user.userInfo:{},
			pageOptions: PageOptions
		}
  },
	methods: {
		toggleMobileSidebar() {
			this.pageOptions.pageMobileSidebarToggled = !this.pageOptions.pageMobileSidebarToggled;
		},
		toggleMobileRightSidebar() {
			this.pageOptions.pageMobileRightSidebarToggled = !this.pageOptions.pageMobileRightSidebarToggled;
		},
		toggleMobileTopMenu() {
			this.pageOptions.pageMobileTopMenu = !this.pageOptions.pageMobileTopMenu;
		},
		toggleMobileMegaMenu() {
			this.pageOptions.pageMobileMegaMenu = !this.pageOptions.pageMobileMegaMenu;
		},
		toggleRightSidebar() {
			this.pageOptions.pageRightSidebarToggled = !this.pageOptions.pageRightSidebarToggled;
		},
		toggleRightSidebarCollapsed() {
			this.pageOptions.pageRightSidebarCollapsed = !this.pageOptions.pageRightSidebarCollapsed;
		},
		checkForm: function(e) {
			e.preventDefault();
		},
		logOut : function(e) {
			e.preventDefault();
			const userApi = new UserApi(this);
			userApi.logOut();
		},
	}
}
</script>
