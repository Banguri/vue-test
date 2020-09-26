<template>
    <div class="theme-switch">
        Theme Switch


        <select :value="overrideThemeValue" @change="changeTheme">
            <option value="" :selected="overrideThemeValue === ''">NONE</option>
            <option
                    v-for="(theme, i) in availableThemeList"
                    :value="theme"
                    :selected="overrideThemeValue === theme">{{theme}}</option>
        </select>

        current: {{currentTheme}}
    </div>
</template>

<script>


    export default {

        computed: {
          availableThemeList(){
            return this.$$config.availableThemes || [];
          },

          overrideThemeValue(){
            console.log('overrideThemeValue', this.$store.state.site.overrideThemeValue || '');
            return this.$store.state.site.overrideThemeValue || '';
          },

          currentTheme(){
            return this.$$getTheme();
          }
        },

      methods: {
        changeTheme(e){
          console.log('change theme',e, this.$store);
          this.$store.dispatch('site/setThemeOverride', e.target.value)
          // this.$store.actions.setThemeOverride(theme);
        }
      },
        mounted(){
          console.log('configgigigi',this.$$config);
        }
    }
</script>

<style scoped>
    .theme-switch {
        background-color:#333;
        color:#fff;
    }
</style>
