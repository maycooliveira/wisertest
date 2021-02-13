import styled from 'styled-components/native';

const borderInputAtributts = '1px solid';
interface InputProps {
  isError: boolean;
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
  border: ${(props) =>
    props.isError ? borderInputAtributts + ' #FF377F' : borderInputAtributts + ' #989fdb'};
  border-radius: 8px;
`;
