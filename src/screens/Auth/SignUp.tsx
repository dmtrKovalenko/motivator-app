import * as React from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import screen from '~/components/screen';
import ScreenContainer from '@ui/ScreenContainer';
import Logo from '~/assets/images/logo.png';
import StyledText from '@ui/StyledText';
import { NavigationScreenProps } from 'react-navigation';
import Colors from '~/constants/Colors';

interface SignUpProps extends NavigationScreenProps {}

const styles = StyleSheet.create({
  logo: {
    marginTop: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 150,
    height: 150,
  },
  subtitle: {
    marginTop: 16,
  },
  continueBtn: {
    marginTop: 'auto',
  },
});

const SignUp = ({ navigation }: SignUpProps) => {
  return (
    <ScreenContainer>
      <Image source={Logo} style={styles.logo} />
      <StyledText align="center" variant="title">
        Good day! I am your personal unicorn motivator
      </StyledText>

      <StyledText style={styles.subtitle} align="center">
        Firstly, give me some info about yourself
      </StyledText>

      <View style={styles.continueBtn}>
        <Button
          title="Continue"
          color={Colors.primaryColor}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ScreenContainer>
  );
};

export default screen('Sign Up')(SignUp);
