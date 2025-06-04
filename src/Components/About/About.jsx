import React from 'react'
import './About.css'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
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
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
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

    const x = useTransform(scrollYProgress, [0, 1], ['140%', '-700%']);
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="relative">
            {/* Scroll-based progress bar */}
            <motion.div
                className="fixed top-0 left-0 h-2 w-full bg-gradient-to-r from-[#c9243f] to-[#f6a11d] z-[100]"
                style={{ scaleX, transformOrigin: "left" }}
            />

            {/* Company Overview Section Header */}
            {/* <div className="h-1 mt-10 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] relative"> 
                <div className="bg-[#c9243f] absolute top-1/2 transform -translate-y-1/2 left-4 sm:left-12 h-5 w-5 rounded-full"></div> 
                <div className="bg-[#c9243f] absolute top-1/2 transform -translate-y-1/2 left-12 sm:left-20 px-4 py-2 rounded-full"> 
                    <h1 className="text-white font-bold text-xl sm:text-2xl"> 
                        Company Overview 
                    </h1> 
                </div> 
            </div>  */}

            {/* Main About Section */}
            <div className="relative mt-10 w-full h-auto">
                {/* Background Image */}
                <div className="relative w-full h-[110vh] sm:h-[90vh] overflow-hidden"
                    style={{
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, black 20%, black 85%, transparent 100%)",
                        maskImage:
                            "linear-gradient(to bottom, transparent 0%, black 20%, black 85%, transparent 100%)",
                    }}
                >
                    {/* Background Image */}
                    <img
                        src="/home/about_us_img.png"
                        alt="About Us"
                        className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
                </div>


                {/* Text Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-20 py-12">
                    <h1 className="font-extrabold text-2xl sm:text-4xl text-[#c0bbb8] mb-4 pb-10">
                        About Veritas
                    </h1>

                    <h2 className="font-extrabold text-3xl sm:text-6xl mb-1 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit pb-2">
                        Enabling financial
                    </h2>
                    <h2 className="font-extrabold text-3xl sm:text-6xl mb-6 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit">
                        empowerment for decades
                    </h2>
                    <div>
                        <button
                            onClick={() => navigate('/at-a-glance')}
                            className="px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide text-black bg-white border border-gray-300 rounded-full shadow-lg transition duration-300 hover:bg-gradient-to-r from-[#c9243f] to-[#f6a11d] hover:text-white hover:-translate-y-1
                            mt-10"
                        >
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About