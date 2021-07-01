import React, { useState, useCallback, useEffect } from "react";
import Dropzone from "react-dropzone";

// Material UI imports
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

const ProfileUploader = ({ files, setFiles, setProfilePicUploaded }) => {
  var newFiles = [...files];

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
      <div key={index} style={{ textAlign: "center", paddingTop: 30 }}>
        <div>
          <img
            src={file.preview}
            height="150px"
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
                    paddingTop: 20,
                  }}
                >
                  Accepted image formats:&nbsp;
                  <span style={{ color: "#c87941" }}>jpeg</span>,&nbsp;
                  <span style={{ color: "#c87941" }}>bmp</span>,&nbsp;
                  <span style={{ color: "#c87941" }}>tiff</span>,&nbsp;
                  <span style={{ color: "#c87941" }}>webp</span>&nbsp;and&nbsp;
                  <span style={{ color: "#c87941" }}>png</span>.
                </Typography>
                <div
                  {...getRootProps()}
                  style={{
                    textAlign: "center",
                    margin: "2rem 4rem 0 4rem",
                    padding: "40px 0",
                    borderRadius: "0.75rem",
                    cursor: "pointer",
                    backgroundColor: "#e1e5ea",
                  }}
                >
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
                  margin: "3rem 4rem 0 4rem",
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
