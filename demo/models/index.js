import {
  regenerator as regeneratorRuntime,
  _wx
} from '../lib/index.js';

import * as indexService  from '../services/index';

export default {
  namespace: 'index',
  state: {
    user: {}
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  },

  effects: {
    *getCode({ payload }, { call, put, select }) {
      const code = yield call(indexService.getCode, payload);
      console.log("code", code, );
      if (code) {
        console.log("2222222222222222222222222222", select);
      }
      yield put({
        type: 'save',
        payload: {
          code : code.data
        }
      })
    },

    *login({ payload }, { call, put, select }) {
      let res = yield _wx.login();
      console.log('login', res);
      yield put({
        type: 'save',
        payload: {
          user : res.code
        }
      })
    },

  }
}
