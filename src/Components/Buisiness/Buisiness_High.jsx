import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import AnimatedCounter from "../common/AnimatedCounter"; // import your counter
import { motion } from "framer-motion";

const Buisiness_High = () => {
  const allItems = [
    { value: "1557.40", label: "Total Revenue", showCrores: true },
    { value: "292.19", label: "Profit After Tax (PAT)", showCrores: true },
    { value: "7348.64", label: "Loan Assets Under Management (AUM)", showCrores: true },
    { value: "11.43", label: "Return on Equity (%)" },
    { value: "438", label: "Branch Network" },
    { value: "7796", label: "Employees" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div className="custom-dots">
        <ul className="slick-dots2 custom-dots2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="custom-dot">
        <div className="custom-dot-inner"></div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="marginal">
      {/* Header */}
      <div className="z-20 flex flex-col justify-center py-12">
        <h1 className="font-extrabold text-2xl sm:text-4xl text-[#3c3a39] mb-4">
          Business Highlights
        </h1>
        <h2 className="font-extrabold text-3xl sm:text-5xl mb-1 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit">
          Numbers that reflect
        </h2>
        <h2 className="font-extrabold text-3xl sm:text-5xl mb-6 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit">
          impressive performance
        </h2>
        <div className="text-2xl">
          <h2>
            We offer an array of loans targeting different income groups to accelerate
          </h2>
          <h2>
            financial inclusion and bring more people into the economic mainstream.
          </h2>
        </div>
      </div>

      {/* Carousel - left aligned */}
      <div className="relative">
        <Slider {...settings}>
          {allItems.map((item, i) => {
            const isCentered = item.label === "Return on Equity (%)";
            return (
              <div key={i}>
                <div className={`${isCentered ? "text-center" : "text-left"} w-full`}>

                  {/* Animated number with underline */}
                  <div className={`font-extrabold text-3xl sm:text-5xl pb-2 w-fit relative ${isCentered ? "mx-auto" : ""}`}>
                    <AnimatedCounter
                      value={parseFloat(item.value)}
                      prefix={item.showCrores ? "INR" : ""}
                      suffix={item.showCrores ? "Crores" : ""}
                    />
                    <motion.div
                      className="h-1 bg-red-500 absolute bottom-0 left-0"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    />
                  </div>

                  {/* Label - now also centered if needed */}
                  <div className={`text-[#6c6d70] text-2xl mt-2 ${isCentered ? "text-center" : ""}`}>
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}

        </Slider>
      </div>
    </div>
  );
};

export default Buisiness_High;
