import * as React from 'react';
import StyledText from '~/components/StyledText';
import ScreenContainer from '~/components/ScreenContainer';
import screen from '~/components/screen';
import { TextInput } from 'react-native';

interface RegisterProps {}

const Register: React.SFC<RegisterProps> = props => {
  return (
    <ScreenContainer>
      <TextInput
        autoFocus
        style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}
        placeholder="How to name you?"
      />
      
      <TextInput
        autoFocus
        style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}
        placeholder="How to name you?"
      />
    </ScreenContainer>
  );
};

export default screen('Register', { headerLeft: null })(Register);
