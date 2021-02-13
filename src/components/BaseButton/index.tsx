import React from 'react';
import { ButtonTitle, Container, LoadingAction } from './styles';
import { StyleSheet } from 'react-native';
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  title: string;
  color: string;
  loading: boolean;
  useShadow: boolean;
  width: number;
  onPress: () => void;
}

const BaseButton: React.FC<Props> = (props) => {
  const { title, onPress, color, loading, width, useShadow } = props;
  useFonts({
    Montserrat_600SemiBold,
  });
  return (
    <Container onPress={onPress} useShadow={useShadow} backgroundColor={color}>
      <LinearGradient
        colors={['#9D25B0', '#383E71']}
        start={[0.1, 0.1]}
        end={[1, 1]}
        style={styles({ width }).backgroundGradiente}>
        {!loading && (
          <ButtonTitle fontFamily={'Montserrat_600SemiBold'}>{title.toUpperCase()}</ButtonTitle>
        )}
        {loading && <LoadingAction />}
      </LinearGradient>
    </Container>
  );
};

export default BaseButton;

const styles = (props: any) =>
  StyleSheet.create({
    backgroundGradiente: {
      width: props.width,
      height: 48,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
