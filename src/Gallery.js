import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";
import img1 from "./Images/20240226_081146.jpg";
import img2 from "./Images/TimePhoto_20240222_121352.jpg";
import img3 from "./Images/IMG_7741.JPG";
import img4 from "./Images/TimePhoto_20240223_160032.jpg";
import img5 from "./Images/20240221_124242.jpg";
import img6 from "./Images/20240222_113602.jpg";
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";

const galleryData = {
  2024: [
    { img: img1, event: "GRAM SAMPARK" },
    { img: img2, event: "DRISHTIKON" },
    { img: img3, event: "CHAKRVYUH" },
    { img: img4, event: "PRAYAS" },
    { img: img5, event: "JUNOON" },
    { img: img6, event: "NAYA SUMMIT" },
  ]
};

const Gallery = () => {
  const [yearIndices, setYearIndices] = useState({});
  const years = Object.keys(galleryData).sort((a, b) => b - a);
  const navigate = useNavigate();
  const intervalRefs = useRef({}); // Store multiple intervals

  // Function to move to the next image for a specific year
  const handleNext = (year) => {
    setYearIndices((prev) => ({
      ...prev,
      [year]: (prev[year] === undefined ? 0 : prev[year] + 1) % galleryData[year].length,
    }));
  };

  // Function to move to the previous image for a specific year
  const handlePrev = (year) => {
    setYearIndices((prev) => ({
      ...prev,
      [year]: (prev[year] === undefined ? galleryData[year].length - 1 : prev[year] - 1 + galleryData[year].length) % galleryData[year].length,
    }));
  };

  // Function to reset auto-slide for a specific year
  const resetAutoSlide = (year) => {
    if (intervalRefs.current[year]) {
      clearInterval(intervalRefs.current[year]);
    }
    intervalRefs.current[year] = setInterval(() => handleNext(year), 3000);
  };

  // Auto-slide effect for all years
  useEffect(() => {
    years.forEach((year) => {
      intervalRefs.current[year] = setInterval(() => handleNext(year), 3000);
    });

    return () => {
      years.forEach((year) => clearInterval(intervalRefs.current[year]));
    };
  }, [years]);

  // Function to handle navigation with formatted event names (e.g., lowercased with dashes)
  const handleNavigate = (year, eventName) => {
    const formattedEventName = eventName.toLowerCase().replace(/\s+/g, '_'); // Convert to lowercase and replace spaces with dashes
    navigate(`/full-gallery/${year}/${formattedEventName}`);
  };

  return (
    <div>
      <div className="gallery-container">
        <div className="gallery-title">
          <h2>Gallery</h2>
          <div className="pink-underline"></div>
        </div>
        {years.map((year) => (
          <div key={year} className="gallery-year-section">
            <div className="gallery-year-heading">{year}</div>
            <div className="gallery-carousel">
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={() => { handlePrev(year); resetAutoSlide(year); }}
              >
                ❮
              </button>

              {/* Navigate to the event page dynamically */}
              <div 
                className="gallery-image-container" 
                onClick={() => handleNavigate(year, galleryData[year][yearIndices[year] || 0].event)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={galleryData[year][yearIndices[year] || 0].img}
                  alt={`Gallery ${year}`}
                  className="gallery-image"
                />
                <div className="event-name-overlay">
                  {galleryData[year][yearIndices[year] || 0].event.toUpperCase()}
                </div>
              </div>

              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={() => { handleNext(year); resetAutoSlide(year); }}
              >
                ❯
              </button>
            </div>
            <div className="carousel-dots">
              {galleryData[year].map((_, index) => (
                <span
                  key={index}
                  className={`dot ${yearIndices[year] === index ? "active" : ""}`}
                  onClick={() => { setYearIndices({ ...yearIndices, [year]: index }); resetAutoSlide(year); }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <NSSFooter />
    </div>
  );
};

export default Gallery;