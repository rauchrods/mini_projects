import React from "react";
import Tabs from "./tabs";
import './tabs.css';

function Tabtest() {
  const tabs = [
    {
      label: "Tab-1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab-2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab-3",
      content: <div>This is content for Tab 3</div>,
    },
  ];

  function logcurrentIndex(index) {
    // console.log(index);
  }

  return <Tabs tabContent={tabs} onChange={logcurrentIndex} />;
}

export default Tabtest;
