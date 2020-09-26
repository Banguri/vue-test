
import * as page from '../store/page';
import Editable from './DefaultEditable';
import { Component, Vue } from 'vue-property-decorator';


export default Vue.extend({
  extends: Editable,


  async middleware(context) {
    const req = context.req;
    const store = context.store;
    // const route = context.route;
    const app  = context.app;


    try {
      const query = require('query-string').parse(req._parsedUrl.query);

      const contentsId = query.contentsId;

      const pageRes = await app.fetch({
        api: {
          path: '/mng/serviceContents/read',
        },

        headers: {
          cookie: `mngJWT=${store.state.session.jwt2};`,
        },
        query: {
          _siteId: store.state.site.id,
          id: contentsId,
          referenceView: 'body',
        },
      });

      const svcPage = pageRes.data.item;

      if (svcPage) {
        await store.dispatch(name + '/' + page.types.SET_SEED, svcPage);
      } else {
        await store.dispatch(name + '/' + page.types.SET_SEED, null);
      }
    } catch (e) {
      console.error(e);
    }
  },

  computed: {
    authContext(){
      return this.$route.query.authContext || 'mng';
    }
  },

  // ce : createElement
  render(ce) {
    let bodyElements;
    if (this.instanceWrapper.body) {

      bodyElements = ce('instance-renderer', {
        props: {
          instance: this.instanceWrapper.body.item,
          options: {
            isRoot: true,
            area: 'body',
            zIndex: 2,
            defaultHeight: '50vh',
          },
        },
      });
    } else {
      bodyElements = ce('div', {}, ['Invalid Contents']);
    }

    return ce(
      'div',
      {
        attrs: {
          id: 'editablePageContents',
        },
        class: {
          dragging: this.dragging,
          expand:
            this.hoveringInstanceId !== undefined &&
            this.hoveringInstanceId !== null,
        },
      },
      [bodyElements]
    );
  },

  methods: {
    async fetchPageData() {
      const res = await this.$fetch({
        api: {
          path: '/'+ this.authContext +'/serviceContents/read',
        },
        query: {
          id: this.$store.state.page.pageId,
          referenceView: 'body',
        },
      });

      return res.data.item;
    }
  }
})
