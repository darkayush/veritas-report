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
        <h1 className='w-fit bg-gradient-to-r from-[#FF6C13] to-[#266EFE] text-transparent bg-clip-text pt-10 pb-2 mx-auto mt-5 text-3xl md:text-6xl font-semibold'>
        Board of Directors
            </h1>
            <h1 className='w-fit mx-auto mt-5 text-[#D9D9D9] text-2xl md:text-4xl font-semibold'>
            Fostering Shared Success
            </h1>
            <p className=' md:w-[50%] m-auto text-center my-5'>
            Our esteemed Board of Directors at Gulf Oil provides strategic guidance, driving our corporate vision, governance excellence, and continued success for all our key imperatives.
            </p>
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