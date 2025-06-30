import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const BarChart = ({ data, showPercent = false, percentValue = 0 }) => {
  const chartRef = useRef(null);
  const [barMaxHeight, setBarMaxHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        setBarMaxHeight(chartRef.current.offsetHeight * 0.7);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start bg-white">
      {/* Optional Percent Change Display */}

      <div
        ref={chartRef}
        className="flex items-end justify-center h-[500px] w-full max-w-3xl px-2 gap-x-10 border-2"
        style={{
          borderLeftColor: "#f8a219",
          borderRightColor: "#cc2d3d",
          borderTopColor: "#f8a219",
          borderBottomColor: "#cc2d3d",
        }}
      >
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * barMaxHeight;
          const grayPatchHeight = barMaxHeight - barHeight;
          const isFinal = index === data.length - 1;

          return (
            <div
              key={index}
              className="flex flex-col items-center w-[60px] relative"
            >
              {/* Value above bar */}
              <div className="flex flex-col justify-end" style={{ height: barMaxHeight }}>
                <div
                  className="w-full bg-gray-200 flex items-center justify-center"
                  style={{ height: grayPatchHeight }}
                >
                  <p className="text-sm font-semibold text-black rotate-[-90deg] whitespace-nowrap">
                    {item.value.toLocaleString()}
                  </p>
                </div>

                {/* Colored bar */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: barHeight }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full rounded-t-sm ${
                    isFinal
                      ? "bg-gradient-to-t from-[#c9243f] to-[#faa619]"
                      : "bg-[#e5a29f]"
                  }`}
                />
              </div>

              {/* Year label */}
              <div className="w-full h-10 mt-3 flex items-center justify-center px-2">
                <p className="text-sm font-medium text-black whitespace-nowrap">
                  {item.year}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// const BarChart = ({ data, showPercent, percentValue }) => {
//   const chartRef = useRef(null);
//   const [maxBarHeight, setMaxBarHeight] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       if (chartRef.current) {
//         setMaxBarHeight(chartRef.current.offsetHeight * 0.8);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const maxValue = Math.max(...data.map((item) => item.value));

//   return (
//     <div className="bg-[#d9ecfb] w-screen flex justify-center items-center h-[100vh]">
//       <div
//         ref={chartRef}
//         className="flex flex-col h-[80vh] items-center bg-white border-2 border-[#36a2eb] w-3xl max-w-full relative"
//       >
    

//         {/* Chart Bars */}
//         <div className="relative w-full flex items-end justify-center max-w-6xl h-full">
//           <div className="gap-8 flex items-end justify-center w-full">
//             {data.map((item, index) => {
//               const scaledHeight = (item.value / maxValue) * maxBarHeight;
//               return (
//                 <motion.div
//                   key={index}
//                   className="flex flex-col bottom-5 items-center relative group w-1/6 sm:w-1/5 md:w-1/6"
//                   transition={{
//                     duration: 1.2,
//                     ease: "linear",
//                     delay: index * 0.2,
//                   }}
//                   viewport={{ once: true }}
//                 >
//                   {/* Value */}
//                   <p className="mb-2 text-sm font-bold text-gray-800">
//                     {item.value}
//                   </p>

//                   {/* Bar */}
//                   <motion.div
//                     initial={{ height: 0 }}
//                     whileInView={{ height: `${scaledHeight}px` }}
//                     transition={{ duration: 1, ease: "easeInOut" }}
//                     viewport={{ once: true }}
//                     className="relative w-full flex items-end"
//                   >
//                     <div
//                       className="w-full rounded-t-xl bg-gradient-to-t from-[#01aeef] to-[#0db152] transition-opacity duration-300 group-hover:opacity-0"
//                       style={{ height: "100%" }}
//                     />
//                     <div
//                       className="w-full rounded-t-xl bg-[#009ed7] opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute bottom-0 left-0 right-0"
//                       style={{ height: "100%" }}
//                     />
//                   </motion.div>

//                   {/* Year */}
//                   <p className="mt-3 text-sm font-medium text-gray-700">
//                     {item.year}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BarChart;
