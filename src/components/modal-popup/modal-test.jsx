import React, { useState } from "react";
import ModalPopup from "./modal";
import "./styles.css";

function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  function handleModalPopup() {
    setShowModal((prevState) => !prevState);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="modal-button-container">
      <button onClick={handleModalPopup}>Open Modal Popup</button>
      {showModal && (
        <ModalPopup onClick={closeModalHandler} header="this is heading" body="this is body example"/>
      )}
    </div>
  );
}

export default ModalTest;
