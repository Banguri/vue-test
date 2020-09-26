const path = require('path');

export default [
  {
    src: path.resolve(__dirname, './src/plugins/vue-fragment.js'),
    ssr: true,
  },
  {
    src: path.resolve(__dirname, './src/plugins/vee-validate.js'),
    ssr: true,
  },
  {
    src: path.resolve(__dirname, './src/plugins/vue-equal-height.js'),
    ssr: false,
  },
  {
    src: path.resolve(__dirname, './src/plugins/vue-owl-carousel.js'),
    ssr: false,
  },
  {
    src: path.resolve(__dirname, './src/common/filters/Date.ts'),
    ssr: true,
  },
  {
    src: path.resolve(__dirname, './src/common/filters/Currency.ts'),
    ssr: true,
  },
  {
    src: path.resolve(__dirname, './src/plugins/vue-prevent-input.js'),
    ssr: false,
  },
  {
    src: path.resolve(__dirname, './src/plugins/IEDetechBrowser.js'),
    ssr: false,
  },
  // {
  //   src: path.resolve(__dirname, './src/plugins/multikart-plugins.js'),
  //   ssr: false,
  // },
  {
    src: path.resolve(__dirname, './src/plugins/vue-go-top.js'),
    ssr: false,
  },
  {
    src: path.resolve(__dirname, './src/plugins/colorAdminPlugin.js'),
    ssr: false,
  },
  {
    src: path.resolve(__dirname, './src/components/DefaultComponent.js'),
    ssr: false,
  }
];
