import React from 'react';
import {
  Container,
  BackgroundImage,
  Image,
  ContainerForm,
  ContainerInfo,
  ViewInfo,
  ScrollView,
} from './styles';
import { Dimensions } from 'react-native';
import shadow from '../../images/shadow.png';
import loginBackground from '../../images/loginbackground.png';
import LoginForme from '../LoginForm';
import BaseButton from '../BaseButton';
import { Spacer, TextBase } from '../../styles/textStyles';
import { useDispatch, useSelector } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { checkCredentials } from '../../store/modules/login/actions';
import colors from '../../styles/colors';
import ButtonForgotPasswrod from '../ButtonForgotPassword';

const { width } = Dimensions.get('screen');

const LoginPhone: React.FC = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state);
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      <BackgroundImage source={loginBackground}>
        <Image source={shadow} />
      </BackgroundImage>
      <ScrollView>
        <ContainerForm>
          <ContainerInfo>
            <LoginForme />
          </ContainerInfo>
          <BaseButton
            title={'ENTRAR'}
            useShadow={false}
            loading={login.loading}
            onPress={() => {
              dispatch(checkCredentials());
            }}
          />

          <Spacer value={4} />

          <TextBase
            center={true}
            fontSize={14}
            color={colors.white}
            fontFamily={'Montserrat_400Regular'}>
            {'Esqueceu seu login ou senha?\nClique '}
            <ViewInfo>
              <Spacer value={4} />
              <ButtonForgotPasswrod color={colors.white} />
            </ViewInfo>
          </TextBase>
          <Spacer value={40} />
        </ContainerForm>
      </ScrollView>
    </Container>
  );
};

export default LoginPhone;
