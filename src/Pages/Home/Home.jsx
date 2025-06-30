import React from 'react'
import Cover from '../../Components/Cover/Cover'
import About from '../../Components/About/About'
import Message from '../../Components/Message/Message'
import Customers from '../../Components/Customers/Customers'
import CsrEsg from '../../Components/Csr-Esg/CsrEsg'
import BodSlider from '../../Components/BodSlider/BodSlider'
import Timeline from '../../Components/Timeline/TimelineCarousel'
import Footprint from '../../Components/Footprint/Footprint'
import Buisiness_High from '../../Components/Buisiness/Buisiness_High'
import Buisiness_main from '../../Components/Buisiness/Buisiness_main'
import BodSlider2 from '../../Components/BodSlider/BodSlider2'
const Home = () => {
  const allItems = [
    { value: "1557.40", label: "Total Revenue", showCrores: true },
    { value: "292.19", label: "Profit After Tax (PAT)", showCrores: true },
    { value: "7348.64", label: "Loan Assets Under Management (AUM)", showCrores: true },
    { value: "11.52", label: "Return on Equity (%)" },
    { value: "438", label: "Branch Network" },
    { value: "7796", label: "Employees" },
  ];
  const boardMembers = [
  {
    id:1,
    name: "Raj Vikash Verma",
    role: "Chairman and Non-executive Independent Director",
    image: "/home/Raj.webp",
  },
  {
    id:2,
    name: "D. Arulmany",
    role: "Managing Director and CEO",
    image: "/home/Arul.webp",
  },
  {
    id:3,
    name: "Suresh Subramanian",
    role: "Non-executive Independent Director",
    image: "/home/Suresh.webp",
  },
  {
    id:4,
    name: "Mathew Joseph",
    role: "Non-executive Independent Director",
    image: "/home/Mathew-Joseph.png",
  },
  {
    id:5,
    name: "Dr. Susan Thomas",
    role: "Independent Director",
    image: "/home/Dr.-Susan-Thomas.png",
  },
  {
    id:6,
    name: "Sankarson Banerjee",
    role: "Non-executive Independent Director",
    image: "/home/Sankarson-Banerjee.png",
  },
  {
    id:7,
    name: "Priyamvada Ramkumar",
    role: "Non-Executive Nominee Director and Lok Capital Growth Fund",
    image: "/home/Priyamvada-Ramkumar.png",
  },
  {
    id:8,
    name: "Parin Mehta",
    role: "Non-executive Nominee Director, Kedaara Capital Fund II LLP",
    image: "/home/Parin-Mehta.png",
  },
  {
    id:9,
    name: "Sudhir Narayanankutty Variyar",
    role: "Non-executive Nominee Director, Multiples Private Equity Fund III",
    image: "/home/Sudhir-Narayanankutty-Variyar.png",
  }
];
const Executivecommitee = [
         {
          id:10,
    name: "D Arulmany",
    role: "Founder, Managing Director and Chief Executive Officer",
    // text:"Mr. D. Arulmany is the Managing Director and Chief Executive Officer of our Company. He holds a bachelor’s degree in business administration from Madurai Kamaraj University, Madurai, Tamil Nadu and a post graduate diploma in rural management (PGDRM) from Institute of Rural Management, Anand. He has also completed a global programme for management development from University of Michigan Business School, Michigan. He has over 25 years of experience in the financial services industry. Previously, he was associated with Aptus Value Housing Finance India Limited as President and CEO and with Cholamandalam Investment and Finance Company Limited as Business Head.",
    image: "/executive/0.webp"
  },
   {
    id:11,
    name: "J Prakash Rayen",
    role: "Executive Director-Chief People Officer",
    // text: "Mr. Prakash Rayen is the Executive Director & CPO of our Company. He holds a bachelor’s degree in science (Physics) from Madurai Kamaraj University and a master’s degree in computer application from Bharathidasan University, Tiruchirappalli. Prior to joining our Company, he was associated with Aptus Value Housing Finance India Limited as Chief Technology Officer.",
    image: "/executive/1.webp"
  },
  {
    id:12,
    name:"Naveen Raj R",
    role:"Chief Financial Officer",
    // text:"Mr. Naveen Raj R is the Chief Financial Officer of our Company. He is a highly accomplished finance professional with over 20 years of extensive experience in the financial services industry. His career includes notable tenures at some of the most prestigious firms, such as Deloitte, BSR & Co. LLP (KPMG – Audit Wing), and Five-Star Business Finance. He has proficiency spanning across diverse range of financial disciplines, including managing complex capital market transactions, analyzing and mitigating organizational risks. He is a Fellow Member of the Institute of Chartered Accountants of India (FCA) and holds a bachelor of commerce degree from the University of Madras.",
    image:"/executive/2.webp"
  },
  {
    id:13,
name:"Kannan K",
    role:"Executive Vice President & Business Head - MSME Rural",
    // text:"Mr. K. Kannan is the Senior Executive Vice President & Business Head - MSME Rural of our Company. He holds a bachelor’s degree in veterinary sciences from Tamil Nadu Veterinary and Animal Sciences University and a post graduate diploma in agri-business management from Indian Institutes of Management, Ahmedabad. Prior to joining our Company, he has been associated with Axis Bank as Assistant Vice President in Agri & Rural Banking Department and with Yes Bank Limited as Vice President. He has also been associated with Cholamandalam Investment and Finance Company Limited as Associate Vice-President & Head – Agri & Rural Finance.",
    image:"/executive/3.webp"
  },
  {
    id:14,
    name:"Sankar Annamalai",
    role:"Executive Vice President &Business Head - Home Loans",
    // text:"Mr. Sankar Annamalai is the Executive Vice President & Business Head - HL of our Company. He holds a bachelor’s degree in mechanical engineering from College of Engineering, Anna University and a post graduate diploma in management for executives from Indian Institute of Management. Prior to joining our Company, he has been associated with Tata Consultancy Services and Infosys Technologies Limited. He has also been associated with Cholamandalam Investment and Finance Company Limited as Senior Associate Vice President & National Business Manager for their SME vertical.",
    image:"/executive/5.webp"
  },
  ]
  return (
    <div>
        <Cover/>
        <About/>
        <Message/>
        <Timeline/>
        <div className='md:mt-20'>
        <Footprint/>
        </div>
        <div className='md:mt-15'>
        <Buisiness_main allItems={allItems}/>
        </div>
        {/* <BodSlider/> */}
        <BodSlider people={boardMembers}  />
       
         <BodSlider2 people={Executivecommitee}/>
      
    </div>
  )
}

export default Home