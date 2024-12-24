/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import carousalPhoto01 from "../../Images/photo.jpg";
import carousalPhoto02 from "../../Images/photo2.jpg";
import carousalPhoto03 from "../../Images/photo3.jpg";
import carousalPhoto04 from "../../Images/photo4.jpg";
import carousalPhoto05 from "../../Images/photo5.jpg";
import "./Carousel.css";

function Carousel() {
  const photos = [
    carousalPhoto01,
    carousalPhoto02,
    carousalPhoto03,
    carousalPhoto04,
    carousalPhoto05,
  ];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="carousel-container">
      <img
        src={photos[currentPhotoIndex]}
        alt="carouselPhoto"
        className="carousel-photo"
      />

      <div className="carousel-dots">
        {photos.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentPhotoIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
