import * as React from 'react';
import ScreenContainer from '@ui/ScreenContainer';
import { LocalAuthentication } from 'expo';
import { NavigationScreenProps } from 'react-navigation';
import StyledTextInput from '@ui/StyledTextInput';
import {
  StyleSheet,
  Button,
  Image,
  Animated,
  View,
  TextInput,
  Vibration,
} from 'react-native';
import StyledText from '@ui/StyledText';
import FormActions from '@ui/FormActions';
import Logo from '~/assets/images/logo.jpg';
import { inject } from 'mobx-react';
import AuthStore from '~/stores/AuthStore';
import { createShakingAnimation } from '~/utils/animations';

interface SignInProps extends NavigationScreenProps {
  authStore: AuthStore;
}

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
  },
  label: {
    marginTop: 36,
  },
  password: {
    width: '100%',
    marginTop: 16,
    textAlign: 'center',
    borderBottomWidth: 0,
  },
  submitBtn: {
    marginTop: 'auto',
  },
});

class SignIn extends React.PureComponent<SignInProps> {
  static navigationOptions = {
    title: 'Sign In',
  };

  private textInput = React.createRef<TextInput>();

  state = {
    password: '',
    shakeAnimation: new Animated.Value(1),
  };

  componentDidMount() {
    this.authenticateWithFingerPrint().catch(console.error);
  }

  authenticateWithFingerPrint = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isAbleToQuickLogin = await LocalAuthentication.isEnrolledAsync();

    if (hasHardware && isAbleToQuickLogin) {
      const { success } = await LocalAuthentication.authenticateAsync(
        'Put your finger to sign in'
      );

      if (success) {
        this.props.navigation.navigate('Home');
      }
    }
  };

  handlePasswordChange = (password: string) => {
    if (!password && this.textInput.current) {
      this.textInput.current.focus();
    }

    this.setState({ password });
  };

  authenticate = () => {
    const isAuthenticated = this.props.authStore.authenticate(
      this.state.password
    );

    if (!isAuthenticated) {
      createShakingAnimation({
        times: 4,
        value: 40,
        duration: 80,
        prop: this.state.shakeAnimation,
      }).start()

      Vibration.vibrate(400, false)
    }
  };

  render() {
    return (
      <ScreenContainer centered scroll avoidKeyboard>
        <Image source={Logo} style={styles.logo} />

        <StyledText style={styles.label} variant="title" align="center">
          Your password
        </StyledText>

        <Animated.View style={{ marginLeft: this.state.shakeAnimation as any }}>
          <StyledTextInput
            autoFocus
            secureTextEntry
            forwardRef={this.textInput}
            style={styles.password}
            keyboardType="numeric"
            onChangeText={this.handlePasswordChange}
          />
        </Animated.View>

        <FormActions>
          <Button title="Continue" onPress={this.authenticate} />
        </FormActions>
      </ScreenContainer>
    );
  }
}

export default inject('authStore')(SignIn);
