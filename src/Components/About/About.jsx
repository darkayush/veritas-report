import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation, useMotionValueEvent } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BlurText from '../common/BlurText';

const About = () => {
    const navigate = useNavigate();
    const { scrollYProgress, scrollY } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Scroll direction detection
    const [scrollDirection, setScrollDirection] = useState('down');
    const prevScroll = useRef(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > prevScroll.current) {
            setScrollDirection('down');
        } else if (latest < prevScroll.current) {
            setScrollDirection('up');
        }
        prevScroll.current = latest;
    });

    // Company Overview Animation
    const companyRef = useRef(null);
    const isInView = useInView(companyRef, { once: true, margin: '-100px' });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: "tween",
                    duration: 0.6,
                    ease: "easeOut",
                },
            });
        }
    }, [isInView, controls]);

    return (
        <div className="relative">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-2 w-full bg-gradient-to-r from-[#c9243f] to-[#f6a11d] z-[100]"
                style={{ scaleX, transformOrigin: "left" }}
            />

            {/* Company Overview Heading */}
            <div className="relative mt-10">
                {/* Animate line width from 0 to 100% */}
                <motion.div
                    className="h-1 bg-gradient-to-r from-[#c9243f] to-[#f6a11d]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                <motion.div
                    ref={companyRef}
                    initial={{
                        x: scrollDirection === 'down' ? -1000 : 1000,
                        opacity: 0,
                    }}
                    animate={controls}
                    className="flex justify-center -mt-5"
                >
                    <div className="bg-gradient-to-r from-[#c9243f] to-[#f6a11d] px-4 py-2 rounded-full shadow-md">
                        <h1 className="text-white font-bold text-[13px] sm:text-2xl">
                            Company Overview
                        </h1>
                    </div>
                </motion.div>
            </div>

            {/* Main About Section */}
            <div className="relative mt-10 w-full h-auto">
                <img
                    src="/home/about_us_img.png"
                    alt="About Us"
                    className="w-full h-[110vh] sm:h-[90vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>

                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-20 py-12">
                    <h1 className="font-extrabold text-2xl sm:text-4xl text-[#c0bbb8] mb-4 pb-10">
                        About Veritas
                    </h1>

                    {/* BlurText with animated gradient letters */}
                    <BlurText text="Enabling financial" className="text-5xl sm:text-6xl font-extrabold leading-tight" />
                    <BlurText text="empowerment for decades" className="text-5xl sm:text-6xl font-extrabold leading-tight" />


                    <div>
                        <button
                            onClick={() => navigate('/corporate-overview/more-about-veritas')}
                            className="px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide text-black bg-white border border-gray-300 rounded-xl shadow-lg transition duration-300 hover:bg-gradient-to-r from-[#c9243f] to-[#f6a11d] hover:text-white hover:-translate-y-1 mt-10"
                        >
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
