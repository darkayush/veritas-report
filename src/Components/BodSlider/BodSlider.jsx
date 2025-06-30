// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick-theme.css";

// const boardMembers = [
//   {
//     name: "Raj Vikash Verma",
//     role: "Chairman and Non-executive Independent Director",
//     image: "/home/Raj.webp",
//   },
//   {
//     name: "D. Arulmany",
//     role: "Managing Director and CEO",
//     image: "/home/Arul.webp",
//   },
//   {
//     name: "Suresh Subramanian",
//     role: "Non-executive Independent Director",
//     image: "/home/Suresh.webp",
//   },
//   {
//     name: "Mathew Joseph",
//     role: "Non-executive Independent Director",
//     image: "/home/Mathew-Joseph.png",
//   },
//   {
//     name: "Dr. Susan Thomas",
//     role: "Independent Director",
//     image: "/home/Dr.-Susan-Thomas.png",
//   },
//   {
//     name: "Sankarson Banerjee",
//     role: "Non-executive Independent Director",
//     image: "/home/Sankarson-Banerjee.png",
//   },
//   {
//     name: "Priyamvada Ramkumar",
//     role: "Non-Executive Nominee Director and Lok Capital Growth Fund",
//     image: "/home/Priyamvada-Ramkumar.png",
//   },
//   {
//     name: "Parin Mehta",
//     role: "Non-executive Nominee Director, Kedaara Capital Fund II LLP",
//     image: "/home/Parin-Mehta.png",
//   },
//   {
//     name: "Sudhir Narayanankutty Variyar",
//     role: "Non-executive Nominee Director, Multiples Private Equity Fund III",
//     image: "/home/Sudhir-Narayanankutty-Variyar.png",
//   }
// ];

// const BodSlider = () => {
//   const settings = {
//     dots: true,
//     customPaging: function (i) {
//       return (
//         <div className="custom-dot ">
//           <div className="custom-dot-inner"></div>
//         </div>
//       );
//     },
//     dotsClass: "slick-dots custom-dots !bottom-[-32px]",
//     infinite: true,
//     speed: 700,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="marginal">
//       <div className="inset-0 z-20 flex flex-col justify-center mb-6">
//         <h1 className="font-extrabold text-2xl sm:text-4xl text-[#3c3a39] mb-4">
//         Board of Directors
//         </h1>
//         <div className="flex flex-row">
//           <h2 className="font-extrabold text-3xl sm:text-5xl mb-1 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit pb-5">
//           Leading with experience and expertise
//           </h2>
//         </div>
//       </div>

//       <Slider {...settings}>
//         {boardMembers.map((member, index) => (
//           <div key={index} className="h-[380px] px-3">
//             <div className="h-full bg-gradient-to-r from-[#c9243f] to-[#f6a11d] p-[1px] rounded-2xl">
//               <div className="bg-[#fef8f1] h-full rounded-2xl overflow-hidden flex flex-col justify-start">

//                 {/* Image */}
//                 <div className="h-[290px] overflow-hidden rounded-t-2xl">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover object-top"
//                   />
//                 </div>

//                 {/* Name & Role Section */}
//                 <div className="flex-grow p-[1px] bg-gradient-to-r from-[#c9243f] to-[#f6a11d] rounded-b-2xl">
//                   <div className="bg-white h-full rounded-b-2xl flex flex-col justify-center items-center text-center px-3 py-3 text-black">
//                     <p className="text-sm sm:text-base font-bold">{member.name}</p>
//                     <p className="text-xs sm:text-sm">{member.role}</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default BodSlider;
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import KnowMore from "./KnowMore";
import {Link} from 'react-router-dom';
import { div } from "framer-motion/client";
// Example data


// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-[150%]  bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-800" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-[-50%]  bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-800" />
  </button>
);
const KnowMore = ({ link, isGradient = false }) => {
  return (
    <div
      className={` ${
        isGradient
          ? 'bg-gradient-to-r from-[#c9243f] to-[#f6a11d] p-[2px] rounded-3xl w-fit h-auto'
          : 'bg-transparent w-fit h-auto'
      }`}
    >
      <div
        className="bg-white flex items-center justify-center rounded-3xl px-4 py-1 group hover:-translate-y-1 transition-transform duration-300"
      >
        <Link
          to={link}
          className="text-black px-4 py-2 rounded-2xl transition-colors duration-300 hover:bg-gray-100"
        >
          Know More
        </Link>
        <img
          src="./arrow.webp"
          alt="arrow"
          className="w-7 h-10 transition-transform duration-300 transform group-hover:translate-x-1"
        />
      </div>
    </div>
  );
};

const BodSlider = ({ people, head, color, linecolor, link }) => {
  const gradolor = {
    backgroundImage: 'linear-gradient(to right, #1168b3, #00aabb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [

      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <>
    <div className="mt-20 md:mt-0">
    <div className=" marginal mx-auto  relative md:py-12">
      {/* <div className={`flex justify-center py-6 `}>
        <Heading color={color} title={head} linecolor={linecolor} />
      </div> */}
        <div className="inset-0 z-20 flex flex-col justify-center md:mb-6">
        <h1 className="font-extrabold text-2xl sm:text-4xl text-[#3c3a39] md:mb-4 mb-2 ">
         Board of Directors
         </h1>
         <div className="flex flex-row">
           <h2 className="font-extrabold text-3xl sm:text-5xl mb-1 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit pb-5">
           Leading with experience and expertise
           </h2>
         </div>
       </div>
      <Slider {...settings}>
        {people.map((person, index) => (
          <Link to={`/profile/${person.id}`} key={index}>
          <div key={index} id={person.id} className="px-4 ">
            <div className="rounded-xl overflow-hidden text-center transition-shadow duration-300">
              <div className="bg-gradient-to-r p-1 w-fit mx-auto from-[#c9243f] to-[#f9a41b] rounded-xl">
                <div className="h-[260px] mx-auto w-[280px] border-gray-300 border-b-0 overflow-hidden rounded-xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="  object-cover w-full bg-white h-full object-top"
                  />
                </div>
                <div className="bg-gradient-to-r w-[280px] h-[82px] mx-auto rounded-b-xl from-[#c9243f] to-[#f9a41b] p-4">
                  <h3 className="text-base font-semibold text-white leading-4">{person.name}</h3>
                  <p className="text-gray-200 text-sm mt-1 leading-4 ">{person.role}</p>
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </Slider>
      {/* <a
                href=""
                className="inline-block mt-4 bg-gradient-to-r text-sm from-[#1168b3] to-[#00aabb] rounded-xl text-white font-semibold px-5 py-2 transition duration-200"
              >
                Know More
              </a> */}
      {/* <div className="md:mt-20 w-full flex justify-center">
        <KnowMore
          link={link}
          isGradient={true}
        />
      </div> */}
        {/* Button */}
         <div className="md:mt-20 w-full flex justify-center mt-5">
        <KnowMore
          link="/corporate-overview/board-of-directors"
          isGradient={true}
        />
      </div>
    </div>
    </div>
    </>
  );
};

export default BodSlider;
