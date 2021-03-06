import * as React from 'react';
import ScreenContainer from '@ui/ScreenContainer';
import { LocalAuthentication } from 'expo';
import { NavigationScreenProps } from 'react-navigation';
import StyledTextInput from '@ui/StyledTextInput';
import { StyleSheet, Button, Image, Animated, Vibration } from 'react-native';
import AuthStore from '~/stores/AuthStore';
import StyledText from '@ui/StyledText';
import FormActions from '@ui/FormActions';
import Logo from '~/assets/images/logo.png';
import compose from 'recompose/compose';
import { observer } from 'mobx-react';
import { createShakingAnimation } from '~/utils/animations';
import NumericKeyboard from '~/components/NumericKeyboard';
import Colors from '~/constants/Colors';
import screen from '~/components/screen';
import { injectStore } from '~/stores/injectStore';
import { WithStyles, withStyles, styled } from '@ui/styles/createStyles';

const styles = styled(theme =>
  StyleSheet.create({
    logo: {
      width: 70,
      height: 70,
    },
    label: {
      marginTop: 8,
      marginBottom: 8,
    },
    password: {
      textAlign: 'center',
      borderBottomWidth: 0,
      marginBottom: 24,
    },
    submitBtn: {
      marginTop: 'auto',
    },
  })
);

interface SignInProps extends NavigationScreenProps, WithStyles<typeof styles> {
  authStore: AuthStore;
}

class SignIn extends React.Component<SignInProps> {
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

  handleNumberInput = (number: number) => {
    this.setState({
      password: this.state.password + number.toString(),
    });
  };

  handleDelete = () => {
    const { password } = this.state;
    this.setState({ password: password.substring(0, password.length - 1) });
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
      }).start();

      Vibration.vibrate(400, false);
    }
  };

  render() {
    const { styles } = this.props;

    return (
      <ScreenContainer centered>
        <Image source={Logo} style={styles.logo} />

        <StyledText style={styles.label} variant="title" align="center">
          Your password
        </StyledText>

        <Animated.View
          style={{
            width: '100%',
            marginLeft: this.state.shakeAnimation as any,
          }}
        >
          <StyledTextInput
            editable={false}
            secureTextEntry
            style={styles.password}
            value={this.state.password}
          />
        </Animated.View>

        <NumericKeyboard
          onDelete={this.handleDelete}
          onNumberEnter={this.handleNumberInput}
          onFingerPrintRequest={this.authenticateWithFingerPrint}
        />

        <FormActions>
          <Button
            color={Colors.primaryColor}
            title="Continue"
            onPress={this.authenticate}
          />
        </FormActions>
      </ScreenContainer>
    );
  }
}

export default compose<any, any>(
  observer,
  screen('SignIn'),
  injectStore('authStore'),
  withStyles(styles)
)(SignIn);
