import * as React from 'react';
import ScreenContainer from '@ui/ScreenContainer';
import screen from '~/components/screen';
import { TextField } from '~/components/Form';
import { Formik } from 'formik';
import {
  Button,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import StyledText from '~/@ui/StyledText';

interface RegisterProps {}

const styles = StyleSheet.create({
  submitBtn: {
    marginTop: 'auto',
  },
});

const Register: React.SFC<RegisterProps> = props => {
  return (
    <ScreenContainer scroll avoidKeyboard>
      <Formik initialValues={{}} onSubmit={console.log}>
        {props => (
          <>
            <TextField
              formik={props}
              name="name"
              label="Name"
              placeholder="How to name you?"
            />

            <TextField
              formik={props}
              secureTextEntry
              name="password"
              label="Password"
              keyboardType="numeric"
              placeholder="Secure your personal info"
              textContentType="password"
            />

            <StyledText align="center">
              Make sure that your information will be saved only on your device
              and won't pushed to any database.
            </StyledText>

            <View style={styles.submitBtn}>
              <Button
                title="Start becoming better"
                disabled={!props.isValid}
                onPress={props.handleSubmit as any}
              />
            </View>
          </>
        )}
      </Formik>
    </ScreenContainer>
  );
};

export default screen('Register', { headerLeft: null })(Register);
