import React from "react";
import "../styles/modal.css";

function Modal({ isOpen, onClose, dark, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${dark ? "dark" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
