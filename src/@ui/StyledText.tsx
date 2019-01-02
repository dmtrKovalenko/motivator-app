import React from 'react';
import {
  Text,
  StyleSheet,
  TextProps,
  TextStyle,
  StyleProp,
} from 'react-native';
import Colors from '~/constants/Colors';

type TextVariant = 'title' | 'body';

export type StyledTextProps = {
  style?: StyleProp<TextStyle>;
  variant?: TextVariant;
  align?: 'center' | 'left' | 'right';
  disableMargin?: boolean;
} & TextProps;

const styles = StyleSheet.create<Record<string, object>>({
  text: {
    marginBottom: 4,
    fontFamily: 'lato',
    color: Colors.textColor,
  },
  default: {
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    marginTop: 12,
  },
  noMargin: {
    marginTop: 0
  }
});

const StyledText: React.SFC<StyledTextProps> = ({
  variant,
  style,
  align,
  disableMargin,
  ...other
}) => {
  const alignStyle = { textAlign: align };
  const variantStyle = styles[variant!];

  return (
    <Text
      {...other}
      style={[
        styles.text,
        styles.default,
        alignStyle,
        variantStyle,
        disableMargin && styles.noMargin,
        style,
      ]}
    />
  );
};

StyledText.defaultProps = {
  align: 'left',
  variant: 'body',
};

export default StyledText;
