import styled from 'styled-components/native';

interface TextType {
  fontSize: number;
  color: string;
  center: boolean;
  fontFamily: string;
  marginLeft?: number;
}

interface SpacerValue {
  value: number;
}

export const TextBase = styled.Text<TextType>`
  font-size: ${(props: { fontSize: number }) => props.fontSize}px;
  color: ${(props: { color: string }) => props.color};
  font-family: ${(props: { fontFamily: string }) => props.fontFamily};
  text-align: ${(props: { center: boolean }) => (props.center ? 'center' : 'left')};
  margin-left: ${(props) => props.marginLeft || 0};
`;

export const Spacer = styled.View<SpacerValue>`
  height: ${(props) => props.value}px;
  width: ${(props) => props.value}px;
`;
