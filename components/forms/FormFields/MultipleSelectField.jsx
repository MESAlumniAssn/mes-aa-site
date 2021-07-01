import React from "react";
import { useField } from "formik";

// Material UI imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const data = ["PUC", "Degree", "Post Graduate", "Others"];

function getStyles(name, course, theme) {
  return {
    fontWeight:
      course.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelectField = (props) => {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const {
    value: [],
  } = field;
  const isError = meta.touched && meta.error;
  const { setValue } = helper;

  const classes = useStyles();

  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{meta.error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue([e.target.value]);
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        {...field}
        value={[field.value]}
        className={classes.select}
        input={<Input />}
        onChange={_onChange}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {data.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
};

export default MultipleSelectField;
