import Colors from "~/constants/Colors";

export interface Theme {
  mode: 'dark' | 'light';
  primaryColor: string;
}

export const defaultTheme: Theme = {
  mode: 'light',
  primaryColor: Colors.primaryColor
}