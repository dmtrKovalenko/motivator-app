import * as React from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import screen from '../../components/screen';
import ScreenContainer from '../../components/ScreenContainer';
import Logo from '../../assets/images/logo.jpg';
import StyledText from '../../components/StyledText';
import { NavigationScreenProps } from 'react-navigation';

interface SignUpProps extends NavigationScreenProps {}

const styles = StyleSheet.create({
  logo: {
    marginTop: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subtitle: {
    marginTop: 16
  },
  continueBtn: {
    marginTop: 'auto',
  },
});

const SignUp = ({ navigation }: SignUpProps) => {
  return (
    <ScreenContainer>
      <Image source={Logo} width={150} style={styles.logo} />
      <StyledText align="center" variant="title">
        Good day! I am your personal unicorn motivator
      </StyledText>

      <StyledText style={styles.subtitle} align="center">
        Firstly, give me some info about yourself
      </StyledText>

      <View style={styles.continueBtn}>
        <Button onPress={() => navigation.navigate('Register')} title="Continue" />
      </View>
    </ScreenContainer>
  );
};

export default screen('Sign Up')(SignUp);
