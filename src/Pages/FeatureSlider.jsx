import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    title: "Specialised focus on MSMEs",
    description:
      "Exclusive lending to Micro, Small and Medium Enterprises (MSMEs), backed by deep market knowledge and strong borrower relationships.",
    img: "/competitive_icons/Icon1.webp"
  },
  {
    title: "Customer-first philosophy",
    description:
      "Personalised service approach with doorstep delivery of credit, high-touch engagement and strong grievance redressal mechanisms.",
    img: "/competitive_icons/Icon2.webp"
  },
  {
    title: "Widespread presence with granular approach",
    description:
      "Growing branch network across 10 states and 1 Union Territory, supported by locally recruited teams familiar with regional markets.",
    img: "/competitive_icons/Icon3.webp"
  },
  {
    title: "Disciplined underwriting and risk management",
    description:
      "Robust credit assessment framework and conservative provisioning policies ensure strong asset quality.",
    img: "/competitive_icons/Icon4.webp"
  },
  {
    title: "Technology-led scalability",
    description:
      "Investments in digital tools and mobility solutions enhance customer onboarding, credit delivery and operational efficiency.",
    img: "/competitive_icons/Icon5.webp"
  },
  {
    title: "Strong governance and leadership",
    description:
      "Guided by an experienced Board and professional management with a deep commitment to financial inclusion and sustainable growth.",
    img: "/competitive_icons/Icon6.webp"
  },
];

const CustomCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // move every 2 seconds
    speed: 800, // faster transition
    cssEase: "ease-in-out",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto my-10  ">
      <Slider {...settings}>
        {cardData.map((item, index) => (
          <div key={index} className="px-4 ">
            <div
              className="bg-gradient-to-r from-[#fde7e7] to-[#fae2c6] p-6 rounded-lg shadow-md flex flex-col justify-between mb-5"
              style={{ height: "280px", minWidth: "280px" }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#fff3e3] flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#c62033] mb-2">{item.title}</h3>
              <p className="text-gray-800 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
