import styled from 'styled-components/native';

const borderInputAtributts = '1px solid';
interface InputProps {
  isError: boolean;
  fontFamily: string;
}

export const Container = styled.View``;

export const View = styled.View``;

export const ContainerInput = styled.View`
  justify-content: center;
`;

export const ContainerIconError = styled.View`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 18px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput<InputProps>`
  height: 48px;
  font-size: 10px;
  font-family: ${(props) => props.fontFamily};
  color: #989fdb;
  padding-left: 17px;
  border: ${(props) =>
    props.isError ? borderInputAtributts + ' #FF377F' : borderInputAtributts + ' #989fdb'};
  border-radius: 8px;
`;
