import CustomPlugins from './customPlugins';

const bodyParser = require('body-parser');
const pick = require('lodash/pick');
const path = require('path');
const serviceConfig = require('./config/' +
  process.env.CONFIG_LEVEL +
  '.config.js').default;
const FRONT_VISIBILITY_CONFIG = pick(serviceConfig, Object.keys(serviceConfig));
const webpack = require('webpack');

// polyfills that support IE11
const serverScripts = [
  {
    src:
      'https://polyfill.io/v3/polyfill.min.js?features=es6%2CArray.from%2CArray.prototype.forEach%2Ces7%2CArray.prototype.includes%2CArray.prototype.indexOf%2CArray.prototype.map%2CArray.prototype.reduce%2CEventSource%2CNodeList.prototype.forEach%2CString.prototype.includes%2CEvent%2CObject.assign%2Event',
  },
];
const links = [];
const dir = {
  pages: process.env.NUXT_PAGES || 'pages',
  layouts: process.env.NUXT_LAYOUTS || 'layouts',
};

const plugins = [
  // {
  //   src: path.resolve(__dirname, './_core/plugin/AsyncComponentInstaller'),
  //   ssr: true,
  // },
  { src: path.resolve(__dirname, './_core/plugin/initSSR'), ssr: true },
  { src: path.resolve(__dirname, './_core/plugin/connectBuilderHelper'), ssr: true },
  {
    src: path.resolve(__dirname, './_core/plugin/RestClientFeatures'),
    ssr: true,
  },
  { src: path.resolve(__dirname, './_core/plugin/init'), ssr: false },
  { src: path.resolve(__dirname, './_core/plugin/navigation'), ssr: true },
  { src: path.resolve(__dirname, './_core/plugin/defensiveCoding'), ssr: true },
  // {
  //   src: path.resolve(__dirname, './_core/plugin/initBuilderSystemFront'),
  //   ssr: false,
  // },
  { src: path.resolve(__dirname, './_core/plugin/utils'), ssr: true },
  // { src: path.resolve(__dirname, './_core/plugin/element-ui.js'), ssr: true },
  ...CustomPlugins,
];

if (process.env.COLLECTION) {
  plugins.push({
    src: path.resolve(__dirname, process.env.COLLECTION),
    ssr: true,
  });
}

const config = {

  buildModules: ['@nuxt/typescript-build'],
  serverMiddleware: [
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
  ],
  srcDir: 'src/',
  dir: dir,
  buildDir: process.env.NUXT_BUILD || '.nuxt/',
  plugins,

  env: {
    NODE_ENV: process.env.NODE_ENV || 'PRODUCTION',
    CONFIG_LEVEL: process.env.CONFIG_LEVEL || 'prd',
    FRONT_VISIBILITY_CONFIG: JSON.stringify(FRONT_VISIBILITY_CONFIG) || '{}',
  },
  modules: ['@nuxtjs/axios', 'bootstrap-vue/nuxt'],
  head: {
    htmlAttrs: { lang: 'ko' },
    title: 'service-core',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=0',
      },
    ],
    link: links,
    script: serverScripts,
  },

  /*
   ** Customize the progress bar color
   */
  loading: './common/components/loader/Loader.vue',

  build: {
    standalone: true,
    babel: {
      babelrc: true,
      presets: function({ isServer }) {
        const targets = isServer
          ? { node: '10' }
          : {
              ie: '11',
              edge: '17',
              firefox: '60',
              chrome: '67',
              safari: '11.1',
            };
        return [[require.resolve('@nuxt/babel-preset-app'), { targets }]];
      },
    },

    splitChunks: {
      layouts: true,
    },
    typescript: {
      typeCheck: false,
    },
    // 빌드할 때 번들 최적화를 비쥬얼라이즈. 분석 용도로만 사용하시오.
    // analyze: {
    //   analyzerMode: 'static',
    //   logLevel: 'info', // info is default
    // },

    /*
     * vendor migration to webpack4. referred https://stackoverflow.com/questions/48985780/webpack-4-create-vendor-chunk/49005059
     * */
    optimization: {
      // minimize: true,	// false
      // webpack4 splitChunks. https://webpack.js.org/plugins/split-chunks-plugin/
      splitChunks: {
        chunks: 'all', // all|async|initial
        maxInitialRequests: Infinity, // entryPoint 에 대한 최대 요청 수.
        minSize: 0, // 생성될 청크의 최소 사이즈(byte)
        // minChunks: 0,						// 스플리팅 전에 청크가 공유해야되는 모듈의 수
        cacheGroups: {
          // false 로 설정하면 사용하지 않음. splitChunks.* 에 설정된 내용을 덮어씀. test, priority, reuseExistingChunk 속성은 cacheGroup 으로 설정한 경우에만 적용 가능함
          vendor: {
            test: /[\\/]node_modules[\\/](moment|lodash|axios|get-size|jquery|js-cookie|jwt-decode|numeral|vuetify|babel-polyfill)[\\/]/,
            name: 'utilityVendor',
            // enforce: true,			// splitChunks.* 에 설정된 일부 속성(minSize, maxSize, minChunks, maxAsyncRequests, maxInitialRequests) 무시
          },
        },
      },
    },

    // extractCSS: true,
    /*
     * Run ESLint on save
     */
    extend(config) {
      const {
        module: { rules },
      } = config;
      // let { alias } = resolve;

      rules.push(
        {
          test: /\.scss$/,
          loader: 'sass-loader',
        });


      rules.push(
          {
            test: require.resolve('jquery'),
            use: [{
              loader: 'expose-loader',
              options: '$'
            }]
          });
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader'
        // }

    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),

      // ignore locales of moment module
      // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },

  router: {
    middleware: ['auth'],
    // mode :'history',
    extendRoutes(routes, resolve) {
      /* tslint:disable */

      for (let i = 0; i < routes.length; i++) {
        let route = routes[i];

        route = {
          ...route,
        };
        if (serviceConfig.dynamicSiteRouting) {
          route.path = route.path.replace(/^\/\@auto/, '/:site');
        } else {
          route.path = route.path.replace(/^\/\@auto/, '');
        }

        routes[i] = route;
      }
      // routes.push({
      //   path:'*', redirect:'/'
      // });

      function getRoute(route) {
        return route;
      }

      routes.push(
        getRoute({
          name: 'content',
          path: '/__common/contentEditable',
          component: resolve(
            __dirname,
            '_core/mutableRender/contentsEditable.js'
          ),
        })
      );
      routes.push(
        getRoute({
          name: '$DynamicPage.D1',
          path: '/:depth1',
          component: resolve(__dirname, '_core/mutableRender/dynamicPage.js'),
        })
      );

      routes.push(
        getRoute({
          name: '$DynamicPage.D2',
          path: '/:depth1/:depth2',
          component: resolve(__dirname, '_core/mutableRender/dynamicPage.js'),
        })
      );

      routes.push(
        getRoute({
          name: '$DynamicPage.D3',
          path: '/:depth1/:depth2/:depth3',
          component: resolve(__dirname, '_core/mutableRender/dynamicPage.js'),
        })
      );

      routes.push(
        getRoute({
          name: '$DynamicPage.D4',
          path: '/:depth1/:depth2/:depth3/:depth5',
          component: resolve(__dirname, '_core/mutableRender/dynamicPage.js'),
        })
      );

      routes.push(
        getRoute({
          name: '$DynamicPage.D5',
          path: '/:depth1/:depth2/:depth3/:depth5/:depth6',
          component: resolve(__dirname, '_core/mutableRender/dynamicPage.js'),
        })
      );
    },
  },
};

export default config;
