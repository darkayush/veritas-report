const MarketOverview = () => {
  return (
    <div className="marginal">
      <h1 className="text-[#f26724] font-semibold text-center md:text-5xl text-3xl pt-4">
        {" "}
        Market Overview{" "}
      </h1>
      <p className="text-[#414141] font-semibold text-left text-xl pt-4 mb-8">
        {" "}
        India presents tremendous growth opportunities. India is enjoying a
        convergence of a demographic as well as an economic sweet spot and is by
        far the fastest-growing major economy in the world.{" "}
      </p>
      <p className="font-normal">
        India’s lubricant market will grow at a volume CAGR of 3% through 2032*.
        Among the top five major lubricants-consuming countries globally, India
        is the only one with strong lubricant demand growth potential. Over the
        next decade, despite the emergence of electric vehicles, lubricant
        consumption in India will continue to grow at a decent pace both in
        volume and value.
        <br /> <br />
        Economic activity across sectors like manufacturing, services,
        agriculture and allied have shown resilience. Further, India’s booming
        automotive industry looks promising and exciting attributed to factors
        like rising income levels, urbanisation, and an expanding middle class
        with greater purchasing power{" "}
      </p>

      {/* CALLOUT */}

      <div className="bg-[#ddf3ff] text-[#10357f] font-regular text-left text-xl rounded-2xl p-4 mt-8  mb-8">
        <div className="flex items-center justify-center gap-8">
          <div className="w-[500px] m-auto md:m-0">
            <h1 className="text-[#f26724] font-semibold text-3xl mb-1">
              Fastest Growing
            </h1>
            <p className="text-gray-800 border-t-[2px] border-[#bababa] w-fit">
              Among Major Economies (in terms of GDP)
            </p>
          </div>

          <div className="w-[400px] m-auto md:m-0">
            <h1 className="text-[#f26724] font-semibold text-3xl mb-1">
              Third Largest
            </h1>
            <p className="text-gray-800 border-t-[2px] border-[#bababa] w-fit">
              Automobile Market in the World{" "}
            </p>
          </div>

          <div className="w-[300px] m-auto md:m-0">
            <h1 className="text-[#f26724] font-semibold text-3xl mb-1">
              Third Largest
            </h1>
            <p className="text-gray-800 border-t-[2px] border-[#bababa] w-fit">
              Lubricant Consuming Country{" "}
            </p>
          </div>
        </div>
      </div>
      <p className="font-normal">
        The number of vehicles on roads is rapidly increasing, with both
        passenger cars and motorcycles witnessing a good demand surge. This
        growth in the automotive industry translates to an increased need for
        lubricants for vehicle maintenance and operations, presenting a
        lucrative market for Gulf Oil to capitalise on.
      </p>
      <div className=" md:flex sm:block items-center md:justify-between  flex-wrap justify-center gap-8 mt-8">
        <img
          src="src/assets/market.png"
          className="md:w-[35%] w-full "
          alt="India"
        />
        <p className="font-normal w-full md:w-[60%] text-lg bg-gray-100 mt-8 rounded-2xl p-4 mb-8">
          The Government of India’s Budget for capital expenditure saw a
          whopping increase of 11.1% and currently stands at H 11.11 lakh crore
          for FY 2025. This is expected to fuel the demand for lubricants across
          various sectors such as infrastructure, construction, manufacturing,
          and transportation. Further, India’s investments in infrastructure
          will rise to J143 trillion between FY 2023-24 and 2030 compared with
          2017-23. <br /> <br />
          India is home to 600+ million people aged between 18 and 35, with 65%
          under the age of 35. This demographic composition will lead to
          sustainable growth in the longer term.
        </p>
      </div>
      <p className="text-[#414141] font-semibold text-left text-xl pt-4 mb-8">
        We, at Gulf Oil see a significant increase in vehicle penetration in the
        coming financial years with rapidly expanding middle class. We plan to
        cater to this growing Internal Combustion Engine (ICE) vehicle market
        leveraging our strengths and expertise in high-quality lubricants and
        advanced technology to provide superior performance and reliability,
        ensuring that our customers receive the best products for their
        vehicles. Additionally, we will focus on expanding our distribution
        network and enhancing customer engagement to meet the evolving needs of
        our consumers in this dynamic market.
      </p>
      <p className="font-normal w-full  text-lg bg-gray-100 mt-8 rounded-2xl p-4 mb-8">
        <span className="text-[#414141] pb-4 font-bold text-xl">
          Exciting Rural Market
        </span>{" "}
        <br />
        We will continue to concentrate on this high-performing segment by
        maintaining an excellent distribution network to ensure product
        availability in rural areas. With strong prospects for the rural economy
        and rising farm incomes, we anticipate a boost in tractor oil sales and
        motor cycle oil sales, allowing us to effectively meet the demands of
        this growing market.
      </p>
    </div>
  );
};

export default MarketOverview;
