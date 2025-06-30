// 
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Components/Footer/Footer";
const values = [
  { number: 1, text: "Value-Driven in its approach" },
  { number: 2, text: "Ethical in all our dealings" },
  { number: 3, text: "Responsible in its engagement with people, focused on offering" },
  { number: 4, text: "Inclusive and sustainable finance" },
  { number: 5, text: "Transparent and Fair practices" },
  { number: 6, text: "Accessible to the underserved segment to make a meaningful contribution" },
  { number: 7, text: "Self-employed, Small Business segment of the society" },
];

function CircleBadge({ number }) {
  return (
    <div className="relative flex items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#D94D3A] via-[#FFD47E] to-[#D94D3A] shadow-md flex items-center justify-center z-10">
        <span className="text-white text-2xl md:text-3xl font-bold">{number}</span>
      </div>
      <div
        className="absolute top-1/2 left-full h-[1px] bg-gradient-to-r from-[#D94D3A] via-[#FFD47E] to-[#D94D3A]"
        style={{ width: 30, transform: "translateY(-50%) translateX(0)" }}
      />
      <div
        className="absolute top-1/2 left-full w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#D94D3A] via-[#FFD47E] to-[#D94D3A]"
        style={{ transform: "translateY(-50%) translateX(30px)" }}
      />
    </div>
  );
}

export default function Carousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-orange-400 rounded-full cursor-pointer " />
    ),
  };
  
  return (
    <div className="rounded-2xl  flex flex-col items-center justify-center bg-[#FFE2B7]   py-6 px-3">
    

      <div className="w-full max-w-6xl  ">
        <Slider {...settings}>
          {values.map((item) => (
            <div key={item.number} className="px-2 sm:px-4 mb-5 "> {/* spacing between cards */}
              <div className="flex md:flex-row flex-col items-center bg-white rounded-xl shadow-lg w-full h-35 px-4 md:px-8 py-6">
                <CircleBadge number={item.number} />
                <div className="ml-6 md:ml-16 text-gray-800 text-sm md:text-base font-medium text-left flex-1">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
   

  );
}
