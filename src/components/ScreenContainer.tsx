import React from 'react';
import { Text, StyleSheet } from 'react-native';

type ScreenContainerProps = {
  style?: StyleSheet.NamedStyles<any>;
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
});

const ScreenContainer: React.SFC<ScreenContainerProps> = props => {
  return <Text {...props} style={[props.style, styles.ScreenContainer]} />;
};

export default ScreenContainer;
