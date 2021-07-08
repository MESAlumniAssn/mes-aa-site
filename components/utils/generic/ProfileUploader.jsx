import React, { useState, useCallback, useEffect } from "react";
import Dropzone from "react-dropzone";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCamera,
  faCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dropzone: {
    textAlign: "center",
    margin: "2rem 4rem 0 4rem",
    padding: "40px",
    borderRadius: "0.75rem",
    cursor: "pointer",
    backgroundColor: "#e1e5ea",
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 1rem 0 1rem",
    },
  },
}));

const ProfileUploader = ({
  files,
  setFiles,
  setProfilePicUploaded,
  setOpen,
}) => {
  var newFiles = [...files];

  const classes = useStyles();

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prev) => [
      ...prev,
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ]);
    setProfilePicUploaded(true);
  }, []);

  const images = newFiles.map((file, index) => {
    return (
      <div key={index} style={{ textAlign: "center", paddingTop: 15 }}>
        <div>
          <img
            src={file.preview}
            height="120px"
            width="150px"
            alt="Uploaded profile photo"
          />
          <p
            onClick={() => {
              newFiles.splice(newFiles.indexOf(file), 1);
              setFiles(newFiles);
            }}
            style={{
              fontSize: "0.8rem",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faTrash} style={{ marginRight: "2px" }} />
            Remove
          </p>

          <div style={{ margin: "20px 0" }}>
            <Button
              variant="contained"
              size="small"
              disableElevation
              onClick={() => setOpen(false)}
              style={{
                backgroundColor: "#b9ac92",
                color: "var(--primary-color)",
                fontWeight: "bold",
              }}
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Dropzone
        accept="image/jpg, image/jpeg, image/bmp, image/tiff, image/png, image/webp"
        onDrop={onDrop}
        maxFiles={1}
        aria-label="Dropzone for images"
      >
        {({ getRootProps, getInputProps, isDragReject }) => (
          <section>
            {newFiles.length === 0 && (
              <div>
                <Typography
                  variant="subtitle1"
                  component="subtitle1"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignITems: "center",
                    paddingTop: 20,
                  }}
                >
                  <div>
                    Accepted image formats:{" "}
                    <span style={{ color: "#c87941" }}>jpeg</span>,&nbsp;
                    <span style={{ color: "#c87941" }}>bmp</span>,&nbsp;
                    <span style={{ color: "#c87941" }}>tiff</span>,&nbsp;
                    <span style={{ color: "#c87941" }}>webp</span>
                    &nbsp;and&nbsp;
                    <span style={{ color: "#c87941" }}>png</span>.
                  </div>
                </Typography>
                <div {...getRootProps()} className={classes.dropzone}>
                  <input
                    {...getInputProps()}
                    aria-label="Drop zone for images"
                  />
                  <FontAwesomeIcon
                    icon={faCamera}
                    style={{ fontSize: "2rem" }}
                  />
                </div>
              </div>
            )}

            {newFiles.length === 1 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "1rem 4rem 0 4rem",
                  borderRadius: "10%",
                  cursor: "not-allowed",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ fontSize: "2rem", color: "green" }}
                />
                <p style={{ fontSize: "1rem", color: "green", paddingTop: 1 }}>
                  Photo added.
                </p>
              </div>
            )}

            <div>{images.slice(0, 1)}</div>

            {isDragReject && (
              <div style={{ fontSize: "0.8rem", color: "red" }}>
                <FontAwesomeIcon icon={faExclamationTriangle} /> Accepted image
                formats - jpeg, bmp, tiff, png and gif
              </div>
            )}
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default ProfileUploader;
