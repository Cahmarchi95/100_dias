import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const BACKGROUND_STYLE = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgb(0,0,0,0.7)",
  zIndex: "1000",
};

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  padding: "150px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  color: "black",
};

export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div>{children}</div>
          <button
            style={{
              fontSize: "2rem",
              color: "red",
              position: "fixed",
              top: "5%",
              right: "5%",
            }}
            onClick={setModalOpen}
          >
            <FontAwesomeIcon icon={faWindowClose} />
          </button>
        </div>
      </div>
    );
  }
  return null;
}
