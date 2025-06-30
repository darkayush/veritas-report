import React from 'react'
import ProfileCard from './ProfileCard'
const Executivecommitee = () => {
    const obj=[
         {
    name: "D Arulmany",
    designation: "Founder, Managing Director and Chief Executive Officer",
    text:"Mr. D. Arulmany is the Managing Director and Chief Executive Officer of our Company. He holds a bachelor’s degree in business administration from Madurai Kamaraj University, Madurai, Tamil Nadu and a post graduate diploma in rural management (PGDRM) from Institute of Rural Management, Anand. He has also completed a global programme for management development from University of Michigan Business School, Michigan. He has over 25 years of experience in the financial services industry. Previously, he was associated with Aptus Value Housing Finance India Limited as President and CEO and with Cholamandalam Investment and Finance Company Limited as Business Head.",
    img: "/executive/0.webp"
  },
   {
    name: "J Prakash Rayen",
    designation: "Executive Director-Chief People Officer",
    text: "Mr. Prakash Rayen is the Executive Director & CPO of our Company. He holds a bachelor’s degree in science (Physics) from Madurai Kamaraj University and a master’s degree in computer application from Bharathidasan University, Tiruchirappalli. Prior to joining our Company, he was associated with Aptus Value Housing Finance India Limited as Chief Technology Officer.",
    img: "/executive/1.webp"
  },
  {
    name:"Naveen Raj R",
    designation:"Chief Financial Officer",
    text:"Mr. Naveen Raj R is the Chief Financial Officer of our Company. He is a highly accomplished finance professional with over 20 years of extensive experience in the financial services industry. His career includes notable tenures at some of the most prestigious firms, such as Deloitte, BSR & Co. LLP (KPMG – Audit Wing), and Five-Star Business Finance. He has proficiency spanning across diverse range of financial disciplines, including managing complex capital market transactions, analyzing and mitigating organizational risks. He is a Fellow Member of the Institute of Chartered Accountants of India (FCA) and holds a bachelor of commerce degree from the University of Madras.",
    img:"/executive/2.webp"
  },
  {
name:"Kannan K",
    designation:"Executive Vice President & Business Head - MSME Rural",
    text:"Mr. K. Kannan is the Senior Executive Vice President & Business Head - MSME Rural of our Company. He holds a bachelor’s degree in veterinary sciences from Tamil Nadu Veterinary and Animal Sciences University and a post graduate diploma in agri-business management from Indian Institutes of Management, Ahmedabad. Prior to joining our Company, he has been associated with Axis Bank as Assistant Vice President in Agri & Rural Banking Department and with Yes Bank Limited as Vice President. He has also been associated with Cholamandalam Investment and Finance Company Limited as Associate Vice-President & Head – Agri & Rural Finance.",
    img:"/executive/3.webp"
  },
  {
    name:"Sankar Annamalai",
    designation:"Executive Vice President &Business Head - Home Loans",
    text:"Mr. Sankar Annamalai is the Executive Vice President & Business Head - HL of our Company. He holds a bachelor’s degree in mechanical engineering from College of Engineering, Anna University and a post graduate diploma in management for executives from Indian Institute of Management. Prior to joining our Company, he has been associated with Tata Consultancy Services and Infosys Technologies Limited. He has also been associated with Cholamandalam Investment and Finance Company Limited as Senior Associate Vice President & National Business Manager for their SME vertical.",
    img:"/executive/5.webp"
  },
  ]
  return (
    <div className='sm:w-full marginal'>
        <div className=' max-w-6xl mx-auto my-10'>
            <h1 className="font-semibold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-2">
       Executive Committee
      </h1>
      <div className="bg-gradient-to-r bg-clip-text text-transparent font-semibold md:text-4xl text-3xl pt-2 pb-2 mb-4" style={{ backgroundImage: 'linear-gradient(to right, #c9243f, #ee9228)' }}>
       Paving the path for continued progress
      </div>
      <div className='mb-4 mt-4'>
        <img src="/Executive_main.webp" alt="" />
      </div>
        </div>
{obj.map((board,index) => {
            return <ProfileCard key={index} obj={board}/>;
          })}
    </div>
  )
}

export default Executivecommitee