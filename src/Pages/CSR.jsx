
const HighlightStat = ({ prefix = "INR", value = "2.15", suffix = "Crores", label = "Total CSR spend" }) => {
  return (
    <div className="text-center px-4 py-2">
      {/* Value with Gradient */}
      <div className="text-3xl sm:text-4xl font-extrabold">
        <span className="text-[#c9243f]">{prefix}</span>{" "}
        <span className="bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent">
          {value}
        </span>{" "}
        <span className="bg-gradient-to-r from-[#c9243f] to-[#f6a11d] bg-clip-text text-transparent">
          {suffix}
        </span>
      </div>

      {/* Underline */}
      <div className="border-t border-gray-400 w-[300px] mx-auto mt-1 mb-1"></div>

      {/* Label */}
      <div className="text-sm text-[#6c6d70]">{label}</div>
    </div>
  );
}
const CSR = () => {

  return (
    <div className='marginal'>
      <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-2">
        Corporate Social Responsibility (CSR)
      </h1>
      <div className="bg-gradient-to-r bg-clip-text text-transparent font-bold md:text-4xl text-3xl pt-2 pb-2 mb-4 w-fit" style={{ backgroundImage: 'linear-gradient(to right, #c9243f, #ee9228)' }}>
        Committed to Meaningful Change
      </div>
      <div className=" text-xl pt-2 mb-4">
        At Veritas Foundation, we believe that true progress lies in building a stronger, more
        equitable society. Our CSR efforts continue to focus on education, empowerment and
        infrastructure, creating environments where individuals and communities can thrive.
        Through targeted initiatives across Tamil Nadu, we are addressing critical needs and
        building a future of opportunity.
      </div>
      <div className='flex md:flex-row flex-col justify-center gap-5 mt-2 mb-4'>
        <div className='mb-4 md:w-[70%]'>
          <h1 className='text-xl text-[#c9243f] mb-2 font-bold'>Renovation of Government High
            School, Ladapuram </h1>
          <div className=''>As part of the Tamil Nadu Government’s
            Namma School Namma Oru Palli (NSNOP)
            initiative, Veritas Foundation undertook
            the comprehensive renovation of the
            Government High School in Ladapuram,
            Perambalur District. With an investment
            of INR 2.15 crores, the school now stands
            as a safer, cleaner and more inspiring
            space for its students. The project
            was inaugurated on March 5, 2025,
            by Ms. Grace Pachuau, I.A.S., District
            Collector of Perambalur.</div>
          <div className='mt-12 mb-5 flex md:flex-row flex-col items-center'>
            {/* number */}
            <HighlightStat />
            <HighlightStat prefix="" value="166" suffix="students" label="directly impacted" />
          </div>
        </div>
        <div>
          <img src="/CSR_building.webp" alt="" />
        </div>
      </div>
      <div className='p-4 bg-gray-100 mb-5'>
        <img className='md:w-[80%] mx-auto' src="/csr/CSR.webp" alt="" />
      </div>
      <div className='flex md:flex-row flex-col justify-center items-start gap-8 mb-8'>
        {/* Left side - Text and Stats */}
        <div className='md:w-[60%] flex-1'>
          <h1 className='text-xl text-[#c9243f] mb-2 font-bold'>
            Scholarships for Girl Students across Tamil Nadu
          </h1>
          <div className='mb-6 text-base leading-relaxed'>
            In FY 2024–25, Veritas Foundation provided scholarships worth INR 1 crore to 42 girl students across Tamil Nadu,
            empowering them to pursue higher education in fields of their choice. This initiative is part of our ongoing partnership with the
            NSNOP programme and aims to inculcate independence and confidence amongst young women, giving them an opportunity
            to a brighter future.
          </div>

          {/* Highlight Stats */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <HighlightStat prefix="INR" value="1" suffix="Crore" label="in scholarships disbursed" />
            <HighlightStat prefix="" value="10" suffix="+" label="leading institutions across India" />
            <HighlightStat prefix="" value="42" suffix="+" label="girl students supported" />
            <HighlightStat prefix="" value="100" suffix="%" label="coverage of tuition and academic expenses" />
          </div>
        </div>

        {/* Right side - Image */}
        <div className='md:w-[40%] flex-1'>
          <img
            src="/Csr_girl.webp"
            alt="Girl students receiving scholarships from Veritas Foundation"
            className='w-full h-auto object-cover rounded-lg shadow-md'
          />
        </div>
      </div>
      <div className='flex md:flex-row flex-col gap-5 justify-center'>
        <div>
          <img src="/csr/CSR1.webp" alt="" />
        </div>
        <div>
          <img src="/csr/CSR2.webp" alt="" />
        </div>
        <div>
          <img src="/csr/CSR3.webp" alt="" />
        </div>
      </div>
    </div>

  )
}

export default CSR