import Vue from 'vue';
const IEDetechBrowser = {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        const uagent = navigator.userAgent;
        const isIE =
          uagent.indexOf('MSIE ') > -1 || uagent.indexOf('Trident/') > -1;
        isIE && document.body.classList.add('ie');
      },
    });
  },
};
export default IEDetechBrowser;
Vue.use(IEDetechBrowser);
