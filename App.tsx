import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Provider } from 'mobx-react';
import AppNavigator from './src/navigation/AppNavigator';
import stores from './src/stores';

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
      stores.authStore.loadCurrentUser(),
      Font.loadAsync({
        lato: require('./src/assets/fonts/Lato-Regular.ttf'),
      }),
    ]) as Promise<any>
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

    return (
      <Provider {...stores}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
