import React, { useEffect, useState } from "react"; 
import BarChart from "./BarGraph";

const Financial_data = [
  { title: "Loan Book (Cr)", key: "RFO" },
  { title: "Income (Cr)", key: "EB" },
  { title: "Profit Before Tax (PBT) (Cr)", key: "PBT" },
  { title: "Employees", key: "GNT" },
  { title: "Customers", key: "ROCE" },
  { title: "Branches", key: "DIVIDEND" },
  { title: "Net-worth (Cr)", key: "IndiaB" },
];

const Financial = {
  RFO: [
    { year: "FY 20-21", value: 1562.75, isPercentage: true, percent: 16 },
    { year: "FY 21-22", value: 2187.35 },
    { year: "FY 22-23", value: 3533.73 },
    { year: "FY 23-24", value: 5723.79 },
    { year: "FY 24-25", value: 7348.64 },
  ],
  EB: [
    { year: "FY 20-21", value: 361.67, isPercentage: true, percent: 8 },
    { year: "FY 21-22", value:442.23 },
    { year: "FY 22-23", value: 680.8 },
    { year: "FY 23-24", value: 1117.49},
    { year: "FY 24-25", value: 1557.40 },
  ],
  PBT: [
    { year: "FY 20-21", value: 82.04, isPercentage: true, percent: -12 },
    { year: "FY 21-22", value: 101.36 },
    { year: "FY 22-23", value: 232.85 },
    { year: "FY 23-24", value: 322.96 },
    { year: "FY 24-25", value: 388.32 },
  ],
  GNT: [
    { year: "FY 20-21", value: 2333, isPercentage: true, percent: -17 },
    { year: "FY 21-22", value: 2727 },
    { year: "FY 22-23", value: 4432 },
    { year: "FY 23-24", value: 6299 },
    { year: "FY 24-25", value: 7796 },
  ],
  ROCE: [
    { year: "FY 20-21", value: 53772 },
    { year: "FY 21-22", value: 71726 },
    { year: "FY 22-23", value: 116403 },
    { year: "FY 23-24", value: 176082},
    { year: "FY 24-25", value: 211389 },
  ],
  DIVIDEND: [
    { year: "FY 20-21", value: 204, isPercentage: true, percent: 6 },
    { year: "FY 21-22", value: 229 },
    { year: "FY 22-23", value: 287 },
    { year: "FY 23-24", value: 382 },
    { year: "FY 24-25", value: 438 },
  ],
  IndiaB: [
    { year: "FY 20-21", value: 888.02, isPercentage: true, percent: 15 },
    { year: "FY 21-22", value: 1408.05 },
    { year: "FY 22-23", value: 1591.26 },
    { year: "FY 23-24", value: 2329.55 },
    { year: "FY 24-25", value: 2783.17 },
  ],
};

export default function FinancialYear() {
  const [selectedKey, setSelectedKey] = useState("RFO");
  const [percentageItemSelected, setPercentageItemSelected] = useState(false);
  const [percentValue, setPercentValue] = useState(0);

  useEffect(() => {
    const first = Financial[selectedKey]?.[0];
    if (first?.isPercentage && first.percent !== 0) {
      setPercentageItemSelected(true);
      setPercentValue(first.percent);
    } else {
      setPercentageItemSelected(false);
      setPercentValue(0);
    }
  }, [selectedKey]);

  return (
    <div className="marginal">
      {/* Heading */}
      <div className="pb-6">
        <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-2">
          Financial Year/ Categories
        </h1>
      </div>

      {/* Navbar Buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
        {Financial_data.map((item) => (
          <button
            key={item.key}
            onClick={() => setSelectedKey(item.key)}
            className={`text-xs md:text-sm px-3 py-2 md:px-4 md:py-3 rounded-lg cursor-pointer transition font-semibold whitespace-nowrap text-center min-w-[140px] md:min-w-[200px] max-w-xs shadow-md hover:shadow-lg ${
              selectedKey === item.key
                ? "bg-gradient-to-br from-[#d03739] to-[#f8a11a] text-white"
                : "border-2 border-[#d03739] text-[#d03739] bg-white"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Chart Component */}
      <BarChart
        data={Financial[selectedKey]}
        showPercent={percentageItemSelected}
        percentValue={percentValue}
      />
    </div>
  );
}