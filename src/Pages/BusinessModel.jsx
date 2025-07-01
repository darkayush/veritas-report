import React from "react";

const BusinessModel = () => {
  return (
    <div>
      <div className="marginal ">
        <h1 className="font-bold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-2">
          Business Model
        </h1>
        <div
          className="bg-gradient-to-r bg-clip-text text-transparent font-bold md:text-4xl text-3xl pt-2 pb-2 mb-4 w-fit"
          style={{
            backgroundImage: "linear-gradient(to right, #c9243f, #ee9228)",
          }}
        >
          Innovative solutions and technology integration
        </div>
        <div className=" text-xl mb-4 font-semibold">
          As we mark a decade of dedicated service, we continue to harness the power of
          technology to transform lending for India’s micro and small enterprises. Our digitally driven
          and data-backed operating model is integral to our growth strategy, enabling scalable
          operations, improved risk management and a seamless credit experience to our borrowers.
        </div>
        <div className="mb-5">
          <h1 className="text-xl text-[#c9243f] mb-2 font-bold">
            Digital lending journey
          </h1>
          <div>
            We have adopted a technology-led
            approach that automates the entire
            loan lifecycle, from sourcing and
            credit underwriting to disbursal
            and collections.
            <ul className="list-disc ml-6">
              <li className="mb-2">
                100% digital and paperless sourcing
                and underwriting, ensuring speed and
                accuracy in loan processing
              </li>
              <li className="mb-2">
                OCR-driven KYC for seamless
                identity verification
              </li>
              <li className="mb-2">
                AI/ML-based credit scorecards to
                enhance underwriting precision
                and risk profiling
              </li>
              <li className="mb-2">
                E-signature-enabled documentation for faster and contactless
                execution
              </li>
              <li className="mb-2">
                Fully digital disbursal of loans,
                improving turnaround time
              </li>
              <li className="mb-2">
                Nearly 90% of collections processed
                through UPI and e-NACH mandates,
                ensuring convenience and traceability
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-5">
          <h1 className="text-xl text-[#c9243f] mb-2 font-bold">
            Advanced Underwriting and Risk Models{" "}
          </h1>
          <div>
            Our proprietary credit scorecard
            leverages 400+ borrower data
            points and employs machine
            learning to assign dynamic risk
            scores. These are integrated
            with our rule-engine-based credit
            workflows to determine pricing
            and approval authority. This
            digitised framework supports
            real-time decision-making while
            retaining the ‘high-touch’ human
            engagement model that defines
            our field operations.{" "}
          </div>
        </div>
        <div className="mb-5">
          <h1 className="text-xl text-[#c9243f] mb-2 font-bold">
            Smart Collections with Predictive Insights{" "}
          </h1>
          <div>
            Veritas has implemented
            predictive algorithms to anticipate
            potential defaults and uses tools
            like dynamic QR codes and
            WhatsApp-enabled UPI reminders
            to streamline collections.
            All repayments are digitally
            acknowledged with SMS-based
            receipts, enhancing transparency
            and trust with borrowers.
          </div>
        </div>

        {/* Desktop flex layout for last 3 sections with image */}
        <div className="lg:flex lg:gap-8 lg:items-start mb-5">
          {/* Text content on left */}
          <div className="lg:w-1/2">
            <div className="mb-5">
              <h1 className="text-xl text-[#c9243f] mb-2 font-bold">
                Data-Driven Decision Support{" "}
              </h1>
              <div>
                A central data lake architecture
                collates information from
                across systems and powers
                dashboards accessible across all
                management levels, facilitating
                daily performance monitoring and
                enabling proactive interventions.
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-xl text-[#c9243f] mb-2 font-bold">Infrastructure</h1>
              <div>
                We operate on a hybrid on-premise
                and multi-cloud IT infrastructure,
                supported by ISO 27001:2022
                certified data security protocols.
                Real-time cloud backups and
                automated disaster recovery
                systems ensure business continuity
                and protection from cyber threats.
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-xl text-[#c9243f] mb-2 font-bold">Digital Access</h1>
              <div>
                Our mobile application, available
                in seven regional languages,
                enables borrowers to manage
                EMIs, view loan details and raise
                queries using voice messages
                ensuring accessibility for rural
                customers. We are also piloting
                self-onboarding and paperless
                execution tools to improve
                borrower experience and expand
                our outreach.
              </div>
            </div>
          </div>

          {/* Image on right for desktop */}
          <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-start">
            <div className="w-full">
              <img className="w-full mx-auto" src="/page17.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;