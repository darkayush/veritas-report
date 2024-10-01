import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
const CsrEsg = () => {
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
        slidesToShow: 1,
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
            <Slider {...settings}>
                <div className='my-5'>
                    <img src="./home/csr.png" className='w-[90%] m-auto' alt="" />
                </div>
                <div className='my-5'>
                    <img src="./home/esg.png" className='w-[90%] m-auto' alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default CsrEsg