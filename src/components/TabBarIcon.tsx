import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

interface TabBarIconProps {
  name: string;
  focused: boolean;
}

const TabBarIcon: React.SFC<TabBarIconProps> = ({ name, focused }) => {
  return (
    <Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;
