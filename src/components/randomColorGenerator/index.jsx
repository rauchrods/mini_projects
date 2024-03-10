import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function RandomGenerator() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateRandomColor = () => {
    if (typeofColor === "hex") {
      const hexarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";

      for (let i = 1; i <= 6; i++) {
        hexColor = hexColor + hexarr[Math.floor(Math.random() * hexarr.length)];
      }

      setColor(hexColor);
    } else {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);

      const rgbColor = `rgb(${r},${g},${b})`;
      setColor(rgbColor);
    }
  };

  useEffect(() => {
    handleCreateRandomColor();
  }, [typeofColor]);

//   console.log(typeofColor);
//   console.log(color);

  return (
    <div
      style={{
        background: color,
      }}
      className={styles.color_generator}
    >
      <div>
        <button onClick={() => setTypeofColor("hex")}>Create HEX color</button>
        <button onClick={() => setTypeofColor("rgb")}>Create RGB Color</button>
        <button onClick={handleCreateRandomColor}>Generate Random Color</button>
      </div>

      <div className={styles.display_color}>{color}</div>
    </div>
  );
}

export default RandomGenerator;
