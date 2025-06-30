import React from "react";

const directoryData = {
  boardOfDirectors: [
    { name: "Mr. Raj Vikash Verma", role: "Non-executive Chairman and Independent Director" },
    { name: "Mr. D Arulmany", role: "Managing Director and Chief Executive Officer" },
    { name: "Mr. Suresh Subramanian", role: "Non-executive Independent Director" },
    { name: "Mr. Mathew Joseph", role: "Non-executive Independent Director" },
    { name: "Mr. Sankarson Banerjee", role: "Non-executive Independent Director" },
    { name: "Ms. Susan Thomas", role: "Non-executive Independent Director" },
    { name: "Mr. Parin Mehta", role: "Nominee Director" },
    { name: "Ms. Priyamvada Ramkumar", role: "Nominee Director" },
    { name: "Mr. Sudhir Narayanankutty Variyar", role: "Nominee Director" },
    { name: "Mr. P. Surendra Pai", role: "Strategic Advisor" },
    { name: "Mr. J Prakash Rayen", role: "Executive Director, Chief People Officer" },
    { name: "Mr. Naveen Raj R", role: "Chief Financial Officer" },
    { name: "Ms. V Aruna", role: "Company Secretary & Compliance Officer" },
  ],

  bankers: {
    "PSU Banks": [
      "Bank of Baroda", "Bank of Maharashtra", "Canara Bank", "Indian Bank",
      "State Bank of India", "UCO Bank", "Union Bank of India"
    ],
    "Private Sector Banks": [
      "Axis Bank Limited", "Bandhan Bank Limited", "CSB Bank Limited", "Dhanlaxmi Bank Limited",
      "HDFC Bank Limited", "ICICI Bank Limited", "IDBI Bank Limited",
      "IDFC First Bank Limited", "IndusInd Bank Limited", "Karnataka Bank Limited",
      "Kotak Mahindra Bank Limited", "RBL Bank Limited", "South Indian Bank",
      "The Federal Bank Limited", "The Karur Vysya Bank Limited", "Yes Bank Limited"
    ],
    "Small Finance Banks": [
      "AU Small Finance Bank Limited", "Capital Small Finance Bank Limited",
      "Equitas Small Finance Bank Limited", "Ujjivan Small Finance Bank Limited"
    ],
    "Foreign Banks": [
      "Standard Chartered Bank", "The Hongkong and Shanghai Banking Corporation Limited"
    ]
  },

  others: {
    "NBFCs/FIs": [
      "Bajaj Finance Limited", "Nabkisan Finance Limited", "Nabsamruddhi Finance Limited",
      "Small Industries Development Bank of India", "Sundaram Finance Limited",
      "Tata Capital Financial Services Limited"
    ],
    "NCD Holders": [
      "A.K. Capital Finance Ltd", "Axis Mutual Fund Trustee Ltd",
      "BlueOrchard Microfinance Fund", "UNIFI AIF", "NAVAL Group Insurance Fund"
    ],
    "PTC Holders": [
      "Axis Mutual Fund Trustee Ltd", "L&T Finance Holdings Limited",
      "Edge Credit Opportunities Fund I", "Godrej Finance Limited",
      "Nippon Life India Trustee Ltd", "HDFC Asset Management Company Limited",
      "HSBC Mutual Fund", "Kotak Mahindra Mutual Fund"
    ]
  },

  creditRatingAgencies: [
    {
      name: "CARE Ratings Limited",
      address: [
        "4th Floor, Godrej Coliseum",
        "Somaiya Hospital Road",
        "Mumbai – 400 022"
      ],
      href: "" // Add the URL if available
    }
  ],

  debentureTrustees: [
    {
      name: "Catalyst Trusteeship Limited",
      address: [
        "GDA House, Plot No. 85",
        "Bhusari Colony (Right)",
        "Paud Road, Kothrud",
        "Pune – 411 038"
      ],
      phone: "+91 20 66807200 / 223 / 224",
      email: "dt@ctltrustee.com",
      website: "https://www.catalysttrustee.com/"
    },
    {
      name: "Axis Trustee Services Limited",
      address: [
        "The Ruby, 2nd Floor, SW, 29",
        "Senapati Bapat Marg",
        "Dadar west, Mumbai – 400 028"
      ],
      phone: "+91 022 6230 0451",
      email: "debenturetrustee@axistrustee.in",
      website: "https://www.axistrustee.in"
    }
  ],
  creditRatingAgencies: [
    {
      name: "CARE Ratings Limited",
      address: [
        "4th Floor, Godrej Coliseum",
        "Somaiya Hospital Road",
        "Mumbai – 400 022"
      ]
    }
  ],
  registrarAndTransferAgent: [
    {
      name: "KFIN Technologies Limited",
      address: [
        "Selenium Tower B, Plot 31-32, Gachibowli",
        "Financial District, Nanakramguda",
        "Hyderabad – 500 032"
      ]
    }
  ],

};


const Corporate = () => {
  return (
    <div className="w-full bg-[#f2d8cf] text-[#3c3a39]">
      <div className="marginal ">
        <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl  mb-2 border-b-2 border-[#c62033] py-3 inline-block">
          Corporate Information
        </h1>


        {/* Board of Directors */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-3">Board of Directors</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-6 border-b border-[#c62033] pb-6 ">
          {directoryData.boardOfDirectors.map((member, i) => {
            const specialMembers = [
              "Mr. P. Surendra Pai",
              "Mr. J Prakash Rayen",
              "Mr. Naveen Raj R",
              "Ms. V Aruna"
            ];

            const isSpecial = specialMembers.includes(member.name);

            return (
              <div key={i}>
                {isSpecial ? (
                  <>
                    <div className=" border-t border-red-500 pt-3 w-fit">
                      <p className="font-bold text-[#000000] ">{member.role}</p>
                      <p className="font-bold text-[#000000]">{member.name}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-[#000000]">{member.name}</p>
                    <p className="text-md text-gray-700">{member.role}</p>
                  </>
                )}
              </div>
            );
          })}

        </div>

        {/* Bankers */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bankers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6 border-b border-[#c62033] pb-6">
          {Object.entries(directoryData.bankers).map(([category, banks], i) => (
            <div key={i}>
              <p className="font-semibold mb-2">{category}</p>
              <ul className="text-md text-gray-700">
                {banks.map((bank, j) => (
                  <li key={j}>{bank}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* NBFCs & NCD Holders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-6">
          {Object.entries(directoryData.others).map(([category, items], i) => (
            <div key={i}>
              <p className="font-semibold mb-2">{category}</p>
              <ul className="text-md text-gray-700">
                {items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Debenture Trustee */}
        <h2 className=" font-bold mb-4">Debenture Trustee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 border-b border-[#c62033] pb-6">
          {directoryData.debentureTrustees.map((trustee, i) => (
            <div key={i}>
              <p className="">{trustee.name}</p>
              <div className="text-md text-gray-700 space-y-1">
                {trustee.address.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
                <p><strong></strong> {trustee.phone}</p>
                <p>
                  <strong></strong>{" "}
                  <a href={`mailto:${trustee.email}`} className=" text-black">{trustee.email}</a>
                </p>
                <p>
                  <strong></strong>{" "}
                  <a href={trustee.website} target="_blank" rel="noopener noreferrer" className="underline text-black">
                    {trustee.website}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-6 border-b border-[#c62033] pb-6">
          {/* Credit Rating Agencies */}
          <div className="flex-1">
            <h2 className="font-bold mb-4">Credit Rating Agencies</h2>
            {directoryData.creditRatingAgencies.map((agency, i) => (
              <div key={i} className="mb-4">
                <p>{agency.name}</p>
                <div className="text-md text-gray-700 space-y-1">
                  {agency.address.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Registrar & Transfer Agent */}
          <div className="flex-1">
            <h2 className="font-bold mb-4">Registrar & Transfer Agent</h2>
            {directoryData.registrarAndTransferAgent.map((agent, i) => (
              <div key={i} className="mb-4">
                <p>{agent.name}</p>
                <div className="text-md text-gray-700 space-y-1">
                  {agent.address.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6  pb-6">
          {/* Secretarial Auditors */}
          <div>
            <h2 className="font-bold">Secretarial Auditors</h2>
            <p className="font-semibold">M/s M Damodaran & Associates LLP, Chennai</p>
            <hr className="border-t border-[#c62033] mt-2" />
          </div>

          {/* Statutory Auditors */}
          <div>
            <h2 className="font-bold">Statutory Auditors</h2>
            <p className="font-semibold">M/s S. R. Batliboi & Associates LLP Chennai</p>
            <hr className="border-t border-[#c62033] mt-2" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-6 border-b border-[#c62033] pb-6">
          {/* Registered Office */}
          <div className="flex-1">
            <h2 className="font-bold mb-4">Registered Office</h2>
            <div className="text-md text-gray-700 space-y-1">
              <p>SKCL Central Square 1, South and North Wing, 7th Floor</p>
              <p>Unit # C28 - C35, CIPET Road</p>
              <p>Thiru Vi Ka Industrial Estate</p>
              <p>Guindy, Chennai - 600 032</p>
              <p>CIN: U65923TN2015PLC100328</p>
              <p>RBI Regn No: N-07.00810</p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex-1">
            <h2 className="font-bold mb-4">Contact Details</h2>
            <div className="text-sm text-gray-700 space-y-1">
              <p>Phone: +91 44 4615 0011</p>
              <p>Toll Free: 1800-202-9155</p>
              <p>
                Email:{" "}
                <a href="mailto:corporate@veritasfin.in" className="text-black underline">
                  corporate@veritasfin.in
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="http://www.veritasfin.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline"
                >
                  www.veritasfin.in
                </a>
              </p>
            </div>
          </div>
        </div>


      </div>


    </div>
  );
};

export default Corporate;
