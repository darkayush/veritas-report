import React from "react";
import { motion } from "framer-motion";

// Combined awards with year
const awards = [
  {
    year: "2019",
    text: "$Excellence Award$ at 8th $MiNE INDIA 2019$, for the contribution to the $MSME$ Financing segment",
    img: "/Award/Award1.webp",
  },
  {
    year: "2022",
    text: "$Arulmany D, MD and CEO$, Veritas Finance was $awarded$ Emerging Entrepreneur Award at the $10th$ edition of $CII SR Business Entrepreneurship Awards 2022$",
    img: "/Award/Award2.webp",
  },
  {
    year: "2023",
    text: "Platinum Category Award by $CII – National Kaizen Competition$",
    img: "/Award/Award3.webp",
  },
  {
    year: "2023",
    text: "Veritas Finance was awarded 'Inclusive Enterprise Lending by $Non-Banking Finance Company of the Year Award$' at the 19th Inclusive Finance India Awards 2022",
    img: ["/Award/Award4.webp", "/Award/Award5.webp"],
  },
  {
    year: "2024",
    text: "Platinum Category 1st Runner-up award by $CII – National Lean Competition$",
    img: "/Award/Award6.webp",
  },
  {
    year: "2024",
    text: "$ISO 18404:2015$ CERTIFIED LEAN IMPLEMENTATIONS",
    img: "/Award/Award7.webp"
  },
  {
    year: "2024",
    text: "Awarding certificate of appreciation under $GST$",
    img: "/Award/Award8.webp"
  },
  {
    year: "2025",
    text: '$Great Place To Work$ – Certificate 2nd time in a row',
    img: "/Award/Award9.webp"
  }
  // Add more awards as needed
];

const Award = () => {
  return (
    <div className="marginal text-lg mb-[30px]">
      <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-2">
        Recognitions
      </h1>
      <div className="bg-gradient-to-r bg-clip-text text-transparent font-bold md:text-4xl text-3xl pt-2 pb-2 mb-4 w-fit" style={{ backgroundImage: 'linear-gradient(to right, #c9243f, #ee9228)' }}>
        Award-winning moments
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative w-full max-w-sm p-4 rounded shadow bg-gray-100"
          >
            {/* Image(s) */}
            {award.img && (
              <div className="mb-3">
                {Array.isArray(award.img) ? (
                  // Multiple images in a row
                  <div className="grid grid-cols-2 gap-2">
                    {award.img.map((imgSrc, imgIndex) => (
                      <motion.img
                        key={imgIndex}
                        src={imgSrc}
                        alt=""
                        className="w-full object-contain h-[300px]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                ) : (
                  // Single image
                  <motion.img
                    src={award.img}
                    alt=""
                    className="w-full object-contain h-[300px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            )}

            {/* Highlighted text */}
            <p className="text-sm">
              {award.text.split(/\$(.*?)\$/g).map((segment, i) => {
                const isHighlighted = i % 2 === 1;
                return (
                  <span
                    key={i}
                    className={isHighlighted ? "font-bold text-xl text-black" : ""}
                  >
                    {segment}
                  </span>
                );
              })}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Award;