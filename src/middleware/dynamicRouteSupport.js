import EditablePageParams from '../../_core/common/editablePageParams';
import * as page from '../../_core/store/page';

import { getConfig } from '../../config';

const config = getConfig();

async function DefaultEditableMiddleware(context) {

  console.log('dynamicRouteSupport');
  const req = context.req;
  const store = context.store;
  const route = context.route;
  const app = context.app;
  /**
   * adm 또는 mng 로 한정하기 위해
   * 악의적인 미리보기 또는 편집중인 페이지를 관람하는 행위를 막기 위해서
   */
  const authContext = route.query.authContext === 'adm' ? 'adm' : 'mng';
  // const redirect = context.redirect;

  let pagePath;
  let svcPagePath;
  if (req) {
    pagePath = req.originalUrl.replace(/\?.*$/, '');
  } else {
    pagePath = location.pathname;
  }

  if (config.dynamicSiteRouting) {
    const tokens = pagePath.split('/');
    tokens.shift();
    tokens.shift();
    svcPagePath = `/${tokens.join('/')}`;
  } else {
    svcPagePath = pagePath;
  }

  let refInstanceId;

  if (route.query._iref) {
    refInstanceId = route.query._iref;
  }

  try {
    let pageRes;

    if (route.query.__deployId) {
      /**
       * Deploy Preview Mode
       */

      const svcPageDeployRes = await app.fetch({
        api: {
          path: `/${authContext}/svcPageDeploy/read`,
        },
        headers: {
          cookie: `mngJWT=${store.state.session.jwt2};admJWT=${store.state.session.jwt2};`,
        },
        query: {
          id: route.query.__deployId,
          ...EditablePageParams,
        },
      });

      try {
        pageRes = {
          data: {
            item: JSON.parse(svcPageDeployRes.data.item.jsonData),
          },
        };
      } catch (e) {
        console.error('Failed to retrieve Deploy page', e);
      }
    } else if (route.query.__editorId) {
      /**
       * Edit Mode
       */

      pageRes = await app.fetch({
        api: {
          path: `/${authContext}/svcPage/read`,
        },
        headers: {
          cookie: `mngJWT=${store.state.session.jwt2};admJWT=${store.state.session.jwt2};`,
        },
        query: {
          id: `${store.state.site.id}>${svcPagePath}`,
          _refInstanceId: refInstanceId,
          ...EditablePageParams,
        },
      });
      if (!route.query.offEditorHelper) {
        await store.commit(page.name + '/' + page.types.SIGN_EDITOR);
      }
    } else {
      /**
       * Live Service Page
       */

      pageRes = await app.fetch({
        api: {
          path: '/svc/service/livePage',
        },

        query: {
          _siteId: store.state.site.id,
          _refInstanceId: refInstanceId,
          pageRoute: svcPagePath,
          deviceType: store.state.device.type,
          ...EditablePageParams,
        },
      });
    }

    if (pageRes.data && pageRes.data.items) {
      const svcPages = pageRes.data.items;

      if (svcPages[0]) {
        await store.commit(page.name + '/' + page.types.SET_SEED, svcPages[0]);
      } else {
        await store.commit(page.name + '/' + page.types.SET_SEED, null);
      }
    } else {
      const svcPage = pageRes.data.item;

      if (svcPage) {
        await store.commit(page.name + '/' + page.types.SET_SEED, svcPage);
      } else {
        await store.commit(page.name + '/' + page.types.SET_SEED, null);
      }
    }
  } catch (e) {
    console.error(e);
  }

  return true;
}

export default async function(context) {
  if (/^\$DynamicPage.D\d$/.test(context.route.name)) {
    await DefaultEditableMiddleware(context);
  }

  return true;
}
