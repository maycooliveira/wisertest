import styled from 'styled-components/native';

interface TextType {
  fontSize: number;
  color: string;
  center: boolean;
  fontFamily: string;
}

interface SpacerValue {
  value: number;
}

export const TextTitle = styled.Text<TextType>`
  font-size: ${(props: { fontSize: number }) => props.fontSize}px;
  color: ${(props: { color: string }) => props.color};
  font-family: ${(props: { fontFamily: string }) => props.fontFamily};
  text-align: center;
`;

export const Spacer = styled.View<SpacerValue>`
  height: ${(props) => props.value};
  width: ${(props) => props.value};
`;
