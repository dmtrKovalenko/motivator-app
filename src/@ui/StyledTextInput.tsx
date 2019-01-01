import * as React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
  TextProps,
} from 'react-native';
import StyledText, { StyledTextProps } from './StyledText';
import Colors from '~/constants/Colors';

export interface StyledTextInputProps extends TextInputProps {
  label?: string;
  error?: boolean;
  helperText?: string;
  align?: StyledTextProps['align'];
  containerStyle?: StyleProp<ViewStyle>;
  forwardRef?: React.Ref<any>
}

const styles = StyleSheet.create({
  styledTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.hintTextColor,
    paddingBottom: 4,
    marginBottom: 16,
    fontSize: 15,
  },
  label: {
    fontSize: 14,
    color: Colors.hintTextColor,
  },
  helperText: {
    fontSize: 11,
    marginTop: -16,
    marginBottom: 8,
    color: Colors.hintTextColor,
  },
  error: {
    color: Colors.errorBackground,
  },
  errorBorder: {
    borderBottomColor: Colors.errorBackground,
  },
});

const StyledTextInput: React.SFC<StyledTextInputProps> = ({
  label,
  style,
  error,
  align,
  helperText,
  containerStyle,
  forwardRef,
  ...other
}) => {
  return (
    <View style={containerStyle}>
      {label && (
        <StyledText align={align} style={styles.label}>
          {label}
        </StyledText>
      )}

      <TextInput
        ref={forwardRef}
        style={[
          styles.styledTextInput,
          align && { textAlign: align },
          error && styles.errorBorder,
          style,
        ]}
        {...other}
      />

      {helperText && (
        <StyledText
          align={align}
          style={[styles.helperText, error && styles.error]}
        >
          {helperText}
        </StyledText>
      )}
    </View>
  );
};

export default StyledTextInput;
