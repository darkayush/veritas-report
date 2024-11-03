import React from 'react'

const BoardOfDir = () => {
    return (
        <div className='marginal'>
            <h1 className="text-[#f26724] font-semibold text-center md:text-5xl text-3xl pt-4">
                {" "}
                Board of Directors{" "}
            </h1>
            <h1 className="text-[#10357f] font-semibold text-center text-4xl pt-4 mb-8">
                Fostering Shared Success
            </h1>
            <p className='text-center text-xl'>Our esteemed Board of Directors at Gulf Oil provides strategic guidance, driving our corporate vision, governance excellence, and continued success for all our key imperatives.</p>
            <div className='my-4 md:flex flex-wrap md:justify-between'>
                <div className='w-[25%]'>
                    <img src="./other/b1.webp" alt="" />
                </div>
                <div className='w-[25%]'>
                    <img src="./other/b2.webp" alt="" />
                </div>
                <div className='w-[25%]'>
                    <img src="./other/b3.webp" alt="" />
                </div>
            </div>
            <img src="./other/kp1.png" className='md:w-[35%]' alt="" />

            <div className='my-4 md:flex flex-wrap md:justify-between'>
                <div className='w-[25%]'>
                    <img src="./other/b4.webp" alt="" />
                </div>
                <div className='w-[25%]'>
                    <img src="./other/b5.webp" alt="" />
                </div>
                <div className='w-[25%]'>
                    <img src="./other/b6.webp" alt="" />
                </div>
                </div>
            <img src="./other/kp2.png" className='md:w-[35%]' alt="" />
        </div>
    )
}

export default BoardOfDir