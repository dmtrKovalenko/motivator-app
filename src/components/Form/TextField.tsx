import * as React from 'react';
import { FormikProps } from 'formik';
import StyledTextInput, { StyledTextInputProps } from '@ui/StyledTextInput';


interface InputProps<T> extends StyledTextInputProps {
  name: string;
  formik: FormikProps<T>;
}

const TextField: React.SFC<InputProps<any>> = ({
  name,
  formik,
  ...other
}) => {
  const error = formik.errors[name] as string;
  const toShowError = Boolean(error) && formik.touched[name] as boolean

  return (
    <StyledTextInput
      value={formik.values[name]}
      onBlur={formik.handleBlur(name)}
      onChangeText={formik.handleChange(name)}
      helperText={toShowError ? error : undefined}
      error={toShowError}
      {...other}
    />
  );
};

export default TextField;
