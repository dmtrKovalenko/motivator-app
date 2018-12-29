import { NavigationScreenOptions } from 'react-navigation'

type NavigationScreenComponent<T = {}> = {
  navigationOptions?: NavigationScreenOptions
} & React.ComponentType<T>

const screen = (title: string) => (Component: NavigationScreenComponent) => {
  Component.navigationOptions = {
    title,
    headerTitleStyle: {
      fontFamily: 'lato'
    }
  } 

  return Component
}

export default screen;