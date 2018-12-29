import { NavigationScreenOptions } from 'react-navigation'

type NavigationScreenComponent<T = any> = {
  navigationOptions?: NavigationScreenOptions
} & React.ComponentType<T>

const screen = (title: string, options?: NavigationScreenOptions) => <T>(Component: NavigationScreenComponent<T>) => {
  Component.navigationOptions = {
    title,  
    headerTitleStyle: {
      fontFamily: 'lato',
      fontSize: 20
    }, 
    ...options
  } 

  return Component
}

export default screen;