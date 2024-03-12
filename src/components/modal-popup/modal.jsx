import React from "react";

function ModalPopup({
  id,
  header = "Header",
  body = "body",
  footer = "footer",
  onClick
}) {
  return (
    <div className="modal_container" id={id}>
      <div className="content">
        <div className="header">
          <h2>{header}</h2>
          <span className="close-modal-icon" onClick={onClick}>&times;</span>
        </div>
        <div className="body">
          <p>{body}</p>
        </div>
        <div className="footer">
          <h3>{footer}</h3>
        </div>
      </div>
    </div>
  );
}

export default ModalPopup;
