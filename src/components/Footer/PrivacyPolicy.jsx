// import React from "react";

// function PrivacyPolicy() {
//   return <div>PrivacyPolicy</div>;
// }

// export default PrivacyPolicy;

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white overflow-hidden">
        <div className="p-6 md:p-8">
          <h1
            className="flex justify-center text-4xl font-bold mb-6 text-[54px] bg-clip-text sm:text-5xl sm:leading-[50px]
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent"
          >
            Privacy Policy
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              Contact
            </h2>
            <div className="text-center">
              <p className="mb-2">+44 07387577966</p>
              <p className="mb-2">legal@quick-funded.io</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Registered Office
              </h3>
              <p>128 City Road</p>
              <p>LONDON EC1V 2NX</p>
              <p>UNITED KINGDOM</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              1. Introduction
            </h2>
            <p className="mb-4 text-center">
              Welcome to Quick Funded LTD's Privacy Policy. This policy outlines
              how we collect, use, disclose, and protect your personal
              information in compliance with the General Data Protection
              Regulation (GDPR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              2. Information We Collect
            </h2>
            <p className="mb-2 text-center">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 mx-auto max-w-md">
              <li>
                Contact information (e.g., name, email address, phone number)
              </li>
              <li>Demographic information (e.g., age, gender)</li>
              <li>Financial information (e.g., payment details)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              3. How We Collect Information
            </h2>
            <p className="mb-2 text-center">
              We collect personal information through:
            </p>
            <ul className="list-disc pl-6 mb-4 mx-auto max-w-md">
              <li>
                Direct interactions: when you provide information by filling in
                forms on our website or by corresponding with us via email,
                phone, or other channels.
              </li>
              <li>
                Automated technologies: when you interact with our website, we
                may collect information through cookies and similar
                technologies.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              4. Purpose of Processing
            </h2>
            <p className="mb-4 text-center">
              We process personal information for the following purposes:
              providing services, managing customer accounts, marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              5. Legal Basis for Processing
            </h2>
            <p className="mb-2 text-center">
              We process personal data based on one or more of the following
              legal grounds:
            </p>
            <ul className="list-disc pl-6 mb-4 mx-auto max-w-md">
              <li>
                The individual has given consent to the processing of their
                personal data.
              </li>
              <li>
                Processing is necessary for the performance of a contract.
              </li>
              <li>
                Processing is necessary for compliance with a legal obligation.
              </li>
              <li>Processing is necessary to protect vital interests.</li>
              <li>
                Processing is necessary for the purposes of legitimate interests
                pursued by Quick Funded LTD or a third party.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              6. Data Subject Rights
            </h2>
            <p className="mb-2 text-center">
              Under GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 mx-auto max-w-md">
              <li>Request access to your personal data.</li>
              <li>Request correction or erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing.</li>
              <li>Data portability.</li>
            </ul>
            <p className="text-center">
              To exercise these rights, please contact us at
              legal@quick-funded.io.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              7. Data Security
            </h2>
            <p className="mb-2 text-center">
              We implement appropriate technical and organizational measures to
              ensure a level of security appropriate to the risk, including:
            </p>
            <ul className="list-disc pl-6 mb-4 mx-auto max-w-md">
              <li>Encryption and access controls.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              8. Data Breach Notification
            </h2>
            <p className="mb-4 text-center">
              In the event of a personal data breach, we will notify the
              relevant supervisory authority within 72 hours and, if necessary,
              affected individuals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              9. International Data Transfers
            </h2>
            <p className="mb-4 text-center">
              If we transfer personal data outside the European Economic Area
              (EEA), we ensure adequate safeguards are in place.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
