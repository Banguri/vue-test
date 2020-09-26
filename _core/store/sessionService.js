import jwtDecode from "jwt-decode";
import get from "lodash/get";
import CookieParser from "set-cookie-parser";
import API from "../../src/fetchSheets/apiList";

import { ActionTree, MutationTree, GetterTree, ActionContext } from "vuex";
// import { RootState } from 'store';

export const name = "session";

export const types = {
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  SETJWT: "SETJWT",
};

export const namespaced = true;

export const state = () => ({
  tokenName: "",
  refreshTokenName: "",
  jwt: "",
  jwt2: "",
  refresh: "",
  sign: {},
  user: {},
});

export const getters = {};

export const actions = {
  setJwt({ commit }, jwtPair) {
    // commit(name + '/' + types.SETJWT, jwtPair);
    commit(types.SETJWT, jwtPair);
  },

  success({ commit }, payload) {
    // commit(name + '/' + types.SUCCESS, payload);
    commit(types.SUCCESS, payload);
  },
};

export const mutations = {
  [types.SUCCESS](state, user) {
    state.user = user;
  },
  [types.SETJWT](state, jwtPair) {
    state.jwt = jwtPair.jwt || "";
    state.refresh = jwtPair.refresh || "";
    state.tokenName = jwtPair.tokenName || state.tokenName;
    state.refreshTokenName = jwtPair.refreshTokenName || state.refreshTokenName;
    state.jwt2 = jwtPair.jwt2 || state.jwt2;
  },
};

function requestCookieParser(cookieString = "") {
  const cookies = cookieString.split(";");
  const cookieMap = {};
  for (const idx in cookies) {
    const pair = cookies[idx].trim().split("=");
    cookieMap[pair[0]] = pair[1];
  }

  return cookieMap;
}

function fetchResponseSetCookieParser(fetchResponse) {
  const cookieMap = {};
  if (fetchResponse.headers["set-cookie"]) {
    const setCookies = fetchResponse.headers["set-cookie"];

    for (let i = 0; i < setCookies.length; i++) {
      const cookieObj = CookieParser.parse(setCookies[i])[0];
      cookieMap[cookieObj.name] = cookieObj;
    }
  }

  return cookieMap;
}

export async function getToken(context) {
  const { app, $axios, res, store } = context;

  const session = await app.fetch({
    api: {
      path: API.SESSION.url,
      method: API.SESSION.method,
      withCredentials: true,
    },
  });
  if (session.status === 200 && session.headers) {
    if (process.server && session.headers["set-cookie"]) {
      const cookie = session.headers["set-cookie"];
      
      // JWT cookie 설정
      $axios.setHeader("Cookie", cookie);
      res.setHeader("Set-Cookie", cookie);
    }
    // session 갱신
    updateSession(store.dispatch, session);
  }

  return session;
}

export function signExpires(
  {
    /*commit*/
  },
  context
) {
  if (context.res) {
    try {
      const jwt = jwtDecode(get(context, "req.cookies.iceJWT"));
      context.res.cookie("je", jwt.exp.toString() + "000", {
        maxAge: 1000000000,
        httpOnly: false,
      });

      const jwtRefresh = jwtDecode(get(context, "req.cookies.iceRefreshJWT"));
      context.res.cookie("jer", jwtRefresh.exp.toString() + "000", {
        maxAge: 1000000000,
        httpOnly: false,
      });
    } catch (e) {
      console.log("signExpires", e);
    }
  }
}

export async function updateSession(commit, meResponse) {
  if (meResponse.data) {
    const {
      data: { item },
    } = meResponse;

    await commit(`${name}/success`, item);
  }
}
