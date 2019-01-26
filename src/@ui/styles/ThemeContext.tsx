import React from 'react'
import { Theme } from './Theme';
import Colors from '~/constants/Colors';

export const ThemeContext = React.createContext<Theme>({ 
  mode: 'light',
  primaryColor: Colors.primaryColor,
})