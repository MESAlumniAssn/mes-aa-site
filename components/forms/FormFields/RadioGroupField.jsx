import React from "react";
import { useField } from "formik";

// Material UI imports
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  radio: {
    fontSize: "0.5rem",
    marginBottom: "1rem",
  },
  label: {
    fontSize: "0.1rem",
  },
});

const RadioGroupField = (props) => {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  const classes = useStyles();

  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{meta.error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue(e.target.value);
  }

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="streams"
        value={field.value}
        onChange={_onChange}
        className={classes.radio}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {props.data.map((stream, index) => (
            <FormControlLabel
              key={index}
              value={stream}
              control={<Radio />}
              label={
                <Typography style={{ fontSize: "1rem" }}>{stream}</Typography>
              }
              className={classes.label}
            />
          ))}
        </div>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupField;
