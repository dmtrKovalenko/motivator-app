import * as React from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';
import StyledText from './StyledText';

export interface StyledTextInputProps extends TextInputProps {
  label?: string;
}

const labelColor = 'rgba(0, 0, 0, 0.54)'
const styles = StyleSheet.create({
  styledTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: labelColor,
    paddingBottom: 4,
    marginBottom: 16,
    fontSize: 15
  },
  label: {
    fontSize: 14,
    color: labelColor
  }
})

const StyledTextInput: React.SFC<StyledTextInputProps> = ({
  label,
  style,
  ...other
}) => {
  return (
    <View>
      {label && (
        <StyledText style={styles.label}>{label}</StyledText>
      )}

      <TextInput
        style={[style, styles.styledTextInput]}
        {...other}
      />
    </View>
  );
};

export default StyledTextInput;
