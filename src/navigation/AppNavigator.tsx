import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import SignUp from '../screens/Auth/SignUp';
import SignIn from '~/screens/Auth/SignIn'
import Register from '../screens/Auth/Register';
import stores from '~/stores';

export default () => createSwitchNavigator(
  {
    Main: MainTabNavigator,
    SignIn: createStackNavigator({ SignIn }),
    SignUp: createStackNavigator({
      SignUp,
      Register,
    }),
  },
  {
    initialRouteName: stores.authStore.isAuthenticated
      ? 'Main'
      : stores.authStore.canAuthenticate
        ? 'SignIn'
        : 'SignUp',
  }
);
