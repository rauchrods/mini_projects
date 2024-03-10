import React, { useState } from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    setHover(0);
  }

  return (
    <div className="star_rating">
      <h1>Star Rating</h1>
      <div>
        {[...Array(noOfStars)].map((_, index) => (
          <FaStar
            key={index}
            onMouseMove={() => handleMouseEnter(index + 1)}
            onClick={() => handleClick(index + 1)}
            onMouseLeave={() => handleMouseLeave(index + 1)}
            style={{
              color: index < hover || index < rating ? "gold" : "black",
            }}
          />
        ))}
      </div>
      <h2>{rating}/{noOfStars}</h2>
    </div>
  );
}

export default StarRating;
