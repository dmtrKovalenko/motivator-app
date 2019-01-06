import React from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import AuthStore from '~/stores/AuthStore';
import StyledText from '@ui/StyledText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});

type Props = {
  navigationStore: AuthStore;
};

const WeightScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <StyledText>Get started by opening </StyledText>
    </View>
  );
};

WeightScreen.navigationOptions = {
  title: 'Sobaka',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'lato',
  },
};

export default observer(WeightScreen);
