import React from 'react'
import ProfileCard from './ProfileCard'
const Profile = () => {
    const obj=[
         {
    name: "Raj Vikash Verma",
    designation: "Chairman and Non-executive Independent Director",
    text: "Mr. Raj Vikash Verma is the Chairman and Non-Executive Independent Director of our Company. He holds a bachelor’s degree in Economics (Honours) from Hindu College, University of Delhi, Delhi and a master’s degree in Economics from The Delhi School of Economics, University of Delhi, Delhi. He also holds a master’s degree in business administration from University of Delhi, Delhi. He is also a member of the Indian Institute of Banking and Finance. He has over 34 years of experience in banking. Prior to joining our Company, he served as the whole time member and the officiating Chairperson of the Pension Fund Regulatory and Development Authority and as the Chairman and Managing Director of the National Housing Bank. He was also associated with Central Registry of Securitisation Asset Reconstruction and Security Interest of India as Registrar, Managing Director and Chief Executive Officer.",
    img: "/home/Raj.webp"
  },
   {
    name: "D. Arulmany",
    designation: "Managing Director and CEO",
    text: "Mr. D. Arulmany is the Managing Director and Chief Executive Officer of our Company. He holds a bachelor’s degree in business administration from Madurai Kamaraj University, Madurai, Tamil Nadu and a post graduate diploma in rural management (PGDRM) from Institute of Rural Management, Anand. He has also completed a global programme for management development from University of Michigan Business School, Michigan. He has over 25 years of experience in the financial services industry. Previously, he was associated with Aptus Value Housing Finance India Limited as President and CEO and with Cholamandalam Investment and Finance Company Limited as Business Head.",
    img: "/home/Arul.webp"
  },
  {
    name:"Suresh Subramanian",
    designation:"Non-executive Independent Director",
    text:"Mr. Suresh Subramanian is a Non-Executive Independent Director of our Company. He holds a bachelor’s degree in commerce (Honours) from University of Delhi, Delhi. He is also a fellow member of the Institute of Chartered Accountants of India. He has experience in auditing and accounting. Prior to joining our Company, he was associated with S. R. Batliboi and Associates LLP as a Partner with their assurance practice.",
    img:"/home/Suresh.webp"
  },
  {
name:"Mathew Joseph",
    designation:"Non-executive Independent Director",
    text:"Mr Mathew Joseph is a Non-Executive Independent Director of our Company. He is a member of the Institute of Chartered Accountants of India. He has over 36 years of experience in the financial industry. Prior to joining our Company, he was associated with HDFC Bank Limited as the member of Executive Management and Chief Risk Officer.",
    img:"/home/Mathew-Joseph.webp"
  },
  {
    name:"Dr. Susan Thomas",
    designation:"Non-executive Independent Director",
    text:"Dr. Susan Thomas is a Non-Executive Independent Director of our Company. She holds a bachelor’s degree in Arts from The Women’s Christian College, University of Madras, Chennai and a master’s degree in Arts from University of Madras, Chennai. She also holds a doctor of philosophy from Indian Institute of Technology, Madras, Chennai. She has over 18 years experience in Human Resources. Prior to joining our Company, she was associated with Loyola Institute of Business Administration as Associate Professor (Human Resource), with Murugappa group as the Head – Group Human Resource Department and with Sundram Fasteners Limited as Executive Vice-president – Human Resource.",
    img:"/home/Dr.-Susan-Thomas.webp"
  },
  {
    name:"Sankarson Banerjee",
    designation:"Non-executive Independent Director",
    text:"Mr. Sankarson Banerjee is a Non-Executive Independent Director of our Company. He holds a bachelor’s degree in engineering from Indian Institute of Kharagpur, West Bengal and a post-graduate diploma in management from Indian Institute of Management, Calcutta, West Bengal. He has over 20 years of experience in IT sector. Prior to joining our Company, he was associated with RBL Bank in the capacity of Chief Information Officer, with National Stock Exchange of India Limited in the capacity of Chief Technology Officer - Projects and with India Infoline Limited as Chief Information Officer. He was also associated with Mphasis, Accenture, IBM and Pantaloon Retail (India) Limited. He is currently serving on the Board of Zerodha Trustee Private Limited as an independent Director. He is also on the Board of Nuvama Wealth Limited and Epimoney Private Limited.",
    img:"/home/Sankarson-Banerjee.png"
  },
  {
    name:"Priyamvada Ramkumar",
    designation:"Non-Executive Nominee Director, Lok Capital Growth Fund",
    text:"Ms. Priyamvada Ramkumar is a Non-Executive Nominee Director of our Company. She holds a bachelor’s degree in commerce from Stella Maris College, Chennai, Tamil Nadu and a postgraduate diploma in business management from XLRI School of Management, Jamshedpur, Jharkhand. She has over 18 years of experience in investment and commercial banking. Previously, she has been associated with Veda Corporate Advisors Private Limited as Vice-president and ABN Amro Bank N.V., as Assistant Relationship Manager (Commercial Banking).",
    img:"/home/Priyamvada-Ramkumar.png"
},
{
    name:"Parin Mehta",
    designation:"Non-executive Nominee Director, Kedaara Capital Fund II LLP",
    text:"Mr. Parin Nalin Mehta is a Non-Executive Nominee Director of our Company. He holds a bachelor’s degree in electronics and telecommunication engineering from Vivekanand Education Society’s Institute of Technology, University of Mumbai, Mumbai, Maharashtra and a post graduate diploma in business management (finance) from Sydenham Institute of Management Studies and Research and Entrepreneurship Education, Mumbai, Maharashtra. He has over 19 years of experience in private equity. Prior to joining our Company, he was associated with General Atlantic Partners Private Limited as Analyst with their investment advisory team. He was also associated with McKinsey Knowledge Centre (I) Private Limited and Cap Gemini Ernest and Young Consulting India Private Limited. He is currently serving on the Board of Great Software Laboratory Private Limited and Gavs Technologies Private Limited.",
    img:"/home/Parin-Nalin-Mehta.png"
},
{
    name:"Sudhir Narayanankutty Variyar",
    designation:"Non-executive Nominee Director, Multiples Private Equity Fund III",
    text:"Mr. Sudhir Narayanankutty Variyar is a Non-Executive Nominee Director of our Company. He holds a bachelor’s degree in chemical engineering from Banaras Hindu University, Uttar Pradesh and a post graduate diploma (PGDM) form Indian Institute of Management, Calcutta, West Bengal. He is currently serving as Managing Director and Deputy CEO of Multiples Alternate Asset Management Limited since 2009. Prior to Multiples, he has had over 15 years of experience in investment banking, structured finance, corporate finance and credit rating.",
    img:"/home/Sudhir-Narayanankutty-Variyar.png"

}
  

]
  return (
    <div className='sm:w-full marginal'>
        <div className='  max-w-6xl mx-auto my-10'>
            <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-2">
        Board of Directors
      </h1>
      <div className="bg-gradient-to-r bg-clip-text text-transparent font-bold md:text-4xl text-3xl pt-2 pb-2 mb-4 w-fit" style={{ backgroundImage: 'linear-gradient(to right, #c9243f, #ee9228)' }}>
       Leading with experience and expertise
      </div>
        </div>
{obj.map((board,index) => {
            return <ProfileCard key={index} obj={board}/>;
          })}
    </div>
  )
}

export default Profile