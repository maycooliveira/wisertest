import APP from '../configs/app';
const { showMessage } = require('react-native-flash-message');

function checkEmail(value: string) {
  const reg = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
  return reg.test(value);
}

function checkPasswordLength(value: string) {
  return value.length >= 6;
}

const flashError = (message: string) => {
  showMessage({
    message: APP.NAME,
    icon: 'danger',
    description: message ?? 'Erro desconhecido',
    type: 'danger',
    statusBarIsTranslucent: true,
  });
};

export { checkEmail, checkPasswordLength, flashError };
