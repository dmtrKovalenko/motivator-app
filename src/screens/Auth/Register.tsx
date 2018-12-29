import * as React from 'react';
import StyledText from '../../components/StyledText';
import ScreenContainer from '../../components/ScreenContainer';
import screen from '../../components/screen';

interface RegisterProps {
}

const Register: React.SFC<RegisterProps> = (props) => {
  return (
    <ScreenContainer>
      <StyledText> YEEEY </StyledText>
    </ScreenContainer>
  )
};

export default screen('Register', { headerLeft: null })(Register);