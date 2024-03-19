import React, { useState } from 'react';
import FirstImage from './Productsimages/Images/Slider/1.jpg';
import SecondImage from './Productsimages/Images/Slider/2.jpg';
import ThirdImage from './Productsimages/Images/Slider/3.jpg';
import FourthImage from './Productsimages/Images/Slider/4.jpg';

function Carrousel() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevClick = (event) => {
    event.preventDefault();
    const prevSlide = currentSlide === 1 ? 4 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="carousel w-full h-full">
      <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
        <img src={FirstImage} alt="First" className="w-full h-full brightness-50" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle" onClick={handlePrevClick}>❮</a> 
          <a href="#slide2" className="btn btn-circle" onClick={handleNextClick}>❯</a>
        </div>
      </div> 
      <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
        <img src={SecondImage} alt="Second" className="w-full h-full brightness-50" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle" onClick={handlePrevClick}>❮</a> 
          <a href="#slide3" className="btn btn-circle" onClick={handleNextClick}>❯</a>
        </div>
      </div> 
      <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
        <img src={ThirdImage} alt="Third" className="w-full h-full brightness-50" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle" onClick={handlePrevClick}>❮</a> 
          <a href="#slide4" className="btn btn-circle" onClick={handleNextClick}>❯</a>
        </div>
      </div> 
      <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
        <img src={FourthImage} alt="Fourth" className="w-full h-full brightness-50" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle" onClick={handlePrevClick}>❮</a> 
          <a href="#slide1" className="btn btn-circle" onClick={handleNextClick}>❯</a>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;







