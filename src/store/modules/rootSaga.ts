import { all } from 'redux-saga/effects';

import login from './login/sagas';

export default function* rootSaga() {
  return yield all([login]);
}
