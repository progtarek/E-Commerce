import React from "react";
import {
  FormGroup,
  FormLabel,
  Field,
  ErrorMessage,
} from "./input.component.styles";
import { useField } from "formik";

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      {label ? (
        <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      ) : null}
      <Field
        {...field}
        {...props}
        className={meta.touched && meta.error ? "invalid" : ""}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </FormGroup>
  );
};

export default FormInput;
