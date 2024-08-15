import React from 'react'
import { FaRegStar, FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from "react-icons/fa";

const ImageSection = ({currentIndex, images, prevImage, nextImage, setCurrentIndex}) => {
  return (
       <div className="slider-container">
  <img src={images[currentIndex]} alt="slide" className="product-main-image" />
  <div className='image-slider'>
    <button className="image-button" onClick={prevImage}>
      <FaChevronLeft />
    </button>
    <div className='slider-image'>
      {
        images.map((image, index) => (
          <img 
            key={index} 
            className={`small-image ${index === currentIndex ? 'current-image' : ''}`} 
            src={image} 
            alt="slide" 
            onClick={() => setCurrentIndex(index)}
          />
        ))
      }
    </div>
    <button className="image-button" onClick={nextImage}>
      <FaChevronRight />
       </button>
      </div>
      </div>
  )
}

export default ImageSection
