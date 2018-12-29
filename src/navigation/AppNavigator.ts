import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import AuthLoading from '../screens/Auth/AuthLoading';
import SignUp from '../screens/Auth/SignUp';
import Register from '../screens/Auth/Register';

export default createSwitchNavigator(
  {
    AuthLoading,
    Main: MainTabNavigator,
    SignUp: createStackNavigator({ 
      SignUp,
      Register
    }),
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
