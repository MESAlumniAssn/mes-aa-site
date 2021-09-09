import React from "react";
import Image from "next/image";
import { REGISTRATION_CERTIFICATE } from "../../../utils/images";

// Material UI styles
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalBackground: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "500px",
      background: "#FFF",
      padding: "20px",
    },
  };
});

const RegistrationCertificateModal = ({
  openRegistrationCert,
  setOpenRegistrationCert,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Modal
        className={classes.modal}
        open={openRegistrationCert}
        onClose={() => setOpenRegistrationCert(false)}
        closeAfterTransition
        disableScrollLock={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.modalBackground}>
          <div
            style={{ position: "absolute", right: 30, top: 20, color: "#FFF" }}
          >
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => setOpenRegistrationCert(false)}
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              className="timesButtonAnimation"
            />
          </div>
          <div
            style={{ position: "absolute", right: 22, top: 50, color: "#FFF" }}
            className="hideEsc"
          >
            ESC
          </div>
          <Image
            src={REGISTRATION_CERTIFICATE}
            alt="Registration certificate"
            height={600}
            width={400}
          />
        </div>
      </Modal>
    </div>
  );
};

export default RegistrationCertificateModal;
