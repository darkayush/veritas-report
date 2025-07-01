

const AboutVeritas = () => {
  return (
    <>
      <div className="marginal ">
        <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl pt-1">
          About Veritas
        </h1>
        <div className="bg-gradient-to-r bg-clip-text text-transparent font-bold md:text-4xl text-3xl pt-2 pb-2  w-fit" style={{ backgroundImage: 'linear-gradient(to right, #c9243f, #ee9228)' }}>
          Enabling financial empowerment for decades
        </div>
        <div className=" text-xl font-semibold pt-2 mb-4">
          Since inception in 2015, Veritas Finance Limited (formerly known as Veritas
          Finance Private Limited) is focused on meeting the evolving financial
          requirements of the Micro, Small and Medium Enterprises (MSMEs) in India.
        </div>
        <div className="">
          <p className="">
            At Veritas, we act as a key catalyst of financial empowerment for a vast majority of people, especially those at
            the lower end of the socio-economic pyramid, who have remained underserved for decades.
            Our business is run by professionals with rich experience in the financial services industry, making credit
            available to the last-mile citizens and making a positive impact on the lives of millions of Indians.
          </p>
        </div>
      </div>
      <div className="marginal">
        <img
          className="w-full h-auto max-h-[700px] object-cover rounded-2xl"
          src="/home/about_us_img.png"
          alt="About Veritas"
        />
      </div>
    </>

  );
};

export default AboutVeritas;
