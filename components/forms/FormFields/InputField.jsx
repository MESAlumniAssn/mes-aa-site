import React from "react";
import { useField } from "formik";

// Material UI imports
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helperText: {
    margin: 0,
    paddingTop: 2,
  },
});

const InputField = ({ placeholder, length, ...props }) => {
  const { ...rest } = props;
  const [field, meta] = useField(props);

  const errorText = meta.touched && meta.error ? meta.error : "";
  const value = field.value && field.value ? field.value : "";
  const classes = useStyles();

  return (
    <TextField
      error={meta.touched && meta.error}
      helperText={errorText}
      {...field}
      {...rest}
      inputProps={{ maxLength: length }}
      variant="outlined"
      FormHelperTextProps={{
        className: classes.helperText,
      }}
    />
  );
};

export default InputField;
