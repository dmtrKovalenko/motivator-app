import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

interface TabBarIconProps {
  name: string;
  size?: number;
  focused: boolean;
}

const Icon: React.SFC<TabBarIconProps> = ({ name, size = 26, focused }) => {
  const ionicName =
    name.startsWith('ios') || name.startsWith('md')
      ? name
      : `${Platform.OS === 'android' ? 'md' : 'ios'}-${name}`;

  return (
    <Ionicons
      size={size}
      name={ionicName}
      color={focused ? Colors.primaryColor : Colors.iconDefault}
    />
  );
};

export default Icon;
