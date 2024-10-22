// import React from 'react'

// function RefundPolicy() {
//   return (
//     <div>RefundPolicy</div>
//   )
// }

// export default RefundPolicy

import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-8">
          <div className="space-y-6 text-center">
            <h1
              className="flex justify-center text-4xl font-bold mb-8 text-[54px] bg-clip-text sm:text-5xl sm:leading-[50px]
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent"
            >
              Our Commitment to You
            </h1>

            <section className="space-y-2">
              <p className="text-gray-600">
                At Quickfunded Ltd, we are dedicated to safeguarding your
                privacy and providing transparent and reliable funding services.
                Our refund policy ensures fairness and clarity in all
                refund-related matters.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Data Collection
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700">
                  What Information Do We Collect and How?
                </h3>
                <ul className="space-y-2 text-gray-600 list-none">
                  <li>
                    • Account Information: To access our services, we collect
                    identifying information such as name, address, date of
                    birth, and email address.
                  </li>
                  <li>
                    • Identification Information: We may require documents for
                    verification, including identity cards, passports, and proof
                    of address.
                  </li>
                  <li>
                    • Profile Information: Your username and password are
                    collected for secure access.
                  </li>
                  <li>
                    • Transaction Information: For payments, we collect
                    beneficiary details and transaction data.
                  </li>
                  <li>
                    • KYC/AML Information: Additional evidence may be requested
                    to comply with legal obligations.
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Information from Website Usage and Partner Apps
              </h2>
              <ul className="space-y-2 text-gray-600 list-none">
                <li>
                  • We use cookies for a better website experience and fraud
                  prevention.
                </li>
                <li>
                  • User sessions are recorded to improve services and product
                  development.
                </li>
                <li>
                  • Device and usage information is collected to enhance
                  security and detect fraud.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Public Information
              </h2>
              <p className="text-gray-600">
                • Non-registered users may be contacted using publicly available
                information or data from third parties, with consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Third-Party Data
              </h2>
              <ul className="space-y-2 text-gray-600 list-none">
                <li>
                  • We verify information with anti-fraud agencies and
                  electronic identity verification services.
                </li>
                <li>
                  • Data may also be obtained from credit reference agencies.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Communication and Security
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700">
                  Call Recording and Correspondence
                </h3>
                <p className="text-gray-600">
                  • All calls are recorded and correspondence retained for
                  quality control and regulatory compliance.
                </p>

                <h3 className="text-lg font-medium text-gray-700">
                  Security Measures
                </h3>
                <p className="text-gray-600">
                  • Data is stored securely both electronically and physically,
                  with restricted access and up-to- date security measures.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Sharing Your Information
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700">
                  Limited Access
                </h3>
                <p className="text-gray-600">
                  • Personal information is only shared with those who have a
                  genuine business need to know.
                </p>

                <h3 className="text-lg font-medium text-gray-700">
                  Third-Party Sharing
                </h3>
                <p className="text-gray-600">
                  • Personal data is occasionally shared with external auditors,
                  professional advisers, law enforcement agencies, and other
                  relevant parties, ensuring confidentiality.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                International Data Transfers
              </h2>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-700">
                  Consideration of Data Protection Laws
                </h3>
                <p className="text-gray-600">
                  • We take into account varying data protection laws when
                  transferring personal data outside the UK and the European
                  Economic Area.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Data Retention
              </h2>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-700">
                  Retention Period
                </h3>
                <p className="text-gray-600">
                  • Information is retained for as long as necessary to fulfill
                  legal, regulatory, and operational requirements.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Your Rights
              </h2>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-700">
                  Withdrawal of Consent
                </h3>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
