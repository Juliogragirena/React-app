import React from "react";
import ReactDOM from "react-dom";
import "../components/styles/Modal.css"

function Modal({ isOpen , children, onClose}) {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      {ReactDOM.createPortal(
        <div className="Modal">
          <div className="Modal__container">
            <buttom onClick={onClose} className="Modal__close-button">X</buttom>
            {children}
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </div>
  );
}

export default Modal;
