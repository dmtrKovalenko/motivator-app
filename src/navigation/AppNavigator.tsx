import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import SignUp from '../screens/Auth/SignUp';
import Register from '../screens/Auth/Register';
import stores from '~/stores';

export default createSwitchNavigator(
  {
    Main: MainTabNavigator,
    SignUp: createStackNavigator({
      SignUp,
      Register,
    }),
  },
  {
    initialRouteName: stores.authStore.isAuthenticated ? 'Main' : 'SignUp',
  }
);;
