// import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";

// const Message = () => {
//     const navigate = useNavigate();
//     const containerVariant = {
//         hidden: {},
//         visible: {
//             transition: {
//                 staggerChildren: 0.05,
//             },
//         },
//     };

//     const letterVariant = {
//         hidden: { opacity: 0, y: 10 },
//         visible: { opacity: 1, y: 0 },
//     };
//     const settings = {
//         dots: true,
//         customPaging: function (i) {
//             return (
//                 <div className="custom-dot">
//                     <div className="custom-dot-inner"></div>
//                 </div>
//             );
//         },
//         dotsClass: "slick-dots2 custom-dots2",
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className='marginal'>
//             <motion.h1
//                 className='w-fit bg-gradient-to-r from-[#c9243f] to-[#f6a11d] text-transparent bg-clip-text pt-10 pb-2 mb-10 mx-auto mt-5 text-3xl md:text-6xl font-semibold flex flex-wrap'
//                 variants={containerVariant}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.5 }}
//             >
//                 {"Management's Message".split("").map((char, index) => (
//                     <motion.span key={index} variants={letterVariant}>
//                         {char === " " ? "\u00A0" : char}
//                     </motion.span>
//                 ))}
//             </motion.h1>

//             <Slider {...settings}>
//                 {/* Slide 1 */}
//                 <div className='md:!flex justify-start items-center my-5'>
//                     <div className="md:w-[26%] relative">
//                         <div className="bg-white rounded-t-xl overflow-hidden pr-4 pt-2 bg-gradient-to-tl from-gray-300 to-transparent">
//                             <img src="/home/Raj.webp" alt="Raj" className="w-full" />
//                         </div>
//                         <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#c9243f] to-[#f6a11d] rounded-b-xl"></div>
//                     </div>
//                     <div className='md:w-[56%] pl-10'>
//                         <p className='md:text-xl md:w-[95%]'>
//                             At Veritas, we are building for the long term. Our strategic priorities are anchored in the balance between scale and control, growth and governance and innovation and stability. We are focused on broadening our product portfolio, deepening our distribution reach and strengthening our institutional capabilities in a way that allows us to stay agile in a dynamic environment.
//                         </p>
//                         <p className='mt-4 text-2xl w-fit bg-gradient-to-r from-[#c9243f] to-[#f6a11d] text-transparent bg-clip-text'>Raj Vikash Verma</p>
//                         <p>Chairman</p>

//                         {/* Button */}
//                         <button
//                             onClick={() => navigate('/corporate-overview/chairmans-message')}
//                             className="px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide text-black bg-white border border-gray-300 rounded-xl shadow-lg transition duration-300 hover:bg-gradient-to-r from-[#c9243f] to-[#f6a11d] hover:text-white hover:-translate-y-1 mt-10"
//                         >
//                             Know More
//                         </button>
//                     </div>
//                 </div>

//                 {/* Slide 2 */}
//                 <div className='md:!flex justify-start items-center my-5'>
//                     <div className="md:w-[26%] relative">
//                         <div className="bg-white rounded-t-xl overflow-hidden pr-4 pt-2 bg-gradient-to-tl from-gray-300 to-transparent">
//                             <img src="/home/Arul.webp" alt="Arul" className="w-full" />
//                         </div>
//                         <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#c9243f] to-[#f6a11d] rounded-b-xl"></div>
//                     </div>
//                     <div className='md:w-[56%] pl-10'>
//                         <p className='md:text-xl md:w-[95%]'>
//                             Veritas Finance delivered a strong and broad-based performance across key operational and financial indicators. Our Assets Under Management (AUM) grew by 28.39% to INR 7,349 crore, driven by disbursements of 3,933 crore, a 6.23% increase from the previous year.
//                         </p>
//                         <p className='mt-4 text-2xl w-fit bg-gradient-to-r from-[#c9243f] to-[#f6a11d] text-transparent bg-clip-text'>D. Arulmany</p>
//                         <p>MD & CEO</p>

//                         {/* Button */}
//                         <button
//                             onClick={() => navigate('/corporate-overview/managing-director-ceo-message')}
//                             className="px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide text-black bg-white border border-gray-300 rounded-xl shadow-lg transition duration-300 hover:bg-gradient-to-r from-[#c9243f] to-[#f6a11d] hover:text-white hover:-translate-y-1 mt-10"
//                         >
//                             Know More
//                         </button>
//                     </div>
//                 </div>
//             </Slider>
//         </div>
//     )
// }

// export default Message
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/home/Raj.webp",
    title: "Raj Vikash Verma",
    desg: "Chairman and Non-Executive Independent Director",
    description:
      "Our strategic priorities are anchored in the balance between scale and control, growth and governance and innovation and stability. We are focused on broadening our product portfolio, deepening our distribution reach and strengthening our institutional capabilities in a way that allows us to stay agile in a dynamic environment.",
    link: "/corporate-overview/chairmans-message",
    head: "Chairman's Message"
  },
  {
    image: "/home/Arul.webp",
    title: "D. Arulmany",
    desg: "Managing Director and CEO",
    description:
      "Our Loan book grew by 28.39% to INR 7,349 Crores, driven by disbursements of INR 3,933 Crores.",
    link: "/corporate-overview/managing-director-ceo-message",
    head: "MD & CEO's Message"
  },
];

const Message = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-16">
      <motion.h1
        className="text-left text-2xl md:text-4xl font-bold mb-8 text-[#c9243f]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {slides[currentIndex].head}
      </motion.h1>

      <div className="flex flex-col md:flex-row bg-white  rounded-3xl overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="md:w-[30%] w-full  flex items-end justify-center pb-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[currentIndex].image}
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="object-contain w-full "
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="md:w-[70%] w-full p-8 flex flex-col justify-between bg-gradient-to-r from-[#b83445] to-orange-400 text-white">
          <div className="relative">
            <div className="text-6xl font-extrabold text-yellow-400 mb-4">“</div>
            <p className="text-base md:text-lg leading-relaxed">
              {slides[currentIndex].description}
            </p>
            <div className="text-6xl font-extrabold text-yellow-400 text-right mt-4">”</div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold text-white">
              {slides[currentIndex].title}
            </h2>
            <p className="text-white font-medium text-sm">
              {slides[currentIndex].desg}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="px-4 py-2 rounded-full border border-[#c9243f] text-[#c9243f] hover:bg-[#c9243f] hover:text-white transition"
        >
          ‹
        </button>
        <button
          onClick={() => navigate(slides[currentIndex].link)}
          className="px-6 py-2 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] text-white rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Know More
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 rounded-full border border-[#c9243f] text-[#c9243f] hover:bg-[#c9243f] hover:text-white transition"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Message;
