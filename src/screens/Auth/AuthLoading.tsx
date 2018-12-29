import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { NavigationScreenProps } from 'react-navigation';
import AuthStore from '../../stores/AuthStore';

interface AuthLoadingProps extends NavigationScreenProps {
  authStore: AuthStore;
}

const AuthLoading: React.SFC<AuthLoadingProps> = ({ navigation, authStore }) => {
  navigation.navigate(authStore.currentUser ? 'Main' : 'SignUp');

  return null;
};

export default inject('authStore')(observer(AuthLoading));
