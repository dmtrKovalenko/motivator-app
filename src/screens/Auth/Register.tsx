import * as React from 'react';
import screen from '~/components/screen';
import { TextField } from '~/components/Form';
import { Formik } from 'formik';
import { Button, StyleSheet, View } from 'react-native';
import StyledText from '@ui/StyledText';
import ScreenContainer from '@ui/ScreenContainer';
import { RegisterSchema } from '~/models/validate/RegisterSchema';
import { inject, observer } from 'mobx-react';
import AuthStore from '~/stores/AuthStore';
import { User } from '~/models/User';
import { NavigationScreenProps } from 'react-navigation';
import FormActions from '@ui/FormActions';

interface RegisterProps extends NavigationScreenProps {
  authStore: AuthStore;
}

const styles = StyleSheet.create({
  delimiterText: {
    marginTop: 0,
  },
  weightContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  weightInput: {
    width: '40%',
    maxWidth: '40%',
  },
});

const Register: React.SFC<RegisterProps> = ({ authStore, navigation }) => {
  return (
    <ScreenContainer scroll avoidKeyboard>
      <Formik
        initialValues={{} as User}
        onSubmit={data =>
          authStore.register(data).then(() => navigation.navigate('Home'))
        }
        validationSchema={RegisterSchema}
      >
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

            <StyledText style={styles.delimiterText} align="center">
              Make sure that your information will be saved only on your device
              and won't pushed to any database.
            </StyledText>

            <View style={styles.weightContainer}>
              <TextField
                formik={props}
                name="weight"
                align="center"
                label="Current weight"
                placeholder="Be honest"
                keyboardType="numeric"
                containerStyle={styles.weightInput}
              />

              <TextField
                formik={props}
                name="goal"
                align="center"
                label="Weight goal"
                placeholder="Be honest"
                keyboardType="numeric"
                containerStyle={styles.weightInput}
              />
            </View>

            <FormActions>
              <Button
                title="Start becoming better"
                disabled={!props.isValid}
                onPress={() => props.handleSubmit()}
              />
            </FormActions>
          </>
        )}
      </Formik>
    </ScreenContainer>
  );
};

export default screen('Register', { headerLeft: null })(
  inject('authStore')(observer(Register))
);
