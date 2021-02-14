import React, { useState, useEffect } from 'react';
import { Spacer, TextBase } from '../../styles/textStyles';
import AppLoading from 'expo-app-loading';
import { useSelector, useDispatch } from 'react-redux';
import { DeviceType } from 'expo-device';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
} from '@expo-google-fonts/montserrat';
import { Container, Input, View, ContainerInput, ContainerIconError } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {
  checkIsValidEmail,
  credentialsFail,
  updateCredentials,
  requestLogin,
  requestLoginFailure,
} from '../../store/modules/login/actions';
import LOGIN_TYPES from '../../store/modules/login/types';
import { checkEmail, flashError } from '../../utils';

const LoginForme: React.FC = () => {
  const dispatch = useDispatch();
  const { deviceType, login } = useSelector((state) => state);
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [isTablet] = useState(deviceType.type === DeviceType.TABLET);
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
  });

  function handleChangeText(type: any, value: string) {
    setFormValues({ ...formValues, [type]: value });
  }

  useEffect(() => {
    dispatch(updateCredentials(formValues));
  }, [formValues, dispatch]);

  useEffect(() => {
    if (login.type === LOGIN_TYPES.CHECK_CREDENTIALS) {
      if (login.data.email.trim() === '') {
        flashError('Informar o campo E-MAIL');
        dispatch(credentialsFail());
        return;
      }
      if (login.data.password.trim() === '') {
        flashError('Informar o campo SENHA');
        dispatch(credentialsFail());
        return;
      }

      dispatch(checkIsValidEmail(checkEmail(login.data.email)));
    } else if (login.type === LOGIN_TYPES.ISVALID_EMAIL && login.isValidEmail) {
      dispatch(requestLogin(formValues));

      setTimeout(() => {
        dispatch(requestLoginFailure('teste'));
      }, 5000);
    }
  }, [login, dispatch, formValues]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Container>
      <TextBase
        center={!isTablet}
        fontSize={isTablet ? 40 : 24}
        color={'#383E71'}
        fontFamily={'Montserrat_400Regular'}>
        {'Olá, seja\nbem-vindo!'}
      </TextBase>
      <Spacer value={16} />
      <TextBase
        center={!isTablet}
        fontSize={isTablet ? 16 : 12}
        color={'#989FDB'}
        fontFamily={'Montserrat_600SemiBold'}>
        {isTablet
          ? 'Para acessar a plataforma,\nfaça seu login.'
          : 'Para acessar a plataforma, faça seu login.'}
      </TextBase>

      <Spacer value={20} />

      <View>
        <TextBase
          center={false}
          fontSize={10}
          marginLeft={10}
          color={'#383E71'}
          fontFamily={'Montserrat_400Regular'}>
          {'E-MAIL'}
        </TextBase>

        <Spacer value={8} />

        <ContainerInput>
          <Input
            isError={!login.isValidEmail}
            fontFamily={'Montserrat_400Regular'}
            autoCapitalize={'none'}
            keyboardType="email-address"
            value={formValues.email}
            onChangeText={(text) => handleChangeText('email', text)}
          />
          {!login.isValidEmail && (
            <ContainerIconError>
              <Icon name={'x'} size={16} color={'#FF377F'} />
            </ContainerIconError>
          )}
        </ContainerInput>
        {!login.isValidEmail && (
          <View>
            <Spacer value={8} />
            <TextBase
              center={false}
              fontSize={10}
              marginLeft={14}
              color={'#FF377F'}
              fontFamily={'Montserrat_400Regular'}>
              {'Digite um e-mail válido;'}
            </TextBase>
          </View>
        )}

        <Spacer value={16} />

        <TextBase
          center={false}
          fontSize={10}
          marginLeft={10}
          color={'#383E71'}
          fontFamily={'Montserrat_400Regular'}>
          {'SENHA'}
        </TextBase>

        <Spacer value={8} />

        <ContainerInput>
          <Input
            isError={false}
            secureTextEntry={true}
            fontFamily={'Montserrat_400Regular'}
            value={formValues.password}
            onChangeText={(text) => handleChangeText('password', text)}
          />
        </ContainerInput>
      </View>
    </Container>
  );
};

export default LoginForme;
