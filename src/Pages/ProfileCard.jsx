import React from "react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.4 },
  },
};

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const ProfileCard = ({obj}) => {
  

  return (
    <>
    <div className="w-full max-w-6xl mx-auto my-10">
     
    <motion.div
      className=" bg-[#fff5f4] rounded-2xl overflow-visible shadow-md flex flex-col md:flex-row items-stretch relative justify-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={parentVariants}
    >
      {/* Left Column */}
      <div className="md:w-1/3 w-full flex flex-col bg-white border border-[#ff7f50] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
        <motion.div
          className="w-full"
          variants={imageVariants}
        >
          <img
            src={obj.img}
            alt={obj.name}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Footer name section under image */}
        <div className="bg-gradient-to-r from-[#da1f3d] to-[#f9a23a] text-white p-4">
        <div className="relative pl-6">
  {/* Dot and line */}
  <div className="absolute left-0 top-0 flex flex-col items-center">
    <div className="w-px h-8 bg-white mt-1"></div>
    <div className="w-2 h-2 bg-white rounded-full"></div>
   

  </div>

  {/* Text */}
  <h2 className="text-lg font-bold">{obj.name}</h2>
  <h3 className="text-sm font-medium">{obj.designation}</h3>
</div>

        </div>
      </div>

      {/* Right Column (Text Content) */}
      <motion.div
        className="md:w-2/3 w-full p-6 flex flex-col justify-center text-black"
        variants={textVariants}
      >
        <p className="text-base md:text-lg leading-relaxed">{obj.text}</p>
      </motion.div>
    </motion.div>
    </div>
    </>
  );
};

export default ProfileCard;
