import LOGIN_TYPES from './types';

export function updateCredentials(data: {}) {
  return {
    type: LOGIN_TYPES.UPDATE_CREDENTIALS,
    payload: { data },
  };
}

export function checkCredentials() {
  return {
    type: LOGIN_TYPES.CHECK_CREDENTIALS,
  };
}

export function credentialsFail() {
  return {
    type: LOGIN_TYPES.CREDENTIALS_FAIL,
  };
}

export function checkIsValidEmail(isValid: boolean) {
  return {
    type: LOGIN_TYPES.ISVALID_EMAIL,
    payload: isValid,
  };
}

export function requestLogin(data: {}) {
  return {
    type: LOGIN_TYPES.REQUEST_LOGIN,
    payload: data,
  };
}

export function requestLoginFailure(error: string) {
  return {
    type: LOGIN_TYPES.REQUEST_LOGIN_FAILURE,
    payload: error,
  };
}

export function requestLoginSuccess(result: string) {
  return {
    type: LOGIN_TYPES.REQUEST_LOGIN_SUCCESS,
    payload: result,
  };
}
