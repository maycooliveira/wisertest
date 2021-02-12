import React from 'react';
import { Container, TextTitle} from '../LoginScreen/styles';
import { useFonts } from 'expo-font';

const LoginScreen: React.FC = () => {
  let [fontsLoaded] = useFonts({
    "montserrat-regular" : require('../../../assets/fonts/Montserrat-Regular.ttf')
  });

  return (
    <Container>
      <TextTitle center={true} fontSize={24} color={'#383E71'} fontFamily={'montserrat-regular'}>{'Olá, seja\nbem-vindo!'}</TextTitle>
    </Container>
  );
};

export default LoginScreen;
