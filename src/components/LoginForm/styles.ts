import styled from 'styled-components/native';
import colors from '../../styles/colors';

const borderInputAtributts = '1px solid';
interface InputProps {
  isError: boolean;
  fontFamily: string;
}

export const Container = styled.View`
  width: 100%;
`;

export const View = styled.View``;

export const ContainerInput = styled.View`
  justify-content: center;
`;

export const ContainerIconError = styled.TouchableOpacity`
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
  color: ${colors.thinPurple};
  padding-left: 17px;
  border: ${(props) =>
    props.isError
      ? `${borderInputAtributts} ${colors.error}`
      : `${borderInputAtributts} ${colors.thinPurple}`};
  border-radius: 8px;
`;
