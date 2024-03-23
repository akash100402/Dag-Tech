import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";


const BannerSlide = () => {
  const settings = {
    infinite: true,
    clickToSlide: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
  };

  // Define a CSS class for the images with fixed dimensions


  return (
    <div className="w-10/12 mx-auto mt-10 md:w-8/12" id="banner">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
        <div>
          <img src={image4} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlide;
