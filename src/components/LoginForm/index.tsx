import React from 'react';
import { Spacer, TextTitle } from '../../styles/textStyles';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
} from '@expo-google-fonts/montserrat';
import { Container } from './styles';

const LoginForme: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Container>
      <TextTitle center={true} fontSize={24} color={'#383E71'} fontFamily={'Montserrat_400Regular'}>
        {'Olá, seja\nbem-vindo!'}
      </TextTitle>
      <Spacer value={16} />
      <TextTitle
        center={false}
        fontSize={12}
        color={'#989FDB'}
        fontFamily={'Montserrat_600SemiBold'}>
        {'Para acessar a plataforma, faça seu login.'}
      </TextTitle>
    </Container>
  );
};

export default LoginForme;
