import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

function DeleteBadgeModal({ isOpen, onClose,onDeleteBadge }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="DeleteBadgeModale">
          <h1>Are You Sure?</h1>
          <p>You are abaout to delete this badge</p>
      </div>
      <button onClick={onDeleteBadge} className="btn btn-danger mr-3">Delete</button>
      <button onClick={onClose} className="btn btn-primary">Cancel</button>
    </Modal>
  );
}

export default DeleteBadgeModal;
