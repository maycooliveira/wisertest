import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.thinGray};
`;

export const View = styled.View`
  width: 100%;
  padding-horizontal: 80px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerButton = styled.View``;

export const ContainerForm = styled(KeyboardAwareScrollView).attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}))`
  flex: 1;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100%;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 40%;
  height: 100%;
`;

export const ViewInfo = styled.View``;
