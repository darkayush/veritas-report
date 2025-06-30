import React from 'react';
import Carousel from './Carousel';
import Footer from '../Components/Footer/Footer';
const ProvidingNeedBasedCreditSolutions = () => {
    return (
        <>
        <div className="marginal ">
        <h1 className="font-semibold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-3">
        Providing Need Based Credit Solutions
        </h1>
        <div className='mb-5'>
        Our strong on-ground presence
provides simple, accessible and needbased credit solutions that help micro
businesses scale their operations and
geographic presence.
Our offerings help borrowers in the
unorganised sector access working
capital, expand operations and create
better livelihoods. Guided by a customerfirst philosophy, we ensure high levels
of engagement and support at every
step of the credit journey, right from loan
origination to disbursal and repayment.
Sound credit assessment processes,
quick turnaround times and flexible
repayment options position us as a
reliable financial partner. At Veritas,
trust, inclusion and empowerment
define our approach to provide financial
services for India’s Micro, Small and
Medium Enterprises.
        </div>
        <div className='flex flex-col justify-center gap-5 mb-5'>
            <div className='flex flex-col md:flex-row justify-between gap-5'>
            <div>
                <div className=''>
                <img className='w-16' src="/veritas_icons/Vision.webp" alt="" />
                </div>
                <div>
                    <h1 className='text-xl text-[#c9243f] mb-2'>Vision</h1>
                    <div className=''>
                    To be recognised by our fairness,
responsible approach and service
quality as the most admired company
in the inclusive financing space by
all stakeholders.
                    </div>
                </div>
            </div>
            <div>
            <div>
                <img className='w-16' src="/veritas_icons/Mission.webp" alt="" />
                </div>
                <div>
                    <h1 className='text-xl text-[#c9243f] mb-2'>Mission</h1>
                    <div className=''>
                    Make a difference and create positive
impact in the lives of million informal
customers of micro, small and medium
enterprises in India through sustainable
financing solutions.
                    </div>
                </div>
            </div>
            </div>
           <div>
           <div>
           <div>
            <div>
                <img className='w-16' src="/veritas_icons/Values.webp" alt="" />
                </div>
                <div>
                    <h1 className='text-xl text-[#c9243f] mb-2'>Values</h1>
                    <div className=''>
                <Carousel/>
                    </div>
                </div>
            </div>  
           </div>
        </div>
        </div>
        <div className='text-2xl bg-gradient-to-r from-[#c9243f] to-[#faa619] text-transparent bg-clip-text font-extrabold mb-6>
'>
HIGHLIGHTS THAT
REFLECT OUR IMPACT
        </div>
        <div className='p-4 bg-[#ffe1b7] border border-[#c9243f] mb-4 mt-2 rounded-3xl '>
        <div className=''>
        As of 31 March 2025, our Loans
(AUM) aggregated to
<span className='text-black font-bold text-xl'> INR 7, 349 </span>Crores
across our various products.
Our growth is supported
by our diverse product
portfolio, geographic diversity
and proprietary credit
assessment model.
        </div>
        </div>
        </div>
       
        </>
    );
};

export default ProvidingNeedBasedCreditSolutions;