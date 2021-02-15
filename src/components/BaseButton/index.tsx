import React from 'react';
import { ButtonTitle, Container, LoadingAction } from './styles';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../styles/colors';
interface Props {
  title: string;
  loading: boolean;
  useShadow: boolean;
  onPress: () => void;
}

const BaseButton: React.FC<Props> = (props) => {
  const { title, onPress, loading, useShadow } = props;
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Container onPress={onPress} useShadow={useShadow}>
      <LinearGradient
        colors={[colors.purple, colors.base]}
        start={[0.1, 0.1]}
        end={[1, 1]}
        style={styles().backgroundGradiente}>
        {!loading && (
          <ButtonTitle fontFamily={'Montserrat_600SemiBold'}>{title.toUpperCase()}</ButtonTitle>
        )}
        {loading && <LoadingAction color={colors.white} />}
      </LinearGradient>
    </Container>
  );
};

export default BaseButton;

const styles = () =>
  StyleSheet.create({
    backgroundGradiente: {
      width: '100%',
      height: 48,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
