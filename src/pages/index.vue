<template>
  <div class="row" v-show="disPlayShow">
    <div class="col-xl-12">
      <b-tabs pills nav-class="mb-3" content-class="rounded bg-white mb-3" >
        <template v-model="changeMenu" v-for="(menuActive,index) in menuActives" >
          <b-tab active v-bind:key="menuActive.key">
            <template slot="title">
              <!--div class="col-sm-4 col-6 p-t-5 p-b-5">-->
              <span>{{ menuActive.menuName }}</span>
              <a href="#" v-on:click="removeMenu(menuActive.key)">
                <i class="fas fa-lg fa-fw m-l-4 fa-times-circle"></i>
              </a>
              <!--</div>-->
            </template>
            <article>
              <panel :title="menuActive.menuName">
                <Dynamic-link v-bind:componentPath="menuActive.path" />
              </panel>
            </article>
          </b-tab>
        </template>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import {types,name} from '@@/_core/store/tabMenu';
export default {
  methods :{
    async removeMenu(menuKey){
      console.log("menuKey",menuKey);
      await this.$store.dispatch(name+"/"+types.MENUDElETE,menuKey);
      // await removeMenu(this.$store.dispatch, this.menu, this.$store.getters["tabMenu/getActiveMenus"]);
    }
  },
  computed : {
    changeMenu : function(){
      return this.$store.state.tabMenu.menuKey;
    },
  },
  watch : {
    changeMenu : function(val,oval){
      console.log("changeValue",val,oval);
      console.log("dispatch",this.$store.dispatch(name+"/"+types.MENUDElETE,"3333"));
      const activeMenus = [];
      const menuObject =
          this.$store.getters['tabMenu/getActiveMenus'];
      const menuKeys = _.keys(menuObject);
      for(let i in menuKeys){
        activeMenus.push(menuObject[menuKeys[i]]);
      }
      this.menuActives = activeMenus;
      if(_.isEmpty(activeMenus)){
        this.disPlayShow = false;
      }else{
        if(!this.disPlayShow){
          this.disPlayShow = true;
        }
      }
    }
  },
  data()  {
    return {
      menuActives : [],
      disPlayShow : false
    }
  }
};
</script>

<style lang="scss">
.nav-item {
  width: 100%;
  padding: 2px;
}
@media (min-width:360px) {
  .nav-item {
    width: 100%;
  }
}
@media (min-width:576px) {
  .nav-item {
    width: 100% * (1/2);
  }
}
@media (min-width:768px) {
  .nav-item {
    width: 100% * (1/3);
  }
}
@media (min-width:992px) {
  .nav-item {
    width: 100% * (1/4);
  }
}
@media (min-width:1200px) {
  .nav-item {
    width: 100% * (1/5);
  }
}
@media (min-width:1660px) {
  .nav-item {
    width: 100% * (1/6);
  }
}
@media (min-width:1900px) {
  .nav-item {
    width: 100% * (1/8);
  }
}
.nav-pills .nav-link {
  position: relative;
  display: table;
  width: 100%;
  height: 100%;
  padding-right: 45px;
  background-color: rgba(248,248,248,.8);
  span {
    display: table-cell;
    vertical-align: middle;
  }
  a {
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -8px;
  }
}
.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  background-color: #348fe2;
  .fa,
  .fas {
    color: #fff;
  }
}
</style>
