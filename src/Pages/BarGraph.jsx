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
    <div className="w-full flex flex-col items-center justify-start bg-white">
      {/* Percent Change Display
      {showPercent && percentValue !== 0 && (
        <div className="mb-4 px-4 py-2 bg-gray-100 rounded-lg">
          <p className="text-sm font-medium text-gray-700">
            Change: {percentValue > 0 ? '+' : ''}{percentValue}%
          </p>
        </div>
      )} */}

      <div
        ref={chartRef}
        className="flex items-end justify-center h-[400px] md:h-[500px] w-full max-w-6xl px-2 md:px-4 gap-x-2 md:gap-x-6 border-2 overflow-x-auto"
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
              className="flex flex-col items-center flex-1 min-w-0 max-w-[80px] md:max-w-[100px] relative"
            >
              {/* Bar container with value inside */}
              <div className="flex flex-col justify-end w-full" style={{ height: barMaxHeight }}>
                {/* Gray patch with value */}
                <div
                  className="w-full flex items-end justify-center"
                  style={{ height: grayPatchHeight }}
                >
                  <p className="text-xs md:text-sm font-semibold text-black md:rotate-0 whitespace-nowrap">
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
              <div className="w-full h-8 md:h-10 mt-2 md:mt-3 flex items-center justify-center px-1">
                <p className="text-xs md:text-sm font-medium text-black whitespace-nowrap text-center">
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