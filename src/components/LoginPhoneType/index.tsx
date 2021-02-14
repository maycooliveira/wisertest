import React from 'react';
import {
  Container,
  BackgroundImage,
  Image,
  ContainerForm,
  ContainerInfo,
  ButtonForgotPassword,
  ViewInfo,
  ScrollView,
} from './styles';
import { Dimensions } from 'react-native';
import shadow from '../../images/shadow.png';
import loginBackground from '../../images/loginbackground.png';
import LoginForme from '../LoginForm';
import BaseButton from '../BaseButton';
import { Spacer, TextBase } from '../../styles/textStyles';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

const { width } = Dimensions.get('screen');

const LoginPhoneType: React.FC = () => {
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
            color={'#fff'}
            useShadow={false}
            width={width * 0.44}
            loading={false}
            onPress={() => {}}
          />

          <Spacer value={4} />

          <TextBase center={true} fontSize={14} color={'#fff'} fontFamily={'Montserrat_400Regular'}>
            {'Esqueceu seu login ou senha?\nClique '}
            <ViewInfo>
              <Spacer value={4} />
              <ButtonForgotPassword>
                <TextBase
                  center={true}
                  isUnderline={true}
                  fontSize={14}
                  color={'#fff'}
                  fontFamily={'Montserrat_400Regular'}>
                  {'aqui'}
                </TextBase>
              </ButtonForgotPassword>
            </ViewInfo>
          </TextBase>
          <Spacer value={20} />
        </ContainerForm>
      </ScrollView>
    </Container>
  );
};

export default LoginPhoneType;
