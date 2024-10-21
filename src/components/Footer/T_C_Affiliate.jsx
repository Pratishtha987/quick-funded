// import React from "react";

// function T_C_Affiliate() {
//   return (
//     <div>
//       <div>
//         <img src={"./logo-quick.png"} className="w-2/3" />
//       </div>
//       <div>
//         T&C Affiliate This Agreement is entered into between Quick Funded Ltd
//         (the "Company") and the acknowledging party (the "Affiliate"),
//         collectively referred to as the "Parties" or individually as a "Party."
//         1. Definitions 1.1. The following definitions apply to this Agreement: •
//         Business Day: Any calendar day other than Saturday, Sunday, or a Federal
//         holiday in the United Kingdom. • Affiliate Account: The Affiliate's
//         account with the Company for the Services. • Affiliate Content: All
//         text, data, software, images, audio, or video material provided by the
//         Affiliate or the Company for using, developing, or maintaining the
//         Services. • Compensation Plan: The fees or commissions payable to the
//         Affiliate, as outlined in Appendix I. • Effective Date: The date of this
//         Agreement when the Affiliate registered on the Company's website. • End
//         User: Any person or entity authorized by the Affiliate to use the
//         Services. • End-User Account: An account with the Company held by an End
//         User to access the Services. • End-User Content: Text, data, images, or
//         other information provided by End Users in relation to the Services. •
//         Error: A perceived error. • Fees: The fees as determined by the Fee
//         Schedule in Appendix I. • Intellectual Property Rights: Patents,
//         copyrights, trademarks, and other intellectual property rights. • Mark
//         Guidelines: Guidelines for using the Company's marks. • Marks:
//         Trademarks, logos, URLs, and other identifying symbols. • Services: The
//         services as described in this Agreement. • Software: Online software
//         applications and tools provided by the Company. • Virus: Anything that
//         may adversely affect computer software, hardware, or networks. 1.2.
//         Affiliate Reference A reference to an Affiliate includes any corporation
//         or other body corporate, wherever and however incorporated or
//         established. 1.3. Construction Words in the singular include the plural,
//         and vice versa. 1.4. Statutory Reference References to statutes or
//         statutory provisions are as in force at the date of this Agreement. 1.5.
//         Subordinate Legislation References to statutes include subordinate
//         legislation made at the date of this Agreement. 1.6. Articles & Sections
//         References to articles and sections are to this Agreement. 1.7. Priority
//         This Agreement prevails in case of inconsistencies with other documents.
//         2. Representations and Warranties 2.1. The Affiliate represents and
//         warrants: • The Affiliate is duly organized, validly existing, and
//         authorized to conduct business. • The Affiliate has the legal authority
//         to execute and deliver this Agreement. • There is no litigation
//         involving the validity of this Agreement. • The Affiliate operates as an
//         independent contractor and not as an agent or employee of the Company. •
//         No person acting on behalf of the Affiliate is entitled to claim
//         brokerage or finder's fees. • The Affiliate is in compliance with
//         applicable laws and regulations. 3. Termination Termination conditions
//         include insolvency, litigation, non-compliance with laws, and the
//         Company's discretion. 4. Indemnification The Affiliate agrees to
//         indemnify and hold Quick Funded Ltd harmless from any claims, losses, or
//         damages arising from the Affiliate's actions, including breaches of the
//         agreement and violations of laws. 5. Fraudulent Traffic Quick Funded Ltd
//         reserves the right to delay payments to the Affiliate if suspicious
//         activity is detected in the Affiliate's account. Quick Funded Ltd can
//         also withhold fees if fraudulent traffic is determined. Additionally,
//         Quick Funded Ltd can render tracking URLs inoperative if it suspects
//         fraudulent activity. 6. Force Majeure Both parties are not liable for
//         breaches of the agreement due to events beyond their control, such as
//         natural disasters or pandemics. 7. Provision of Information / Data
//         Protection The Affiliate is required to provide certain information to
//         Quick Funded Ltd and consents to the collection and use of their
//         personal information in accordance with applicable data protection laws.
//         8. Cookies The use of cookies on Quick Funded Ltd's website is
//         mentioned, and users are given the option to manage cookie settings in
//         their web browsers. 9. Confidentiality This agreement includes
//         provisions regarding the handling of confidential information, including
//         the return of materials and technology provided by Quick Funded Ltd. 10.
//         Notices and Communication The agreement specifies the methods of
//         communication between the parties and how notices will be sent. 11.
//         Miscellaneous This section covers various other aspects of the
//         agreement, including marketing restrictions, the governing law and
//         jurisdiction, the entire agreement clause, severability, and more. 12.
//         Appendix I – Compensation Plan This section details the compensation
//         plan for the affiliate, including the percentage of fees they will
//         receive based on the number of End Users they refer. Appendix I PLS PUT
//         DOWN HERE THE TIER PROGRAM Tier 1 (Under 50 Referral) 10% commission
//         Tier 2 (After 50 Referral) 12.5% Commission With 5% discount code/link
//         Tier 3 (After 100 Referrals) 15% Commission With 7.5% discount code/link
//       </div>
//     </div>
//   );
// }

// export default T_C_Affiliate;

// import React from "react";

// const TierInfo = ({ tier, referrals, commission, discount }) => (
//   <div className="bg-white p-4 rounded-lg shadow-md">
//     <h3 className="text-lg font-semibold mb-2">Tier {tier}</h3>
//     <p className="text-gray-600">Referrals: {referrals}</p>
//     <p className="text-gray-600">Commission: {commission}</p>
//     {discount && <p className="text-gray-600">Discount Code: {discount}</p>}
//   </div>
// );

// function TCAffiliate() {
//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="p-8">
//           <div className="mb-8">
//             <img
//               src="./logo-quick.png"
//               alt="Quick Funded Logo"
//               className="w-48 mb-4"
//             />
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">
//               T&C Affiliate Agreement
//             </h1>
//             <p className="text-gray-600">
//               Between Quick Funded Ltd and the Affiliate
//             </p>
//           </div>

//           <div className="space-y-6">
//             <section>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                 1. Definitions
//               </h2>
//               <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                 <li>
//                   Business Day: Any calendar day other than Saturday, Sunday, or
//                   a Federal holiday in the United Kingdom.
//                 </li>
//                 <li>
//                   Affiliate Account: The Affiliate's account with the Company
//                   for the Services.
//                 </li>
//                 <li>
//                   Affiliate Content: All text, data, software, images, audio, or
//                   video material provided by the Affiliate or the Company for
//                   using, developing, or maintaining the Services.
//                 </li>
//                 {/* Add more definitions as needed */}
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                 2. Representations and Warranties
//               </h2>
//               <p className="text-gray-700">
//                 The Affiliate represents and warrants:
//               </p>
//               <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                 <li>
//                   The Affiliate is duly organized, validly existing, and
//                   authorized to conduct business.
//                 </li>
//                 <li>
//                   The Affiliate has the legal authority to execute and deliver
//                   this Agreement.
//                 </li>
//                 <li>
//                   There is no litigation involving the validity of this
//                   Agreement.
//                 </li>
//                 {/* Add more warranties as needed */}
//               </ul>
//             </section>

//             {/* Add more sections for other parts of the agreement */}

//             <section>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Appendix I – Compensation Plan
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <TierInfo tier={1} referrals="Under 50" commission="10%" />
//                 <TierInfo
//                   tier={2}
//                   referrals="50-99"
//                   commission="12.5%"
//                   discount="5%"
//                 />
//                 <TierInfo
//                   tier={3}
//                   referrals="100+"
//                   commission="15%"
//                   discount="7.5%"
//                 />
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TCAffiliate;

// import React from "react";
// import { Menu } from "lucide-react";

// const TCAffiliate = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       {/* <header className="bg-gray-900 text-white p-4 flex justify-between items-center"> */}
//       {/* <div className="flex items-center space-x-2"> */}
//       {/* <img src="./logo-quick.png" alt="GFT Logo" className="w-48 mb-4" /> */}
//       {/* <span className="font-bold">GOAT FUNDED TRADER</span> */}
//       {/* </div>   */}
//       {/* <Menu className="w-6 h-6" /> */}
//       {/* </header> */}

//       <main className="container mx-auto px-4 py-8 max-w-3xl">
//         <h1 className="text-4xl font-bold mb-6">T&C Affiliate</h1>

//         <p className="mb-6">
//           Welcome to Goat Funded Trader, a trade name of Wishes Tower
//           International SL (the "Company," "we," "us," or "our"). This T&C
//           Affiliate agreement explains the terms and conditions for our
//           affiliate program.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
//         <ul className="list-disc pl-6 mb-6 space-y-2">
//           <li>
//             Business Day: Any calendar day other than Saturday, Sunday, or a
//             Federal holiday in the United Kingdom.
//           </li>
//           <li>
//             Affiliate Account: The Affiliate's account with the Company for the
//             Services.
//           </li>
//           <li>
//             Affiliate Content: All text, data, software, images, audio, or video
//             material provided by the Affiliate or the Company for using,
//             developing, or maintaining the Services.
//           </li>
//         </ul>

//         <h2 className="text-2xl font-semibold mb-4">2. Compensation Plan</h2>
//         <div className="space-y-4">
//           <div className="border p-4 rounded">
//             <h3 className="font-semibold">Tier 1 (Under 50 Referrals)</h3>
//             <p>10% commission</p>
//           </div>
//           <div className="border p-4 rounded">
//             <h3 className="font-semibold">Tier 2 (50-99 Referrals)</h3>
//             <p>12.5% Commission</p>
//             <p>5% discount code/link</p>
//           </div>
//           <div className="border p-4 rounded">
//             <h3 className="font-semibold">Tier 3 (100+ Referrals)</h3>
//             <p>15% Commission</p>
//             <p>7.5% discount code/link</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TCAffiliate;

import React from "react";
import { Menu } from "lucide-react";

const TCAffiliate = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/api/placeholder/40/40"
            alt="GFT Logo"
            className="w-10 h-10"
          />
          <span className="font-bold">GOAT FUNDED TRADER</span>
        </div>
        <Menu className="w-6 h-6" />
      </header> */}

      <main className="container mx-auto px-4 py-8 max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">T&C Affiliate</h1>

        <p className="mb-6">
          Welcome to Goat Funded Trader, a trade name of Wishes Tower
          International SL (the "Company," "we," "us," or "our"). This T&C
          Affiliate agreement explains the terms and conditions for our
          affiliate program.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
        <ul className="list-none mb-6 space-y-2">
          <li>
            Business Day: Any calendar day other than Saturday, Sunday, or a
            Federal holiday in the United Kingdom.
          </li>
          <li>
            Affiliate Account: The Affiliate's account with the Company for the
            Services.
          </li>
          <li>
            Affiliate Content: All text, data, software, images, audio, or video
            material provided by the Affiliate or the Company for using,
            developing, or maintaining the Services.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">2. Compensation Plan</h2>
        <div className="space-y-2">
          <div className=" p-4 rounded">
            <h3 className="font-semibold">Tier 1 (Under 50 Referrals)</h3>
            <p>10% commission</p>
          </div>
          <div className=" p-4 rounded">
            <h3 className="font-semibold">Tier 2 (50-99 Referrals)</h3>
            <p>12.5% Commission</p>
            <p>5% discount code/link</p>
          </div>
          <div className=" p-4 rounded">
            <h3 className="font-semibold">Tier 3 (100+ Referrals)</h3>
            <p>15% Commission</p>
            <p>7.5% discount code/link</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TCAffiliate;
