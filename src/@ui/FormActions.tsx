import * as React from 'react';
import { ViewProps, View, StyleSheet } from 'react-native';

interface FormActionsProps extends ViewProps { }

const styles = StyleSheet.create({
  formActionsContainer: {
    marginTop: 'auto'
  }
})

const FormActions: React.SFC<FormActionsProps> = ({ style, ...other }) => {
  return (
    <View style={[styles.formActionsContainer, style]} {...other} />
  )
};

export default FormActions;