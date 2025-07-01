import React from 'react'
import Buisiness_High from '../Components/Buisiness/Buisiness_High';
const BusinessHighlights = () => {
  const allItems = [
    { value: "1557.40", label: "Total Revenue", showCrores: true },
    { value: "292.19", label: "Profit After Tax (PAT)", showCrores: true },
    { value: "7348.64", label: "Loan Assets Under Management (AUM)", showCrores: true },
    { value: "11.52", label: "Return on Equity (%)" },
    { value: "438", label: "Branch Network" },
    { value: "7796", label: "Employees" },
  ];
  return (
    <>
      <div className="marginal">
        <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-2">
          Business Highlights
        </h1>
        <div className="bg-gradient-to-r bg-clip-text text-transparent font-bold md:text-4xl text-3xl pt-2 pb-2 w-fit" style={{ backgroundImage: 'linear-gradient(to right, #c9243f, #ee9228)' }}>
          Numbers that reflect
          impressive performance
        </div>


      </div>
      <Buisiness_High allItems={allItems} />
      <div className="marginal mt-20 ">
        <img
          className="w-full h-auto max-h-[700px] object-cover mt-10 rounded-lg"
          src="/Business_Highlights.webp"
          alt="About Veritas"
        />
      </div>
    </>
  )
}

export default BusinessHighlights