import React, { useState } from 'react';
import { Spacer, TextBase } from '../../styles/textStyles';
import AppLoading from 'expo-app-loading';
import { useSelector } from 'react-redux';
import { DeviceType } from 'expo-device';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
} from '@expo-google-fonts/montserrat';
import { Container, Input, View, ContainerInput, ContainerIconError } from './styles';
import Icon from 'react-native-vector-icons/Feather';

const LoginForme: React.FC = () => {
  const { deviceType } = useSelector((state) => state);
  const [isTablet] = useState(deviceType.type === DeviceType.TABLET);
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
  });
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
          <Input isError={true} fontFamily={'Montserrat_400Regular'} autoCapitalize={'none'} />
          <ContainerIconError>
            <Icon name={'x'} size={16} color={'#FF377F'} />
          </ContainerIconError>
        </ContainerInput>
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
          <Input isError={false} secureTextEntry={true} fontFamily={'Montserrat_400Regular'} />
        </ContainerInput>
      </View>
    </Container>
  );
};

export default LoginForme;
