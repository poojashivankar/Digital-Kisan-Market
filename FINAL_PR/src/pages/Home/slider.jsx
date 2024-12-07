import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // You can set arrows to false if you don't want them
  };

  const slides = [
    { 
      id: 1, 
      image: "/main-slider-v2-1.jpg", 
      title: "Agriculture & Organic Product"
    },
    { 
      id: 2, 
      image: "/main-slider-v2-2.jpg", 
      title: "Agriculture & Organic Product"
    },
    { 
      id: 3, 
      image: "/main-slider-v2-3.jpg", 
      title: "Agriculture & Organic Product"
    },
  ];

  return (
    <div className="w-full h-full mx-auto home_slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 py-2 bg-black bg-opacity-50 rounded-md">
              <h2 className="font-bold slider-heading">{slide.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
