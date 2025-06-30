import React from 'react'
// import board_leader from '../bod'
// import leader_team from '../leadership'
import { motion } from "framer-motion";
import { useParams } from 'react-router-dom';

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.4 },
  },
};

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const IndividualCard = ({}) => {
     const allItems = [
    { value: "1557.40", label: "Total Revenue", showCrores: true },
    { value: "292.19", label: "Profit After Tax (PAT)", showCrores: true },
    { value: "7348.64", label: "Loan Assets Under Management (AUM)", showCrores: true },
    { value: "11.43", label: "Return on Equity (%)" },
    { value: "438", label: "Branch Network" },
    { value: "7796", label: "Employees" },
  ];
  const boardMembers = [
    {
        id:1,
    name: "Raj Vikash Verma",
    role: "Chairman and Non-executive Independent Director",
    text: "Mr. Raj Vikash Verma is the Chairperson and Non-Executive Independent Director of our Company. He holds a bachelor’s degree in Economics (Honours) from Hindu College, University of Delhi, Delhi and a master’s degree in Economics from The Delhi School of Economics, University of Delhi, Delhi. He also holds a master’s degree in business administration from University of Delhi, Delhi. He is also a member of the Indian Institute of Banking and Finance. He has over 34 years of experience in banking. Prior to joining our Company, he served as the whole time member and the officiating Chairperson of the Pension Fund Regulatory and Development Authority and as the Chairman and Managing Director of the National Housing Bank. He was also associated with Central Registry of Securitization Asset Reconstruction and Security Interest of India as Registrar, Managing Director and Chief Executive Officer.",
    image: "/home/Raj.webp"
  },
   {
    id:2,
    name: "D. Arulmany",
    role: "Managing Director and CEO",
    text: "Mr. D. Arulmany is the Managing Director and Chief Executive Officer of our Company. He holds a bachelor’s degree in business administration from Madurai Kamaraj University, Madurai, Tamil Nadu and a Post Graduate Diploma in Rural Management from (PGDRM) Institute of Rural Management, Anand. He has also completed a global programme for management development from University of Michigan Business School, Michigan. He has over 25 years of experience in the financial services industry. Previously, he was associated with Aptus Value Housing Finance India Limited as President and CEO and with Cholamandalam Investment and Finance Company Limited as Manager (Marketing).",
    image: "/home/Arul.webp"
  },
  {
    id:3,
    name:"Suresh Subramanian",
    role:"Non-executive Independent Director",
    text:"Mr. Suresh Subramanian is a Non-executive Independent Director of our Company. He holds a bachelor’s degree in commerce (Honours) from University of Delhi, Delhi. He is also a fellow member of the Institute of Chartered Accountants of India. He has over 7 years of experience in auditing and accounting. Prior to joining our Company, he was associated with S. R. Batliboi and Associates LLP as a Partner with their assurance practice.",
    image:"/home/Suresh.webp"
  },
  {
    id:4,
name:"Mathew Joseph",
    role:"Non-executive Independent Director",
    text:"Mr Mathew Joseph is a Non-executive Independent Director of our Company. He is a member of the Institute of Chartered Accountants of India. He has over 36 years of experience in the financial industry. Prior to joining our Company, he was associated with HDFC Bank Limited as the member of Executive Management and Chief Risk Officer.",
    image:"/home/Mathew-Joseph.webp"
  },
  {
    id:5,
    name:"Dr. Susan Thomas",
    role:"Non-executive Independent Director",
    text:"Dr. Susan Thomas is a Non-executive Independent Director of our Company. She holds a bachelor’s degree in Arts from The Women’s Christian College, University of Madras, Chennai and a master’s degree in Arts from University of Madras, Chennai. She also holds a doctor of philosophy from Indian Institute of Technology, Madras, Chennai. She has over 18 years of experience in Human Resources. Prior to joining our Company, she was associated with Loyola Institute of Business Administration as Associate Professor (Human Resource), with Murugappa group as the Head – Group Human Resource Department and with Sundram Fasteners Limited as Executive Vice-president – Human Resource.",
    image:"/home/Dr.-Susan-Thomas.webp"
  },
  {
    id:6,
    name:"Sankarson Banerjee",
role:"Non-executive Independent Director",
    text:"Mr. Sankarson Banerjee is a Non-executive Independent Director of our Company. He holds a bachelor’s degree in engineering from Indian Institute of Kharagpur, West Bengal and a post-graduate diploma in management from Indian Institute of Management, Calcutta, West Bengal. He has over 20 years of experience in IT sector. Prior to joining our Company, he was associated with RBL Bank in the capacity of Chief Information Officer, with National Stock Exchange of India Limited in the capacity of Chief Technology Officer - Projects and with India Infoline Limited as Chief Information Officer. He was also associated with Mphasis, Accenture, IBM and Pantaloon Retail (India) Limited. He is currently serving on the Board of Zerodha Trustee Private Limited as an independent Director. He is also on the Board of Nuvama Wealth Limited and Epimoney Private Limited.",
    image:"/home/Sankarson-Banerjee.png"
  },
  {
    id:7,
    name:"Priyamvada Ramkumar",
    role:"Non-Executive Nominee Director and Lok Capital Growth Fund",
    text:"Ms. Priyamvada Ramkumar is a Non-executive Nominee Director of our Company. She holds a bachelor’s degree in commerce from Stella Maris College, Chennai, Tamil Nadu and a postgraduate diploma in business management from XLRI School of Management, Jamshedpur, Jharkhand. She has over 18 years of experience in investment and commercial banking. Previously, she has been associated with Veda Corporate Advisors Private Limited as Vice-president and ABN Amro Bank N.V., as Assistant Relationship Manager (Commercial Banking).",
    image:"/home/Priyamvada-Ramkumar.png"
},
{
    id:8,
    name:"Parin Mehta",
    role:"Non-executive Nominee Director, Kedaara Capital Fund II LLP",
    text:"Mr. Parin Nalin Mehta is a Non-executive Nominee Director of our Company. He holds a bachelor’s degree in electronics and telecommunication engineering from Vivekanand Education Society’s Institute of Technology, University of Mumbai, Mumbai, Maharashtra and a post graduate diploma in business management (finance) from Sydenham Institute of Management Studies and Research and Entrepreneurship Education, Mumbai, Maharashtra. He has over 21 years of experience in private equity. Prior to joining our Company, he was associated with General Atlantic Partners Private Limited as Analyst with their investment advisory team. He was also associated with McKinsey Knowledge Centre (I) Private Limited and Cap Gemini Ernest and Young Consulting India Private Limited. He is currently serving on the Board of Great Software Laboratory Private Limited and Gavs Technologies Private Limited.",
    image:"/home/Parin-Mehta.png"
},
{
    id:9,
    name:"Sudhir Narayanankutty Variyar",
    role:"Non-executive Nominee Director, Multiples Private Equity Fund III",
    text:"Mr. Sudhir Narayanankutty Variyar is a Non-Executive Nominee Director of our Company. He holds a bachelor’s degree in chemical engineering from Banaras Hindu University, Uttar Pradesh and a post graduate diploma (PGDM) form Indian Institute of Management, Calcutta, West Bengal. He is currently serving as Managing Director and Deputy CEO of Multiples Alternate Asset Management Limited since 2009. Prior to Multiples, he has had over 15 years of experience in investment banking, structured finance, corporate finance and credit rating.",
    image:"/home/Sudhir-Narayanankutty-Variyar.png"

}
];
const Executivecommitee = [
         {
            id:10,
    name: "D Arulmany",
    role: "Founder, Managing Director and Chief Executive Officer",
    text:"Mr. D. Arulmany is the Managing Director and Chief Executive Officer of our Company. He holds a bachelor’s degree in business administration from Madurai Kamaraj University, Madurai, Tamil Nadu and a post graduate diploma in rural management (PGDRM) from Institute of Rural Management, Anand. He has also completed a global programme for management development from University of Michigan Business School, Michigan. He has over 25 years of experience in the financial services industry. Previously, he was associated with Aptus Value Housing Finance India Limited as President and CEO and with Cholamandalam Investment and Finance Company Limited as Business Head.",
    image: "/executive/0.webp"
  },
   {
    id:11,
    name: "J Prakash Rayen",
role: "Executive Director-Chief People Officer",
    text: "Mr. Prakash Rayen is the Executive Director & CPO of our Company. He holds a bachelor’s degree in science (Physics) from Madurai Kamaraj University and a master’s degree in computer application from Bharathidasan University, Tiruchirappalli. Prior to joining our Company, he was associated with Aptus Value Housing Finance India Limited as Chief Technology Officer.",
    image: "/executive/1.webp"
  },
  {
    id:12,
    name:"Naveen Raj R",
    role:"Chief Financial Officer",
    text:"Mr. Naveen Raj R is the Chief Financial Officer of our Company. He is a highly accomplished finance professional with over 20 years of extensive experience in the financial services industry. His career includes notable tenures at some of the most prestigious firms, such as Deloitte, BSR & Co. LLP (KPMG – Audit Wing), and Five-Star Business Finance. He has proficiency spanning across diverse range of financial disciplines, including managing complex capital market transactions, analyzing and mitigating organizational risks. He is a Fellow Member of the Institute of Chartered Accountants of India (FCA) and holds a bachelor of commerce degree from the University of Madras.",
    image:"/executive/2.webp"
  },
  {
    id:13,
name:"Kannan K",
    role:"Executive Vice President & Business Head - MSME Rural",
    text:"Mr. K. Kannan is the Senior Executive Vice President & Business Head - MSME Rural of our Company. He holds a bachelor’s degree in veterinary sciences from Tamil Nadu Veterinary and Animal Sciences University and a post graduate diploma in agri-business management from Indian Institutes of Management, Ahmedabad. Prior to joining our Company, he has been associated with Axis Bank as Assistant Vice President in Agri & Rural Banking Department and with Yes Bank Limited as Vice President. He has also been associated with Cholamandalam Investment and Finance Company Limited as Associate Vice-President & Head – Agri & Rural Finance.",
    image:"/executive/3.webp"
  },
  {
    id:14,
    name:"Sankar Annamalai",
    role:"Executive Vice President &Business Head - Home Loans",
    text:"Mr. Sankar Annamalai is the Executive Vice President & Business Head - HL of our Company. He holds a bachelor’s degree in mechanical engineering from College of Engineering, Anna University and a post graduate diploma in management for executives from Indian Institute of Management. Prior to joining our Company, he has been associated with Tata Consultancy Services and Infosys Technologies Limited. He has also been associated with Cholamandalam Investment and Finance Company Limited as Senior Associate Vice President & National Business Manager for their SME vertical.",
    image:"/executive/5.webp"
  },
  ]
  const {id}=useParams();
  let obj=boardMembers[0];
  if(id<=9){
  obj=boardMembers.find((leader)=>leader.id.toString()===id);
  }
  else{
    obj=Executivecommitee.find((leader)=>leader.id.toString()===id);
  }
  return (
    <>
   <div className="w-full max-w-6xl mx-auto my-10">
       
      <motion.div
        className=" bg-[#fff5f4] rounded-2xl overflow-visible shadow-md flex flex-col md:flex-row items-stretch relative justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={parentVariants}
      >
        {/* Left Column */}
        <div className="md:w-1/3 w-full flex flex-col bg-white border border-[#ff7f50] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
          <motion.div
            className="w-full"
            variants={imageVariants}
          >
            <img
              src={obj.image}
              alt={obj.name}
              className="w-full h-auto object-cover"
            />
          </motion.div>
  
          {/* Footer name section under image */}
          <div className="bg-gradient-to-r from-[#da1f3d] to-[#f9a23a] text-white p-4">
          <div className="relative pl-6">
    {/* Dot and line */}
    <div className="absolute left-0 top-0 flex flex-col items-center">
      <div className="w-px h-8 bg-white mt-1"></div>
      <div className="w-2 h-2 bg-white rounded-full"></div>
     
  
    </div>
  
    {/* Text */}
    <h2 className="text-lg font-bold">{obj.name}</h2>
    <h3 className="text-sm font-medium">{obj.role}</h3>
  </div>
  
          </div>
        </div>
  
        {/* Right Column (Text Content) */}
        <motion.div
          className="md:w-2/3 w-full p-6 flex flex-col justify-center text-black"
          variants={textVariants}
        >
          <p className="text-base md:text-lg leading-relaxed">{obj.text}</p>
        </motion.div>
      </motion.div>
      </div>
      </>
  )
}

export default IndividualCard