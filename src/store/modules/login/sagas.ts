import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { flashError, flashSuccess } from '../../../utils';
import { requestLoginFailure, requestLoginSuccess } from './actions';
import LOGIN_TYPES from './types';

export function* requestLogin(data: any) {
  const { payload } = data;
  try {
    const response = yield call(api.post, '/login', payload);
    yield put(requestLoginSuccess(response.data.result));
    flashSuccess(response.data.result);
  } catch (error) {
    yield put(requestLoginFailure(error.response.data.error));
    flashError(error.response.data.error);
  }
}

export default all([takeLatest(LOGIN_TYPES.REQUEST_LOGIN, requestLogin)]);
