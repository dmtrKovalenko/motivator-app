import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationScreenOptions,
} from 'react-navigation';

import Icon from '../components/Icon';
import WeightScreen from '../screens/HomeScreen';
// @ts-ignore
import LinksScreen from '../screens/LinksScreen';
// @ts-ignore
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '~/constants/Colors';

const HomeStack = createStackNavigator({
  Home: WeightScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => <Icon name="fitness" focused={focused} />,
} as NavigationScreenOptions;

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => <Icon name="link" focused={focused} />,
} as NavigationScreenOptions;

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => <Icon name="options" focused={focused} />,
} as NavigationScreenOptions;

export default createBottomTabNavigator(
  {
    LinksStack,
    HomeStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);
