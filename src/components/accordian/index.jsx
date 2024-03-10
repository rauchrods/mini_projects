import React, { useState } from "react";
import data from "./data,";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleDingleSelection(currentId) {
    setMultiple([]);
    if (selected === currentId) {
      setSelected(null);
    } else {
      setSelected(currentId);
    }
  }

  function handleMultiSelection(currentId) {
    setSelected(null);
    if (multiple.includes(currentId)) {
      let newarr = [...multiple];
      newarr.splice(newarr.indexOf(currentId), 1);
      setMultiple(newarr);
    } else {
      setMultiple([...multiple, currentId]);
    }
  }

  // console.log(multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "Enable Single Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="accordian-item" key={dataitem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataitem.id)
                    : () => handleDingleSelection(dataitem.id)
                }
              >
                <h3>{dataitem.question}</h3>
                <span>{selected === dataitem.id ? "-" : "+"}</span>
              </div>

              {(selected === dataitem.id || multiple.includes(dataitem.id)) && (
                <div className="content">{dataitem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
