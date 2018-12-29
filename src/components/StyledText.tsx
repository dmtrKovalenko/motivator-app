import React from 'react';
import { Text, StyleSheet } from 'react-native';

type StyledTextProps = {
  style?: StyleSheet.NamedStyles<any>;
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'lato',
    fontSize: 15
  },
});

const StyledText: React.SFC<StyledTextProps> = (props) => {
  return <Text {...props} style={[props.style, styles.defaultFont]} />;
}

export default StyledText
