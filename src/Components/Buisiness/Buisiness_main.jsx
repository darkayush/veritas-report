import React from 'react'
import Buisiness_High from './Buisiness_High'
const Buisiness_main = ({allItems}) => {
  return (
    <>
    <div className='!mb-15 !mt-15'>
         <div className="marginal ">
      {/* Header */}
      <div className="z-20 flex flex-col  pt-12 ">
        <h1 className="font-extrabold text-2xl sm:text-4xl text-[#3c3a39] mb-4">
          Business Highlights
        </h1>
        <h2 className="font-extrabold text-3xl sm:text-5xl mb-1 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit ">
          Numbers that reflect
        </h2>
        <h2 className="font-extrabold text-3xl sm:text-5xl mb-6 bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent leading-tight w-fit ">
          impressive performance
        </h2>
        <div className="text-2xl">
          <p>We offer an array of loans targeting different income groups to accelerate</p>
          <p>financial inclusion and bring more people into the economic mainstream.</p>
        </div>
      </div>
<Buisiness_High allItems={allItems}/>
    </div>
    </div>
    </>
  )
}

export default Buisiness_main