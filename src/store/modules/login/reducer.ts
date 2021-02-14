import produce from 'immer';
import { Reducer } from 'redux';
import LOGIN_TYPES from './types';

const reducer: Reducer = (state = { isValidEmail: true }, action) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case '@login/UPDATE_CREDENTIALS': {
        draft.type = LOGIN_TYPES.UPDATE_CREDENTIALS;
        draft.data = action.payload.data;
        break;
      }
      case '@login/CHECK_CREDENTIALS': {
        draft.type = LOGIN_TYPES.CHECK_CREDENTIALS;
        break;
      }
      case '@login/CREDENTIALS_FAIL': {
        draft.type = LOGIN_TYPES.CREDENTIALS_FAIL;
        break;
      }
      case '@login/ISVALID_EMAIL': {
        draft.type = LOGIN_TYPES.ISVALID_EMAIL;
        draft.isValidEmail = action.payload;
        break;
      }
      case '@login/REQUEST_LOGIN': {
        draft.type = LOGIN_TYPES.REQUEST_LOGIN;
        draft.loading = true;
        break;
      }
      case '@login/REQUEST_LOGIN_FAILURE': {
        draft.type = LOGIN_TYPES.REQUEST_LOGIN_FAILURE;
        draft.error = action.payload.error;
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
};

export default reducer;
