import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

function ImageSlider({ url, limit = 30, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImages() {
    try {
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url, limit, page]);



  function rightImageHandler() {
    setCurrentSlide((prevState) => {
      if (prevState === images.length - 1) {
        return 0;
      }
      return prevState + 1;
    });
  }

  function leftImageHandler() {
    setCurrentSlide((prevState) => {
      if (prevState === 0) {
        return images.length - 1;
      }
      return prevState - 1;
    });
  }

  function setCurrentIndicator(currIndex) {
    setCurrentSlide(currIndex);
  }

  return (
    <div className="image-slider-container-main">
      <h1>Image Slider</h1>
      <div className="image-slider-container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={leftImageHandler}
        />
        {images.length > 0 &&
          images.map((image, index) => (
            <img
              src={image.download_url}
              alt={image.author}
              key={image.id}
              className={
                currentSlide === index ? "current-image" : "hide-image"
              }
            />
          ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={rightImageHandler}
        />
        <span className="circle-indicator">
          {images.length > 0 &&
            images.map((image, index) => (
              <button
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "suppress-indicator"
                }
                key={image.id}
                onClick={() => setCurrentIndicator(index)}
              ></button>
            ))}
        </span>
      </div>
    </div>
  );
}

export default ImageSlider;
