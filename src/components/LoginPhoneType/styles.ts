import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  flex: 1;
  background-color: #130525;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100%;
`;

export const View = styled.View`
  height: 40%;
  background-color: #130525;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 60%;
`;

export const ContainerForm = styled.View`
  flex: 1;
  padding-horizontal: 32px;
  justify-content: center;
  margin-top: 24px;
  align-items: center;
  top: 16;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
`;

export const ContainerInfo = styled.View`
  background-color: #faf5ff;
  padding-top: 32px;
  padding-bottom: 56px;
  padding-horizontal: 28px;
  width: 100%;
  border-radius: 8px;
`;
