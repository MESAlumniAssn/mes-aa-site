import React, { useState } from "react";
import { motion } from "framer-motion";

// Material UI imports
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// Component imports
import CreateTestimonialForm from "../../forms/testimonials/CreateTestmonialForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    zIndex: 99999,
  },
  modalBackground: {
    backgroundColor: "#FFF",
    padding: 30,
    width: "600px",
    position: "relative",
    textAlign: "center",
    border: "none",
    "&.Mui-focused": {
      border: "none",
      outline: "none",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
        outline: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: 20,
      width: "400px",
    },
  },
}));

const CreateTestimonialButton = withStyles({
  root: {
    background: "#ff5200",
    color: "#FFFFFF",
    fontSize: 16,
    padding: "8px 12px",
    lineHeight: 1.5,
    boxShadow: "0 13px 27px rgba(0, 0, 0, 0.2)",
    color: "#fff",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#ff5200",
      boxShadow: "0 15px 29px rgba(0, 0, 0, 0.3)",
    },
  },
})(Button);

const TestimonialButton = () => {
  const [openTestimonialForm, setOpenTestimonialForm] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <CreateTestimonialButton onClick={() => setOpenTestimonialForm(true)}>
        Write a Testimonial
      </CreateTestimonialButton>

      <div>
        <Modal
          className={classes.modal}
          open={openTestimonialForm}
          onClose={() => setOpenTestimonialForm(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openTestimonialForm}>
            <div className={classes.modalBackground}>
              <CreateTestimonialForm
                openTestimonialForm={openTestimonialForm}
                setOpenTestimonialForm={setOpenTestimonialForm}
              />
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default TestimonialButton;
