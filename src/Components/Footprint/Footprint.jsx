import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "../common/AnimatedCounter"; // import your counter
import { div } from "framer-motion/client";

const pointerVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Buisiness_High = () => {
  const firstRow = [
    { value: "438", label: "Branches" },
    { value: "70", label: "Service Centres" },
    { value: "10", label: "states" },
    { value: "1", label: "Union Territory in India, accelerating financial inclusion far and wide." },
  ];

  const pointers = [
    { name: "Tamil Nadu", top: "90%", left: "35%" },
    { name: "Andhra Pradesh", top: "75%", left: "37%" },
    { name: "Telangana", top: "65%", left: "38%" },
    { name: "Karnataka", top: "75%", left: "25%" },
    { name: "West Bengal", top: "47%", left: "69%" },
    { name: "Madhya Pradesh", top: "45%", left: "35%" },
    { name: "Odisha", top: "55%", left: "55%" },
    { name: "Jharkhand", top: "45%", left: "59%" },
    { name: "Bihar", top: "38%", left: "60%" },
    { name: "Chhattisgarh", top: "50%", left: "50%" },
    { name: "Puducherry (Union Territory)", top: "85%", left: "39.5%" },
  ];

  const mapRef = useRef(null);
  const isMapInView = useInView(mapRef, { once: true });

  return (
    <>
   
    <div className="flex flex-col lg:flex-row items-start marginal ">
      {/* Left side */}
      <div className="flex-1">
        <div className="z-20 flex flex-col justify-center py-5">
          <h1 className="font-extrabold text-2xl sm:text-4xl text-[#3c3a39] mb-4 ">
            Geographic Footprint
          </h1>
          <h2 className="font-extrabold text-3xl sm:text-5xl mb-1 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit pb-2">
            Expanding our presence,
          </h2>
          <h2 className="font-extrabold text-3xl sm:text-5xl mb-6 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit pb-2">
            making a difference
          </h2>
          <div className="text-2xl text-[#6c6d70]">
            <h2>We operate through a network of</h2>
          </div>
        </div>

        {/* Business Values */}
        <div className="flex flex-col gap-10 w-fit ">
          {firstRow.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: (i = 1) => ({
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }),
              }}
            >
              {/* Animated Counter + animated underline */}
              <div className="font-medium text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#c9243f] to-[#f6a11d] relative w-[40%] pb-2">
                <AnimatedCounter value={parseInt(item.value)} />
                <motion.div
                  className="h-1 bg-red-500 absolute bottom-0 left-0"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                />
              </div>

              {/* Label text */}
              <div className="text-[#6c6d70] text-2xl mt-2 w-fit">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side Map */}
      <div className="flex-1 relative mt-10 lg:mt-0 lg:ml-10">
        <div ref={mapRef}>
          <img
            src="/home/MWP.png"
            alt="India Map"
            className="w-full h-auto"
          />

          {/* Drop-in pointers on viewport */}
          {isMapInView &&
            pointers.map((pointer, index) => (
              <motion.div
                key={index}
                className="absolute group"
                style={{
                  top: pointer.top,
                  left: pointer.left,
                  transform: "translate(-50%, -100%)",
                }}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={pointerVariant}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-sm sm:text-base rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                  {pointer.name}
                </div>
                <img
                  src="/home/Pointer.png"
                  alt={pointer.name}
                  className="h-10 hover:scale-125 transition-transform duration-200"
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
   
    </>
  );
};

export default Buisiness_High;
