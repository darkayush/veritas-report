import React from 'react'
import FeatureSlider from './FeatureSlider'
const Competitive = () => {
  return (
    <div>
      <div className="marginal ">
        <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-2">
          Competitive Advantages
        </h1>
        <div className="bg-gradient-to-r bg-clip-text text-transparent font-bold md:text-4xl text-3xl pt-2 pb-2 mb-4 w-fit" style={{ backgroundImage: 'linear-gradient(to right, #c9243f, #ee9228)' }}>
          Staying ahead of the curve
        </div>
        <div className=" text-xl pt-2 mb-4">
          Over the past decade, Veritas Finance has built a robust foundation anchored in
          trust, customer centricity and a deep understanding of MSME lending. Our core
          strengths continue to evolve, helping us deliver tailored retail credit solutions,
          scale our presence and empower underserved communities across India.
        </div>
        <FeatureSlider />
        <div className='text-2xl bg-gradient-to-r from-[#c9243f] to-[#faa619] text-transparent bg-clip-text font-extrabold mb-4 rounded-2xl mt-4 w-fit'>
          SHAPED BY RURAL INSIGHTS
        </div>
        <div className='p-4 bg-[#ffe1b7] border border-[#c9243f]  rounded-2xl'>
          <div className=''>
            Our strong rural focus has also equipped us with
            domain knowledge regarding the characteristics
            of local markets and prospective borrowers,
            enhancing our ability to tailor our products and
            services accordingly.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competitive