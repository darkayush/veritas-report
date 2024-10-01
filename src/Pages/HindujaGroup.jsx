
const HindujaGroup = () => {
  return (
    <div className="marginal">
      <h1 className="text-[#f26724] font-semibold text-center md:text-5xl text-3xl pt-4">  Hinduja Group </h1>
      <h1 className="text-[#10357f] font-semibold text-center text-4xl pt-4 mb-8">  Our Strong Parentage </h1>

      <div className="relative mb-8">
        <h3 className="text-[#4d4d4f] font-semibold text-left text-xl pt-4 mb-4">Established in 1914, the Hinduja Group has evolved into a global conglomerate with a vision for tomorrow and timeless values. Spanning continents and employing over 200,000 people, the Group has emerged as a leader in industries as diverse as healthcare, automotive, banking and financial services.</h3>

        <p className="text-left  text-md">The Group also maintains a strong presence in oil and gas and other industries. It participates in the development of both established sectors and emerging fields such as digital technology and renewable energy. This strategic positioning ensures its relevance in the evolving global marketplace.</p>
      </div>



      {/* Callouts */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 items-center justify-center gap-8 mb-8">


        {/* Row 1 */}
        <div className="w-[300px] m-auto md:m-0">
          <h1 className="text-[#f26724] font-semibold text-3xl mb-1">
            200,000+
          </h1>
          <p className="text-gray-800 border-t-[2px] border-[#bababa] w-fit">
            Total Group Workforce
          </p>
        </div>

        <div className="w-[300px] m-auto md:m-0">
          <h1 className="text-[#f26724] font-semibold text-3xl mb-1">110+</h1>
          <p className="text-gray-800 border-t-[2px] border-[#bababa] w-fit">
            Years of Excellence
          </p>
        </div>

        <div className="w-[300px] m-auto md:m-0">
          <h1 className="text-[#f26724] font-semibold text-3xl mb-1">100+</h1>
          <p className="text-gray-800 border-t-[2px] border-[#bababa] w-fit">
            Countries Presence
          </p>
        </div>
      </div>


      {/* BUSINESS VERTICALS */}

      <h1 className="text-[#f26724] font-semibold text-left text-3xl pt-4 mb-4">  Business Verticals </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 items-center justify-center gap-8 mb-8" >
        <img className='m-[-12px]' src="src/assets/vv1.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/vv2.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/vv3.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/vv4.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/vv5.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/vv6.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/vv7.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/vv8.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/vv9.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/vv10.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/aadmi.webp" alt="unlock" />
        <img className='m-[-12px]' src="src/assets/aadmi2.webp" alt="unlock" />
      </div>

    </div>
  )
}

export default HindujaGroup