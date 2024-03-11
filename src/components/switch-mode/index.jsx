import React from "react";
import "./styles.css";
import useLocalStorage from "./useLocalStorage";

function SwitchMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  // console.log(theme);
  return (
    <div className={`switchMode-container ${theme}-mode`}>
      <div className="container">
        <p>Helo World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default SwitchMode;
