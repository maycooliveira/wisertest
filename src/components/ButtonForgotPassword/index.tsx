import React from 'react';
import { ButtonForgotPassword } from './styles';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { TextBase } from '../../styles/textStyles';

interface Props {
  color: string;
}

const ButtonForgotPasswrod: React.FC<Props> = (props) => {
  const { color } = props;
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ButtonForgotPassword>
      <TextBase
        center={true}
        isUnderline={true}
        fontSize={14}
        color={color}
        fontFamily={'Montserrat_400Regular'}>
        {'aqui'}
      </TextBase>
    </ButtonForgotPassword>
  );
};

export default ButtonForgotPasswrod;
