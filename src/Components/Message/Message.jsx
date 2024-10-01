import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
const Message = () => {
    const settings = {
        dots: true,
        customPaging: function (i) {
            return (
                <div className="custom-dot">
                    <div className="custom-dot-inner"></div>
                </div>
            );
        },
        dotsClass: "slick-dots2 custom-dots2",
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
            <h1 className='w-fit bg-gradient-to-r from-[#FF6C13] to-[#266EFE] text-transparent bg-clip-text pt-10 pb-2 mx-auto mt-5 text-3xl md:text-6xl font-semibold'>
                MD and CEO’s Message
            </h1>
            <h1 className='w-fit mx-auto mt-5 text-[#D9D9D9] text-2xl md:text-4xl font-semibold'>
                Crafting Sustainable Momentum
            </h1>

            <Slider {...settings}>
            <div className='md:!flex justify-start items-center my-5' >
                <div className='md:w-[39%]'>
                    <img src="./home/msg1.png" alt="" />
                </div>
                <div className='md:w-[56%]'>
                    <p className='md:text-xl md:w-[95%]'>
                    In FY 2023-24, Gulf Oil has accomplished significant growth, setting high standards for the industry as a whole in a volatile market landscape. We have recorded the highest-ever annual revenue and profit for FY 2023-24. Drawing confidence from our overall performance and cash flow generation, the board has declared a total record dividend ever for fiscal year 2024 at H36.00 per equity share.
                    </p>
                    <p className='mt-4 text-2xl text-[#F26323]'>Sanjay G. Hinduja</p>
                    <p>Chairman</p>
                </div>
            </div>
            <div className='md:!flex justify-start items-center my-5' >
                <div className='md:w-[39%]'>
                    <img src="./home/msg2.png" alt="" />
                </div>
                <div className='md:w-[56%]'>
                    <p className='md:text-xl md:w-[95%]'>
                    In FY 2023-24, Gulf Oil has accomplished significant growth, setting high standards for the industry as a whole in a volatile market landscape. We have recorded the highest-ever annual revenue and profit for FY 2023-24. Drawing confidence from our overall performance and cash flow generation, the board has declared a total record dividend ever for fiscal year 2024 at H36.00 per equity share.
                    </p>
                    <p className='mt-4 text-2xl text-[#F26323]'>Sanjay G. Hinduja</p>
                    <p>Chairman</p>
                </div>
            </div>
                </Slider>
        </div>
    )
}

export default Message