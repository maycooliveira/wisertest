import styled from 'styled-components/native';
export const StatusBar = styled.StatusBar``;

interface TextType {
  fontSize: number;
  color: string;
  center: boolean;
  fontFamily: string;
}

export const TextTitle = styled.Text<TextType>`
  font-size: ${(props: { fontSize: number }) => props.fontSize}px;
  color: ${(props: { color: string }) => props.color};
  font-family: ${(props: { fontFamily: string }) => props.fontFamily};
  text-align: center;
  margin-top: 150px;
  margin-bottom: 20px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding-left: 24px;
  padding-right: 24px;
`;
