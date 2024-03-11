import React, { useState } from "react";

function Tabs({ tabContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function switchTabContent(index) {
    setCurrentTabIndex(index);
    onChange(index);
  }

  return (
    <div className="tab-wrapper">
      <div className="tab-heading">
        {tabContent.map((tabItem, index) => (
          <div
            key={tabItem.label}
            onClick={() => switchTabContent(index)}
            className={currentTabIndex === index ? `active-tab` : ""}
          >
            <span className="tab-label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
