import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
const Customers = () => {
    const settings = {
        dots: true,
        customPaging: function (i) {
            return (
                <div className="custom-dot">
                    <div className="custom-dot-inner"></div>
                </div>
            );
        },
        dotsClass: "slick-dots2 custom-dots3",
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,  // Enable fade transition
        cssEase: 'linear',  // Ensure smooth fade transition
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
                <div className='my-5' >
                    <img src="./home/rider1.png" alt="" />
                </div>
                <div className='my-5' >
                    <img src="./home/rider2.png" alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Customers