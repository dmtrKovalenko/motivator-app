import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import SignUp from '../screens/Auth/SignUp';
import Register from '../screens/Auth/Register';

type Props = { 
  isAuthenticated: boolean;
}

const AppNavigator = (props: Props) => {
  const SwitchNavigator = createSwitchNavigator(
    {
      Main: MainTabNavigator,
      SignUp: createStackNavigator({ 
        SignUp,
        Register
      }),
    },
    {
      initialRouteName: props.isAuthenticated ? 'Main' : 'SignUp',
    }
  );

  return <SwitchNavigator />
} 

export default AppNavigator