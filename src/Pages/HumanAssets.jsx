import React from 'react'
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
const HumanAssets = () => {
  return (
    <>
      <div className="marginal ">
        <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-2">
          Human Assets
        </h1>
        <div className="bg-gradient-to-r bg-clip-text text-transparent font-bold md:text-4xl text-3xl pt-2 pb-2 mb-4 w-fit" style={{ backgroundImage: 'linear-gradient(to right, #c9243f, #ee9228)' }}>
          Driving transformation with a
          people-first strategy
        </div>
        <div className=" text-xl pt-2 mb-4">
          Our human assets remain at the heart of everything we do. Over
          the years, we have built a diverse, skilled and passionate workforce
          dedicated to supporting India's micro and small businesses.
        </div>
        <div className="mb-4">
          Our people strategy at Veritas is
          anchored in inclusivity, continuous
          development, strong engagement and
          recognition of performance. Our on-
          ground presence is strengthened by
          teams that have deep knowledge of the
          markets and the customers we serve.
          We combine digital efficiency with human
          interaction to build long-term customer
          relationships and drive responsible
          lending. We are proud to be certified
          as a Great Place to Work for 2024 by
          the Great Place to Work® Institute, a
          recognition of our employee-first culture
          and inclusive workplace practices.
        </div>
        <div className='flex md:flex-row flex-col gap-5 mb-5 justify-center'>
          <HighlightStat prefix="" value="7796" suffix="" label="Full Time Professionals" />
          <HighlightStat prefix="" value="3415" suffix="" label="Sales Team(43.80% of total workforce)" />
        </div>
      </div>
      <div className="marginal mb-5">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src="/Asset.webp"
          alt="About Veritas"
        />
      </div>
      <div className='marginal'>

        <h1 className='text-xl text-[#c9243f] mb-2 font-bold'>Building Capability through
          Continuous Learning</h1>
        <div className='mb-4'>
          <p className='mb-2'>
            At Veritas, we believe that strong field
            capability is the foundation of responsible
            lending. Our sales and credit personnel
            undergo rigorous training that equips
            them with the skills to assess borrowers
            using practical, on-ground indicators such
            as inventory levels, customer footfall and
            transaction patterns.
            To ensure future-readiness, we also
            invest in the continuous development
            of our mid-level and senior employees
            through structured leadership training
            programmes. These are designed
            to enhance decision-making, team
            management and strategic thinking
            capabilities, thereby creating a strong
            leadership pipeline to support our growth
            in the years ahead.
          </p>
        </div>
        <div className='mb-10 p-4 bg-gray-100 rounded-lg mt-10'>
          <img className='md:w-[50%] mx-auto' src="/Assets.webp" alt="" />
        </div>

        {/* Desktop flex layout for last 2 sections with image */}
        <div className="lg:flex lg:gap-8 lg:items-start mb-5">
          {/* Text content on left */}
          <div className="lg:w-1/2">
            <h1 className='text-xl text-[#c9243f] mb-2 font-bold'>Performance and Recognition </h1>
            <div className='mb-4'>
              <p className='mb-2'>
                To attract and retain high-performing
                talent, Veritas Finance offers a
                robust performance and rewards
                framework. This includes:
              </p>
              <div className=''>
                <ul className='list-disc ml-6'>
                  <li className='mb-2'>Performance-linked incentives for sales
                    and collections teams</li>
                  <li className='mb-2'>
                    Employee Stock Option
                    Schemes (ESOS)
                  </li>
                  <li className='mb-2'>
                    Quarterly rewards and recognition
                    programmes at the branch level
                  </li>
                  <li className='mb-2'>
                    Allowances for vehicles
                    for eligible roles
                  </li>
                  <li className='mb-2'>
                    Retention bonuses to support long-term
                    employee engagement and stability
                  </li>
                </ul>
              </div>
            </div>

            <div className='mb-4'>
              <h1 className='text-xl text-[#c9243f] mb-2 font-bold'>Engagement and Communication</h1>
              <p className='mb-2'>
                At Veritas, we aim to nurture a culture
                of open dialogue, transparency and
                continuous engagement across all levels
                of the organisation. We have established
                multiple channels to encourage two-way
                communication and keep employees
                informed and involved.
              </p>
              <p>
                Through our in-house grievance redressal
                platform, Hot Line, employees can voice
                concerns securely and receive timely
                resolutions. Our quarterly newsletter,
                Livewire, keeps teams updated on
                internal developments, achievements and
                people-centric initiatives. Additionally, we
                use digital posters and communication
                aids across branches to raise awareness
                about employee benefits, policies and
                workplace updates.
              </p>
            </div>
          </div>

          {/* Image on right for desktop */}
          <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-start">
            <div className="w-full">
              <img className="w-full" src="/Asset_man.webp" alt="" />
            </div>
          </div>
        </div>

        {/* Original layout for mobile */}
        <div className='lg:hidden'>
          <h1 className='text-xl text-[#c9243f] mb-2 font-bold'>Performance and Recognition </h1>
          <div className='mb-4'>
            <p className='mb-2'>
              To attract and retain high-performing
              talent, Veritas Finance offers a
              robust performance and rewards
              framework. This includes:
            </p>
            <div className=''>
              <ul className='list-disc ml-6'>
                <li className='mb-2'>Performance-linked incentives for sales
                  and collections teams</li>
                <li className='mb-2'>
                  Employee Stock Option
                  Schemes (ESOS)
                </li>
                <li className='mb-2'>
                  Quarterly rewards and recognition
                  programmes at the branch level
                </li>
                <li className='mb-2'>
                  Allowances for vehicles
                  for eligible roles
                </li>
                <li className='mb-2'>
                  Retention bonuses to support long-term
                  employee engagement and stability
                </li>
              </ul>
            </div>
          </div>
          <div className='flex md:flex-row flex-col justify-center gap-5'>
            <div className='mb-4 md:w-[50%]'>
              <h1 className='text-xl text-[#c9243f] mb-2 font-bold'>Engagement and Communication</h1>
              <p className='mb-2'>
                At Veritas, we aim to nurture a culture
                of open dialogue, transparency and
                continuous engagement across all levels
                of the organisation. We have established
                multiple channels to encourage two-way
                communication and keep employees
                informed and involved.
              </p>
              Through our in-house grievance redressal
              platform, Hot Line, employees can voice
              concerns securely and receive timely
              resolutions. Our quarterly newsletter,
              Livewire, keeps teams updated on
              internal developments, achievements and
              people-centric initiatives. Additionally, we
              use digital posters and communication
              aids across branches to raise awareness
              about employee benefits, policies and
              workplace updates.
            </div>
            <div className='md:w-[50%]'>
              <img src="/Asset_man.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HumanAssets