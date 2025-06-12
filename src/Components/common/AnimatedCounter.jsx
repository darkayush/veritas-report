import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ value, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseFloat(value);
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start.toFixed(2));
      }, 10);
    }
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent"
    >
      {prefix} {Number(count).toLocaleString()} {suffix}
    </div>
  );
};

export default AnimatedCounter;
