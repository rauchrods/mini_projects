import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

function QrCodeGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  function setInputValueHandler(e) {
    setInputValue(e.target.value);
  }

  function generateQRCode() {
    setQrCodeValue(inputValue.trim());
    setInputValue("");
  }

  return (
    <div className="qr_code_container">
      <h1>Qr Code Generator</h1>
      <div className="controls">
        <input
          type="text"
          onChange={setInputValueHandler}
          value={inputValue}
          placeholder="enter the url to generate QR code"
        />
        <button
          onClick={generateQRCode}
          disabled={inputValue === "" ? true : false}
        >
          Generate
        </button>
      </div>

      <QRCode value={qrCodeValue} />
      <div className="status">
        {qrCodeValue !== "" && <p>QR Code Generated Succesfully</p>}
      </div>
    </div>
  );
}

export default QrCodeGenerator;
