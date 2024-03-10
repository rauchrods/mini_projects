import React, { useEffect, useState } from "react";
import "./styles.css";

function ScrollIndicator() {
  const [scrollStatus, setScrollStatus] = useState(0);

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    setScrollStatus(
      ((document.documentElement.scrollTop +
        document.documentElement.clientHeight) *
        100) /
        document.documentElement.scrollHeight
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="scroll-indicator" style={{ width: `${scrollStatus}%` }}>
      {Math.floor(scrollStatus)} %
    </div>
  );
}

export default ScrollIndicator;
