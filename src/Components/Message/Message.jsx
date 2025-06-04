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
            <h1 className='w-fit bg-gradient-to-r from-[#c9243f] to-[#f6a11d] text-transparent bg-clip-text pt-10 pb-2 mx-auto mt-5 text-3xl md:text-6xl font-semibold'>
                Management's Message
            </h1>
            {/* <h1 className='w-fit mx-auto mt-5 text-[#D9D9D9] text-2xl md:text-4xl font-semibold'>
                Crafting Sustainable Momentum
            </h1> */}

            <Slider {...settings}>
                <div className='md:!flex justify-start items-center my-5' >
                    <div className='md:w-[39%]'>
                        <img src="./home/msg1.png" alt="" />
                    </div>
                    <div className='md:w-[56%]'>
                        <p className='md:text-xl md:w-[95%]'>
                            At Veritas, we are building for
                            the long term. Our strategic
                            priorities are anchored in
                            the balance between scale
                            and control, growth and
                            governance and innovation
                            and stability. We are focused
                            on broadening our product
                            portfolio, deepening our
                            distribution reach and
                            strengthening our institutional
                            capabilities in a way that
                            allows us to stay agile in a
                            dynamic environment.
                        </p>
                        <p className='mt-4 text-2xl w-fit bg-gradient-to-r from-[#c9243f] to-[#f6a11d] text-transparent bg-clip-text'>Raj Vikash Verma</p>
                        <p>Chairman</p>
                    </div>
                </div>
                <div className='md:!flex justify-start items-center my-5' >
                    <div className='md:w-[39%]'>
                        <img src="./home/msg2.png" alt="" />
                    </div>
                    <div className='md:w-[56%]'>
                        <p className='md:text-xl md:w-[95%]'>
                            Veritas Finance delivered
                            a strong and broad-based
                            performance across key
                            operational and financial
                            indicators. Our Assets
                            Under Management
                            (AUM) grew by 28.39% to
                            INR 7,349 crore, driven by
                            disbursements of 3,933
                            crore, a 6.23% increase
                            from the previous year.
                        </p>
                        <p className='mt-4 text-2xl w-fit bg-gradient-to-r from-[#c9243f] to-[#f6a11d] text-transparent bg-clip-text'>D. Arulmany</p>
                        <p>MD & CEO</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Message