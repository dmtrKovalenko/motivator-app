import { NavigationScreenOptions } from 'react-navigation'
import { Platform } from 'react-native';

type NavigationScreenComponent<T = any> = {
  navigationOptions?: NavigationScreenOptions
} & React.ComponentType<T>

const screen = (title: string, options?: NavigationScreenOptions) => <T>(Component: NavigationScreenComponent<T>) => {
  Component.navigationOptions = {
    title,  
    headerTitleStyle: {
      fontFamily: 'lato',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: Platform.OS === 'android' ? 18 : 20
    }, 
    ...options
  } 

  return Component
}

export default screen;