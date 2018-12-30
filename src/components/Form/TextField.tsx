import * as React from 'react';
import { FormikProps } from 'formik';
import StyledText, { StyledTextInputProps } from '~/@ui/StyledTextInput';

interface InputProps<T> extends StyledTextInputProps {
  name: string;
  formik: FormikProps<T>;
}

const TextField: React.SFC<InputProps<any>> = ({
  name,
  formik: formikProps,
  ...other
}) => {
  return (
    <StyledText
      value={formikProps.values[name]}
      onBlur={formikProps.handleBlur(name)}
      onChangeText={formikProps.handleChange(name)}
      {...other}
    />
  );
};

export default TextField;
