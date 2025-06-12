import React from 'react';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";

const boardMembers = [
  {
    name: "Raj Vikash Verma",
    role: "Chairman and Non-executive Independent Director",
    image: "./home/Raj.webp",
  },
  {
    name: "D. Arulmany",
    role: "Managing Director and CEO",
    image: "./home/Arul.webp",
  },
  {
    name: "Suresh Subramanian",
    role: "Non-executive Independent Director",
    image: "./home/Suresh.webp",
  },
  {
    name: "Mathew Joseph",
    role: "Non-executive Independent Director",
    image: "./home/Mathew-Joseph.png",
  },
  {
    name: "Dr. Susan Thomas",
    role: "Independent Director",
    image: "./home/Dr.-Susan-Thomas.png",
  },
  {
    name: "Sankarson Banerjee",
    role: "Non-executive Independent Director",
    image: "./home/Sankarson-Banerjee.png",
  },
  {
    name: "Priyamvada Ramkumar",
    role: "Non-Executive Nominee Director and Lok Capital Growth Fund",
    image: "./home/Priyamvada-Ramkumar.png",
  },
  {
    name: "Parin Mehta",
    role: "Non-executive Nominee Director, Kedaara Capital Fund II LLP",
    image: "./home/Parin-Mehta.png",
  },
  {
    name: "Sudhir Narayanankutty Variyar",
    role: "Non-executive Nominee Director, Multiples Private Equity Fund III",
    image: "./home/Sudhir-Narayanankutty-Variyar.png",
  }
];

const BodSlider = () => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <div className="custom-dot">
          <div className="custom-dot-inner"></div>
        </div>
      );
    },
    dotsClass: "slick-dots custom-dots !bottom-[-35px]",
    infinite: true,
    speed: 700,
    slidesToShow: 4,
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
    <div className="marginal">
      <div className="inset-0 z-20 flex flex-col justify-center mb-6">
        <h1 className="font-extrabold text-2xl sm:text-4xl text-[#3c3a39] mb-4">
        Board of Directors
        </h1>
        <div className="flex flex-row">
          <h2 className="font-extrabold text-3xl sm:text-5xl mb-1 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit pb-5">
          Leading with experience and expertise
          </h2>
        </div>
      </div>

      <Slider {...settings}>
        {boardMembers.map((member, index) => (
          <div key={index} className="h-[380px] px-3">
            <div className="h-full bg-gradient-to-r from-[#c9243f] to-[#f6a11d] p-[1px] rounded-2xl">
              <div className="bg-[#fef8f1] h-full rounded-2xl overflow-hidden flex flex-col justify-start">

                {/* Image */}
                <div className="h-[290px] overflow-hidden rounded-t-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name & Role Section */}
                <div className="flex-grow p-[1px] bg-gradient-to-r from-[#c9243f] to-[#f6a11d] rounded-b-2xl">
                  <div className="bg-white h-full rounded-b-2xl flex flex-col justify-center items-center text-center px-3 py-3 text-black">
                    <p className="text-sm sm:text-base font-bold">{member.name}</p>
                    <p className="text-xs sm:text-sm">{member.role}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BodSlider;
