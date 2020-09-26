import Vue from 'vue';
import { get, isPlainObject, isString } from 'lodash';
import qs from 'query-string';
import { getConfig } from '../../config';


const config = getConfig();

export default function(context) {
  const { app } = context;

  Vue.prototype.$push = function(options) {
    this.$router.push(options);
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
  Vue.prototype.$getProjectHref = function(
    pathOrOptions = '#',
    hash = ''
  ) {
    const sitePrefix = (app.store.state.site || {}).id;
    return this.$getHref(pathOrOptions, hash, sitePrefix);
  };
  Vue.prototype.$getHref = function(
    pathOrOptions,
    hash = '',
    site = (app.store.state.site || {}).id
  ) {
    /**
     @pathOrOptions 링크
     @hash 해쉬값
     **/

    let sitePrefix;
    if (site && config.dynamicSiteRouting) {
      sitePrefix = '/' + site;
    } else {
      sitePrefix = '';
    }

    if (!pathOrOptions) {
      return '#';
    }

    if (typeof pathOrOptions === 'string') {
      let queryString, hashInPath, path;
      const firstTokens = pathOrOptions.split('?');

      path = firstTokens[0];
      queryString = firstTokens[1];
      if (firstTokens[1]) {
        const secondTokens = firstTokens[1].split('#');

        queryString = secondTokens[0];
        hashInPath = secondTokens[1];
      }

      const queryMap = qs.parse(queryString);

      pathOrOptions = {
        path: path,
        query: queryMap,
        hash: hashInPath,
      };
    }

    const query = pathOrOptions.query;
    let path = pathOrOptions.path;
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

        let url = path;
        if (query && Object.keys(query).length > 0) {
          url += '?' + qs.stringify(query);
        }

        url = sitePrefix.concat(url);

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

  Vue.prototype.$isSigned = function() {
    return this.$get(this.$store.state, 'session.user.signed', '');
  };

  Vue.prototype.$getCustomerType = function() {
    return this.$get(
      this.$store.state,
      'session.user.customer.customerType.value',
      ''
    );
  };

  Vue.prototype.$getSchoolInfo = function() {
    return this.$get(this.$store.state, 'session.user.schoolInfo', '');
  };

  Vue.prototype.$getCustomerName = function() {
    return this.$get(this.$store.state, 'session.customerName', '');
  };

  Vue.prototype.$getCustomerNo = function() {
    return this.$get(this.$store.state, 'session.user.customer.seq', '');
  };

  Vue.prototype.$getCustomer = function() {
    return this.$get(this.$store.state, 'session.user.customer', '');
  };
}
