import React from 'react'
import './About.css'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import { motion, useScroll, useTransform } from 'framer-motion';
const About = () => {
    const data = [
        {
            img: "/home/s1.svg",
            title: "~11,500+",
            text: "Bike and Car Stops Pan India",
        },
        {
            img: "/home/s2.svg",
            title: "85,000+ ",
            text: "Touchpoints",
        },
        {
            img: "/home/s3.svg",
            title: "30+",
            text: "2 Central Distribution \nCentres and 30 Depots",
        },
        {
            img: "/home/s4.svg",
            title: "800+",
            text: "Infra-mining Fleet Customers",
        },
        {
            img: "/home/s5.svg",
            title: "12,500+",
            text: "Battery Sales and \nServicing Touchpoints",
        },
        {
            img: "/home/s6.svg",
            title: "500+",
            text: "B2B Customers",
        },
        {
            img: "/home/s7.svg",
            title: "1,40,000 KL",
            text: "Total lubricants \nmanufacturing capacity of \nour two plants (per annum) \n- on 2 shift basis",
        },
        {
            img: "/home/s8.svg",
            title: "2,75,000+ KL",
            text: "Combined AdBlue® \nmanufacturing capacity of \ntwo in-house plants and 13 \nexternal satellite plants",
        },
        {
            img: "/home/s9.svg",
            title: "25+",
            text: "Countries - Export",
        },
        {
            img: "",
            title: "₹3,284 Cr",
            text: "Operational Revenue (10%)",
        },
        {
            img: "",
            title: "₹419 Cr",
            text: "EBITDA (22%)",
        },
        {
            img: "",
            title: "142,000 KL",
            text: "Core Lubricants Sales \nVolume ( 4%) ( 6% without \nfactory fill)",
        },
        {
            img: "",
            title: "₹308 Cr",
            text: "PAT (32%)",
        },
        {
            img: "",
            title: "₹1,295 Cr",
            text: "Net Worth ",
        },
        {
            img: "",
            title: "₹4,618 Cr",
            text: "Market Capitalisation \n(As on March 31, 2024)",
        },
    ]
    const { scrollYProgress } = useScroll();
    const settings = {
        dots: true,
        customPaging: function (i) {
            return (
                <div className="custom-dot">
                    <div className="custom-dot-inner"></div>
                </div>
            );
        },
        dotsClass: "slick-dots custom-dots",
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const x = useTransform(scrollYProgress, [0, 1], ['140%', '-700%']);

    return (
        <div>
            <div className='md:flex md:justify-center md:items-center md:p-0 p-4'>
                <div className='md:w-[49%]'>
                    <div className='md:w-[65%]  md:m-auto'>
                        <div className='mb-5'>
                            <h1 className='w-fit bg-gradient-to-r from-[#FF6C13] to-[#266EFE] text-transparent bg-clip-text m-auto md:m-0 text-5xl md:text-7xl font-semibold'>
                                Gulf Oil India
                            </h1>
                            <h1 className='w-fit bg-gradient-to-r from-[#FF6C13] to-[#266EFE] text-transparent bg-clip-text m-auto md:m-0 text-5xl md:text-7xl font-semibold'>
                                at a Glance
                            </h1>
                        </div>
                        <div className='md:flex flex-wrap md:items-center md:justify-between'>
                            <div className='flex items-center gap-2 my-5 w-fit m-auto md:w-auto md:mx-0'>
                                <div className='w-[70px]'>
                                    <img src="./home/gulf-logo.svg" alt="" />
                                </div>
                                <div >
                                    <h2 className='text-3xl text-[#ff6319] pb-2'>120+ years</h2>
                                    <p className='text-base font-light border-t-[1px] border-black pt-1 text-regular'><span className='border-t-[4px] border-[#10357e] pt-1'>of G</span>lobal Brand History</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 my-5 w-fit m-auto md:w-auto md:mx-0'>
                                <div className='w-[60px]'>
                                    <img src="./home/Employees 1.svg" alt="" />
                                </div>
                                <div >
                                    <h2 className='text-3xl text-[#ff6319] pb-2'>591</h2>
                                    <p className='text-base font-light border-t-[1px] border-black pt-1 text-regular'><span className='border-t-[4px] border-[#10357e] pt-1'>Emp</span>loyees</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 my-5 w-fit m-auto md:w-auto md:mx-0'>
                                <div className='w-[60px]'>
                                    <img src="./home/Partner 1.svg" alt="" />
                                </div>
                                <div >
                                    <h2 className='text-3xl text-[#ff6319] pb-2'>40%</h2>
                                    <p className='text-base font-light border-t-[1px] border-black pt-1 text-regular'><span className='border-t-[4px] border-[#10357e] pt-1'>OEM</span> Partnership</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-[49%] relative'>
                    <img src="./home/bg-rays.svg" alt="" />
                    <img src="./home/msd.png" className='absolute bottom-[0%] left-[42.5%] translate-x-[-50%] w-[78%]' alt="" />
                </div>
            </div>

            <div className="wave-container mt-[70px] mb-5">
                <h1 className='w-fit bg-gradient-to-r from-[#FF6C13] to-[#266EFE] text-transparent bg-clip-text pt-10 pb-2 mx-auto mt-5 text-3xl md:text-6xl font-semibold'>
                    Amongst ‘Top 3 in India’
                </h1>
                <div className='marginal md:flex md:justify-center mt-5 md:items-center text-center'>
                    <div className='md:w-[20%] mb-4 h-[200px]'>
                        <div className='w-[70px] mx-auto mb-3 '>
                            <img src="./home/Lubricants 1.svg" className='w-full' alt="" />
                        </div>
                        <p>
                            Lubricants Brand in India <br /> (As per a Survey <br /> Commissioned by Kantar <br /> IMRB)
                        </p>
                    </div>
                    <div className='md:w-[20%] mb-4 h-[200px]'>
                        <div className='w-[70px] mx-auto mb-3'>
                            <img src="./home/Lubricant-industry 1.svg" className='w-full' alt="" />
                        </div>
                        <p>
                            Player among private sector in <br /> the Indian Lubricant industry <br />(Automotive and Industrial <br /> segments)
                        </p>
                    </div>
                    <div className='md:w-[20%] mb-4 h-[200px]'>
                        <div className='w-[70px] mx-auto mb-3'>
                            <img src="./home/Distribution-reach 1.svg" className='w-full' alt="" />
                        </div>
                        <p>
                            Company in Distribution <br /> Reach
                        </p>
                    </div>
                </div>
                <div className='w-full md:relative h-fit'>
                    <img src="./home/road.svg" className='w-full' alt="" />
                    <motion.img
                        src="./home/Car 1.png"
                        className='absolute w-[150px] bottom-[1%] md:w-auto md:top-[0%] right-10'
                        alt="Car"
                        style={{ x }} // Apply horizontal movement to the car
                    />
                </div>
            </div>
            <div className='marginal'>
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="!flex items-center my-5 w-fit h-[250px] m-auto md:w-fit md:mx-0 "
                        >
                            {/* Image Box */}
                            <div className="w-[80px] h-full flex items-center justify-center">
                                {item.img && (
                                    <img src={item.img} alt={`Slide ${index + 1}`} className="w-[70px] object-contain" />
                                )}
                            </div>

                            {/* Content Box */}
                            <div className="w-fit p-4">
                                <h3 className="text-3xl font-semibold text-[#ff6319] pb-2">{item.title}</h3>
                                <p className="whitespace-pre text-xl font-light border-t-[1px] border-black pt-1">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className=''>
                <div className='my-5 md:flex md:justify-between marginal '>
                    <div className='md:w-[24%] z-[1]'>
                        <h4 className='text-[#FF6C13] mb-1 w-fit m-auto text-xl font-semibold'>Quarter 1</h4>
                        <img src="./home/q1.png" className='m-auto' alt="" />
                    </div>
                    <div className='md:w-[24%] z-[1]'>
                        <h4 className='text-[#FF6C13] mb-1 w-fit m-auto text-xl font-semibold'>Quarter 2</h4>
                        <img src="./home/q2.png" className='m-auto' alt="" />
                    </div>
                    <div className='md:w-[24%] z-[1]'>
                        <h4 className='text-[#FF6C13] mb-1 w-fit m-auto text-xl font-semibold'>Quarter 3</h4>
                        <img src="./home/q3.png" className='m-auto' alt="" />
                    </div>
                    <div className='md:w-[24%] z-[1]'>
                        <h4 className='text-[#FF6C13] mb-1 w-fit m-auto text-xl font-semibold'>Quarter 4</h4>
                        <img src="./home/q4.png" className='m-auto' alt="" />
                    </div>
                </div>
                <div className="oil-container  z-[-1] bottom-[-70%]">
                    <video autoPlay muted loop
                    className='md:mt-[-100px]'
                        style={{
                            width: "100%",
                            opacity: 0.7,
                            zIndex: -1
                        }}
                    >
                        <source src="./home/olive-oil-pours-in-a-stream-with-splashes-2023-11-27-04-59-07-utc_1.webm" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default About