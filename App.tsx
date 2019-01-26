import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import createAppNavigator from './src/navigation/AppNavigator';
import { storesMap } from './src/stores';
import { StoreContext } from '~/stores/injectStore';
import navigator from '~/utils/navigator';
import { ThemeContext } from '@ui/styles/ThemeContext';
import { defaultTheme } from '@ui/styles/Theme';

type Props = {
  skipLoadingScreen: boolean;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.PureComponent<Props> {
  state = {
    isLoadingComplete: false,
  };

  private loadResourcesAsync = async () => {
    return Promise.all([
      storesMap.authStore.loadCurrentUser(),
      Font.loadAsync({
        lato: require('./src/assets/fonts/Lato-Regular.ttf'),
      }),
    ]) as Promise<any>;
  };

  private handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  private handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }

    const AppNavigator = createAppNavigator();
    return (
      <ThemeContext.Provider value={defaultTheme}>
        <StoreContext.Provider value={storesMap}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

            <AppNavigator
              ref={navigatorRef => {
                if (!navigatorRef) {
                  throw new Error('navigatorRef cannot be set');
                }

                navigator.setTopLevelNavigator(navigatorRef.dispatch);
              }}
            />
          </View>
        </StoreContext.Provider>
      </ThemeContext.Provider>
    );
  }
}
