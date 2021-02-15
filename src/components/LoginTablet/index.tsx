import React from 'react';
import {
  Container,
  BackgroundImage,
  Image,
  ContainerForm,
  ContainerInfo,
  View,
  ScrollView,
} from './styles';
import { Dimensions } from 'react-native';
import shadow from '../../images/shadow.png';
import loginBackground from '../../images/loginbackgroundtablet.png';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import LoginForme from '../LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import BaseButton from '../BaseButton';
import { ButtonForgotPassword } from '../LoginPhone/styles';
import { Spacer, TextBase } from '../../styles/textStyles';
import { checkCredentials } from '../../store/modules/login/actions';
import colors from '../../styles/colors';

const { width } = Dimensions.get('screen');

const LoginTablet: React.FC = () => {
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
      <ContainerInfo>
        <BackgroundImage source={loginBackground}>
          <Image source={shadow} />
        </BackgroundImage>

        <ContainerForm>
          <View>
            <LoginForme />
          </View>

          <BaseButton
            title={'ENTRAR'}
            useShadow={true}
            loading={login.loading}
            onPress={() => {
              dispatch(checkCredentials());
            }}
          />

          <Spacer value={12} />

          <TextBase
            center={true}
            fontSize={14}
            color={colors.thinPurple}
            fontFamily={'Montserrat_400Regular'}>
            {'Esqueceu seu login ou senha?\nClique '}
            <ButtonForgotPassword>
              <TextBase
                center={true}
                isUnderline={true}
                fontSize={14}
                color={colors.purple}
                fontFamily={'Montserrat_400Regular'}>
                {'aqui'}
              </TextBase>
            </ButtonForgotPassword>
          </TextBase>
        </ContainerForm>
      </ContainerInfo>
    </Container>
  );
};

export default LoginTablet;
