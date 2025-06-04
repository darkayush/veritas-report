import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";

const BodSlider = () => {
  const settings = {
    dots: true,
    customPaging: function (i) {
        return (
            <div className="custom-dot">
                <div className="custom-dot-inner"></div>
            </div>
        );
    },
    dotsClass: "slick-dots custom-dots",    
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
  return (
    <div className='marginal'>
        <div className="inset-0 z-20 flex flex-col justify-center px-6 sm:px-20 py-12">
          <h1 className="font-extrabold text-2xl sm:text-4xl text-[#11111] mb-4">
          Board of Directors
          </h1>
          <h2 className="font-extrabold text-3xl sm:text-6xl mb-1 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit pb-2">
          Leading with experience and expertise
          </h2>
        </div>
            <Slider {...settings}>
                <div className='my-5'>
                    <img src="./home/bod1.png" className='w-[90%] m-auto' alt="" />
                </div>
                <div className='my-5'>
                    <img src="./home/bod2.png" className='w-[90%] m-auto' alt="" />
                </div>
                <div className='my-5'>
                    <img src="./home/bod3.png" className='w-[90%] m-auto' alt="" />
                </div>
                <div className='my-5'>
                    <img src="./home/bod4.png" className='w-[90%] m-auto' alt="" />
                </div>
                <div className='my-5'>
                    <img src="./home/bod5.png" className='w-[90%] m-auto' alt="" />
                </div>
                <div className='my-5'>
                    <img src="./home/bod6.png" className='w-[90%] m-auto' alt="" />
                </div>
            </Slider>
    </div>
  )
}

export default BodSlider