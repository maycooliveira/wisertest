import styled from 'styled-components/native';

interface ContainerProps {
  backgroundColor: string;
  useShadow: boolean;
}

interface TitleProps {
  fontFamily: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  margin-top: -24px;
  margin-bottom: 20px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: ${(props) => (props.useShadow ? '0px 10px 25px #cf99db' : '0px 0px 0px #000')};
  elevation: ${(props) => (props.useShadow ? '7' : '0')};
`;

export const ButtonTitle = styled.Text<TitleProps>`
  font-size: 16px;
  font-family: ${(props: { fontFamily: string }) => props.fontFamily};
  color: #fff;
`;

export const LoadingAction = styled.ActivityIndicator``;
