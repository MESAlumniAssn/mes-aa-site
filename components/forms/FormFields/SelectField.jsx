import React from "react";
import { useField } from "formik";

// Material UI imports
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  select: {
    minWidth: 150,
  },
});

const SelectField = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const isError = meta.touched && meta.error;

  const classes = useStyles();

  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{meta.error}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select
        {...field}
        value={selectedValue ? selectedValue : ""}
        className={classes.select}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
};

export default SelectField;
