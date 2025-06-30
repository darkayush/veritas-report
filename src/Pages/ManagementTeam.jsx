import { div } from "framer-motion/client";
import React from "react";

const teamData = [
  {
    name: "Mr. Sekhar Vikas",
    role: "Executive Vice-president and Business Head - MSME Urban",
    img: "/Management/Sekar.webp"
  },
  {
    name: "Mr. R Sathish",
    role: "Senior Vice-president - Business Head - Vehicle Finance",
    img: "/Management/Sathish.webp"
  },
  {
    name: "Mr. Vijay Subramanian R",
    role: "Executive Vice-president - Chief Risk Officer (CRO)",
    img: "/Management/Vijay.webp"
  },
  {
    name: "Ms. Kanchana Srikanth",
    role: "Executive Vice-president and Chief Compliance Officer (CCO)",
    img: "/Management/Kanchana.webp"
  },
  {
    name: "Mr. Christopher Robin",
    role: "EVP and Chief Audit Officer",
    img: "/Management/Christoper.webp"
  },
  {
    name: "Mr. S Parthiban",
    role: "Executive Vice-president-Chief Technology Officer",
    img: "/Management/Mr.-S-Parthiban.webp"
  },
  {
    name: "Mr. M Mahesh",
    role: "Senior Vice-president -Treasury",
    img: "/Management/Mahesh.webp"
  },
  {
    name: "Mr. T E Sudharsan",
    role: "Senior Vice-president - Operations",
    img: "/Management/Mr.-T-E-Sudharsan.webp"
  },
  {
    name: "Mr. Sarath Chandran Damodaran",
    role: "Senior Vice-president - Chief Technical Officer",
    img: "/Management/Sarat.webp"
  },
  {
    name: "Mr. Kumareshan Sivam",
    role: "Senior Vice-president – HR",
    img: "/Management/Kumaresh.webp"
  },
  {
    name: "Mr. Subramoni Bhagavathy",
    role: "Vice-president – Credit",
    img: "/Management/Subramoni.webp"
  },
  {
    name: "Mr. Shankar Subramanian",
    role: "Vice-president – Analytics",
    img: "/Management/Shankar-Subramanian.webp"
  },
  {
    name: "Mr. L. Sridhar",
    role: "Vice-president – Corporate Social Responsibility",
    img: "/Management/Sridhar.webp"
  },
  {
    name: "Ms. S.V. Laxmi",
    role: "Deputy Vice-president – Finance",
    img: "/Management/Laxmi-(1).webp"
  },
  {
    name: "Ms. V. Aruna",
    role: "Company Secretary and Compliance Officer",
    img: "/Management/Aruna.webp"
  }
];

const ManagementTeam = () => {
  return (
    <div className="marginal">
      <div className="bg-[#fde9c6]">

      </div>
      <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-2">
        Core Strategy Group
      </h1>
      <div className="bg-gradient-to-r bg-clip-text text-transparent font-bold md:text-4xl text-3xl pt-2 pb-2 mb-4 w-fit" style={{ backgroundImage: 'linear-gradient(to right, #c9243f, #ee9228)' }}>
        Scaling Ambition with Strategic Foresight
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="border-2 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-gradient-to-br from-red-500 to-yellow-400 flex flex-col"
          >
            <div className="w-full flex justify-center pt-4 bg-gray-200">
              <div className="w-60 h-60 overflow-hidden rounded-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

            </div>
            <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center flex-grow flex flex-col justify-center p-4 min-h-[100px]">
              <h3 className="font-bold text-sm">{member.name}</h3>
              <p className="text-xs leading-tight mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementTeam;
