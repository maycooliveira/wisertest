import APP from '../configs/app';
import { Alert } from 'react-native';

const showMessage = (msg : string) => {
  Alert.alert(APP.NAME, msg);
};

function checkEmail(value : string) {
  const reg = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
  return reg.test(value);
}

function checkPasswordLength(value : string) {
  return value.length >= 6;
}

export { showMessage, checkEmail, checkPasswordLength };
