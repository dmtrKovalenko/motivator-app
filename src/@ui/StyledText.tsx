import React from 'react';
import { Text, StyleSheet, TextProps, TextStyle, StyleProp } from 'react-native';

type TextVariant = 'title' | 'body';

type StyledTextProps = {
  style?: StyleProp<TextStyle>;
  variant?: TextVariant;
  align?: 'center' | 'left' | 'right';
} & TextProps;

const styles = StyleSheet.create<Record<string, object>>({
  text: {
    fontFamily: 'lato',
    marginBottom: 4
  },
  default: {
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    marginTop: 12
  },
});

const StyledText: React.SFC<StyledTextProps> = ({
  variant,
  style,
  align,
  ...other
}) => {
  const alignStyle = { textAlign: align };
  const variantStyle = styles[variant!];

  return (
    <Text
      {...other}
      style={[styles.text, styles.default, alignStyle, variantStyle, style]}
    />
  );
};

StyledText.defaultProps = {
  align: 'left',
  variant: 'body',
};

export default StyledText;
