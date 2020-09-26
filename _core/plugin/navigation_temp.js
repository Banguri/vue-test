import Vue from 'vue';
import { get, isPlainObject, isString } from 'lodash';
import config from '../../config';
import { actionTypes } from '../store/http';
import VueLocalStroage from 'vue-localstorage';
import isNil from 'lodash/isNil';
import qs from 'query-string';

Vue.use({
  install: function(Vue, options) {
    Vue.prototype.$push = function(options) {
      // let prefix = this.$store.state.site.prefix;

      let originalPath = options.path;
      let newOptions = { ...options };

      if (originalPath) {
        newOptions.path = `/${originalPath.replace(/^\//, '')}`;
        /*  /${prefix}  */
      }

      this.$router.push(newOptions);
    };

    Vue.prototype.$hmove = function(url, method = '_self') {
      if (method === '_self') {
        if (/^https?:\/\//.test(url)) {
          location.href = url;
        } else {
          this.$router.push(url);
        }
      } else {
        window.open(url, method);
      }
    };

    Vue.prototype.$makeHref = function(...args) {
      return this.$getHref(...args);
    };

    Vue.prototype.$getHref = function(
      pathOrOptions = '#',
      hash = '',
      site = (this.$store.state.site || {}).id
    ) {
      /**
			 @pathOrOptions 링크
			 @hash 해쉬값
			 **/

      let sitePrefix;

      if (site) {
        sitePrefix = '/' + site;
      } else {
        sitePrefix = '/';
      }

      if (!pathOrOptions) {
        return '#';
      }

      if (typeof pathOrOptions === 'string') {
        let queryString, hashInPath, path;
        let firstTokens = pathOrOptions.split('?');

        path = firstTokens[0];
        queryString = firstTokens[1];
        if (firstTokens[1]) {
          let secondTokens = firstTokens[1].split('#');

          queryString = secondTokens[0];
          hashInPath = secondTokens[1];
        }

        let queryMap = qs.parse(queryString);

        pathOrOptions = {
          path: path,
          query: queryMap,
          hash: hashInPath,
        };
      }

      let { path, query = {} } = pathOrOptions;

      /**
       * Instance Click 추적
       */
      // if ( this.instanceId ) {
      // 	if ( this.$route.query._pil ) {
      // 		let pil = [
      // 			...this.$route.query._pil.split( ',' ),
      // 			this.instanceId
      // 		];
      //
      // 		pil = pil.slice( pil.length - 5 );
      // 		query._pil = pil.join( ',' );
      // 	} else {
      // 		query._pil = this.instanceId;
      // 	}
      // }
      if (this.$route.query && this.$route.query._iref) {
        query._iref = this.$route.query._iref;
      } else if (this.instanceId) {
        query._iref = this.instanceId;
      }

      if (path) {
        if (/^https?:\/\//.test(path)) {
          return `${path}?${qs.stringify(query)}`;
        } else {
          path = `/${path.replace(/^\//, '')}`;
          /*  /${prefix}  */

          let url = `${sitePrefix}/${path.replace(/^\//, '')}?${qs.stringify(
            query
          )}`;

          if (hash) {
            url += '#' + hash;
          }

          return url;
        }
      } else {
        let url = `?${qs.stringify(query)}`;

        if (hash) {
          url += '#' + hash;
        }

        return url;
      }
    };
  },
});

// localstorage
Vue.use(VueLocalStroage, { name: 'localstorage' });
