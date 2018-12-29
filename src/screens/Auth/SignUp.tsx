import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import StyledText from '../../components/StyledText';
import screen from '../../components/screen';
import ScreenContainer from '../../components/ScreenContainer';
// @ts-ignore
import Logo from '../../assets/images/logo.jpg';

interface SignUpProps {}

const styles = StyleSheet.create({
  logo: {},
});

const SignUp = (props: SignUpProps) => {
  return (
    <ScreenContainer>
      <Image source={Logo} width={150} style={styles.logo} />
    </ScreenContainer>
  );
};

export default screen('Sign Up')(SignUp);
