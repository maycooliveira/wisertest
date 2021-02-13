import React from 'react';
import { Container, BackgroundImage, Image, ContainerForm, ContainerInfo } from './styles';
import { Dimensions } from 'react-native';
import shadow from '../../images/shadow.png';
import loginBackground from '../../images/loginbackground.png';
import LoginForme from '../LoginForm';
import BaseButton from '../BaseButton';

const { width } = Dimensions.get('screen');

const LoginPhoneType: React.FC = () => {
  return (
    <Container bounces={false}>
      <BackgroundImage source={loginBackground}>
        <Image source={shadow} />
      </BackgroundImage>
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
      </ContainerForm>
    </Container>
  );
};

export default LoginPhoneType;
