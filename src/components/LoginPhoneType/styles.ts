import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Container = styled.View`
  flex: 1;
  background-color: #130525;
`;

export const ScrollView = styled(KeyboardAwareScrollView)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100%;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 60%;
`;

export const ContainerForm = styled.View`
  flex: 1;
  margin-top: 39%;
  margin-horizontal: 32px;
`;

export const ContainerInfo = styled.View`
  background-color: #faf5ff;
  padding-top: 32px;
  padding-bottom: 56px;
  padding-horizontal: 28px;
  width: 100%;
  border-radius: 8px;
`;

export const ButtonForgotPassword = styled.TouchableOpacity`
  justify-content: flex-end;
  margin-bottom: -3px;
  align-items: flex-end;
`;

export const ViewInfo = styled.View``;
