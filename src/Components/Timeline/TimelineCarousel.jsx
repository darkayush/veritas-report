import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const timelineData = [
  { year: "2015", description: ["Incorporated as Veritas Finance Private Limited and registered as an NBFC with the RBI.","Commenced operations in Tamil Nadu through offices in Coimbatore and Trichy."] },
  { year: "2016", description: ["Expanded to the Union Territory of Puducherry.","Secured first private equity from Sarva Capital LLC and Caspian Impact Investment Adviser."] },
  { year: "2017", description: ["Entered West Bengal, Odisha and Karnataka.","Loan disbursements surpassed INR 100 Crores for the year.","Raised equity from British InternationalInvestments plc (CDC), Lok Capital and Sarva Capital.","Received CARE BBB- rating for long-term banking facilities."] },
  { year: "2018", description: ["Achieved cumulative break-even.","Crossed 100 branches and expanded into Telangana Andhra Pradesh and Madhya Pradesh.","Raised equity from Norwest Venture Partners and British International Investments.","Received CARE BBB+ rating for long-term banking facilities."] },
  { year: "2019", description: ["Entered Jharkhand.","Loan book crossed INR 1,000 Crores."] },
  { year: "2020", description: ["Raised equity from Kedaara Capital, Norwest and Lok Capital.", "Received CARE A- rating for long-term banking facilities."] },
  { year: "2021", description: ["Raised equity from a consortium of marquee investors including Norwest, Kedaara, Growth Catalyst and Evolvence."] },
  { year: "2022", description: ["Customer base crossed 100,000; branch network reached 250+.", "Received CARE A1+ short-term credit rating for Commercial Paper."] },
  { year: "2023", description: ["Commenced operations in Bihar and Chhattisgarh.", "Received CARE A+ for long-term and A1+ for short-term banking facilities.","Raised funds from Multiples Private Equity Fund III and Avendus Future Leaders Fund II.","Loan book crossed INR 5,000 Crores."] },
  { year: "2024", description: ["Crossed 400 branches.", "Launched vehicle loans.","Long-term CARE A+ outlook revised to ‘Positive’."] },
  { year: "2025", description: ["Loan book crossed INR 7,000 Crores."] }
];

const TimelineCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="relative w-full py-10 px-4 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/home/glorybg.png')] bg-cover bg-center z-0"
        style={{
          WebkitMaskImage: "linear-gradient(to top, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to top, black 10%, transparent 100%)"
        }}></div>

      <div className="relative z-10">
        <div className="inset-0 z-20 flex flex-col justify-center px-6 sm:px-20 py-12">
          <h1 className="font-extrabold text-2xl sm:text-4xl text-[#11111] mb-4">
            10 Glorious Years
          </h1>
          <h2 className="font-extrabold text-3xl sm:text-6xl mb-1 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit pb-2">
            Unveiling our remarkable journey
          </h2>
          <h2 className="font-extrabold text-3xl sm:text-6xl mb-6 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit">
            over the years
          </h2>
          <p className="text-2xl">
            Over the years, we have evolved in step with changing times, expanding our offerings to retail customers and enabling their financial empowerment.
          </p>
        </div>

        <div className="w-full py-10 px-4"
          style={{
            WebkitMaskImage: "linear-gradient(to top, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to top, black 10%, transparent 100%)"
          }}>
          <Slider {...settings}>
            {timelineData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={item.year} className="px-2">
                  <div
                    className={`relative flex flex-col items-center justify-center transition-all duration-500 ${isActive ? "scale-110 z-20" : "scale-90 blur-sm opacity-70"}`}
                  >
                    <div className="relative pt-10 pb-10">
                      <div className="w-36 z-10 h-36 rounded-full bg-gradient-to-l from-[#c9243f] to-[#f6a11d] flex items-end justify-center text-white text-5xl font-bold relative shadow-xl">
                        {item.year}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>

          <div className="mt-10 flex justify-center relative h-52">
            <AnimatePresence mode="wait">
              <motion.div
                key={timelineData[activeIndex].year}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full max-w-xl p-6 rounded-xl bg-white text-black shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {/* {timelineData[activeIndex].year} */}
                </h3>
                <ul className="list-disc ml-5 space-y-1 text-black">
                  {timelineData[activeIndex].description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCarousel;
