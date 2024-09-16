// // import React from "react";
// // import { NavLink } from "react-router-dom";
// // import { Outlet } from "react-router-dom";

// // const FAQPage = () => {
// //   return (
// //     <div className="faq-page">
// //       <h1>Frequently Asked Questions</h1>

// //       <nav className="faq-navigation">
// //         <ul>
// //           <li>
// //             <NavLink
// //               to="/faq/general-rules"
// //               className={({ isActive }) => (isActive ? "active-link" : "")}
// //             >
// //               <div className="faq-link-content">
// //                 <h3>General Questions</h3>
// //                 <p>
// //                   Find answers to common questions about our services and
// //                   policies.
// //                 </p>
// //               </div>
// //             </NavLink>
// //           </li>
// //           <li>
// //             <NavLink
// //               to="/faq/challenge-stage-rules"
// //               className={({ isActive }) => (isActive ? "active-link" : "")}
// //             >
// //               <div className="faq-link-content">
// //                 <h3>Challenge Stage Rules</h3>
// //                 <p>Find answers to Challenge Stage Rules questions.</p>
// //               </div>
// //             </NavLink>
// //           </li>
// //           <li>
// //             <NavLink
// //               to="/faq/challenge-stage-rules"
// //               className={({ isActive }) => (isActive ? "active-link" : "")}
// //             >
// //               <div className="one-step-rules">
// //                 <h3>One Step Rules</h3>
// //                 <p>Find answers to One Step Rules questions.</p>
// //               </div>
// //             </NavLink>
// //           </li>
// //           <li>
// //             <NavLink
// //               to="/faq/challenge-stage-rules"
// //               className={({ isActive }) => (isActive ? "active-link" : "")}
// //             >
// //               <div className="two-step-rules">
// //                 <h3>Two Step Rules</h3>
// //                 <p>Find answers to Two Step Rules questions.</p>
// //               </div>
// //             </NavLink>
// //           </li>
// //           <li>
// //             <NavLink
// //               to="/faq/challenge-stage-rules"
// //               className={({ isActive }) => (isActive ? "active-link" : "")}
// //             >
// //               <div className="funded-stage-rules">
// //                 <h3>Funded Stage Rules</h3>
// //                 <p>Find answers to Funded Stage Rules questions.</p>
// //               </div>
// //             </NavLink>
// //           </li>
// //           <li>
// //             <NavLink
// //               to="/faq/challenge-stage-rules"
// //               className={({ isActive }) => (isActive ? "active-link" : "")}
// //             >
// //               <div className="payouts">
// //                 <h3>Payouts</h3>
// //                 <p>Find answers to Payouts questions.</p>
// //               </div>
// //             </NavLink>
// //           </li>
// //           <li>
// //             <NavLink
// //               to="/faq/challenge-stage-rules"
// //               className={({ isActive }) => (isActive ? "active-link" : "")}
// //             >
// //               <div className="payouts">
// //                 <h3>Affiliate & Partnership</h3>
// //                 <p>Find answers to Payouts questions.</p>
// //               </div>
// //             </NavLink>
// //           </li>
// //           <li>
// //             <NavLink
// //               to="/faq/challenge-stage-rules"
// //               className={({ isActive }) => (isActive ? "active-link" : "")}
// //             >
// //               <div className="payouts">
// //                 <h3>Scaling Plan</h3>
// //                 <p>Find answers to Payouts questions.</p>
// //               </div>
// //             </NavLink>
// //           </li>

// //           {/* Add more NavLinks for other FAQ sections */}
// //         </ul>
// //       </nav>

// //       {/* This is where the content of each FAQ section will be rendered */}
// //       {/* <Outlet /> */}
// //     </div>
// //   );
// // };

// // export default FAQPage;

// // import React from "react";
// // import { NavLink, Outlet } from "react-router-dom";
// // import { Bookmark, FileText, FolderOpen } from "lucide-react";

// // const FAQPage = () => {
// //   const faqSections = [
// //     {
// //       title: "General rules",
// //       description:
// //         "No matter what type of account you have, whether it's a challenge or a funded account, it's important to...",
// //       icon: <Bookmark className="w-6 h-6" />,
// //       articleCount: 47,
// //       to: "/faq/general-rules",
// //     },
// //     {
// //       title: "Order & Billing",
// //       description: "",
// //       icon: <FileText className="w-6 h-6" />,
// //       articleCount: 4,
// //       to: "/faq/order-billing",
// //     },
// //     {
// //       title: "Two Step evaluations",
// //       description: "",
// //       icon: <FolderOpen className="w-6 h-6" />,
// //       articleCount: 9,
// //       to: "/faq/two-step-evaluations",
// //     },
// //     // Add more sections as needed
// //   ];

// //   return (
// //     <div className="bg-indigo-600 min-h-screen p-6">
// //       <div className="max-w-4xl mx-auto">
// //         <div className="bg-white rounded-lg shadow-lg p-6">
// //           <h1 className="text-2xl font-bold mb-6">
// //             Frequently Asked Questions
// //           </h1>
// //           <div className="grid gap-4">
// //             {faqSections.map((section, index) => (
// //               <NavLink
// //                 key={index}
// //                 to={section.to}
// //                 className={({ isActive }) =>
// //                   `block p-4 rounded-lg border ${
// //                     isActive ? "border-indigo-600" : "border-gray-200"
// //                   } hover:border-indigo-600 transition-colors duration-200`
// //                 }
// //               >
// //                 <div className="flex items-start">
// //                   <div className="flex-shrink-0 mr-4">{section.icon}</div>
// //                   <div>
// //                     <h2 className="text-lg font-semibold">{section.title}</h2>
// //                     {section.description && (
// //                       <p className="text-sm text-gray-600 mt-1">
// //                         {section.description}
// //                       </p>
// //                     )}
// //                     <p className="text-sm text-gray-500 mt-2">
// //                       {section.articleCount} articles
// //                     </p>
// //                   </div>
// //                 </div>
// //               </NavLink>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <Outlet />
// //     </div>
// //   );
// // };

// // export default FAQPage;

// // import React from "react";
// // import { NavLink, Outlet } from "react-router-dom";
// // import {
// //   Bookmark,
// //   FileText,
// //   FolderOpen,
// //   DollarSign,
// //   Users,
// //   TrendingUp,
// // } from "lucide-react";

// // const FAQPage = () => {
// //   const faqSections = [
// //     {
// //       title: "General rules",
// //       description:
// //         "No matter what type of account you have, whether it's a challenge or a funded account, it's important to...",
// //       icon: <Bookmark className="w-6 h-6" />,
// //       articleCount: 47,
// //       to: "/faq/general-rules",
// //     },
// //     {
// //       title: "Order & Billing",
// //       icon: <FileText className="w-6 h-6" />,
// //       articleCount: 4,
// //       to: "/faq/order-billing",
// //     },
// //     {
// //       title: "Two Step evaluations",
// //       icon: <FolderOpen className="w-6 h-6" />,
// //       articleCount: 9,
// //       to: "/faq/two-step-evaluations",
// //     },
// //     {
// //       title: "One Step Rules",
// //       description: "Find answers to One Step Rules questions.",
// //       icon: <FolderOpen className="w-6 h-6" />,
// //       to: "/faq/one-step-rules",
// //     },
// //     {
// //       title: "Funded Stage Rules",
// //       description: "Find answers to Funded Stage Rules questions.",
// //       icon: <FolderOpen className="w-6 h-6" />,
// //       to: "/faq/funded-stage-rules",
// //     },
// //     {
// //       title: "Payouts",
// //       description: "Find answers to Payouts questions.",
// //       icon: <DollarSign className="w-6 h-6" />,
// //       to: "/faq/payouts",
// //     },
// //     {
// //       title: "Affiliate & Partnership",
// //       description: "Find answers to Affiliate & Partnership questions.",
// //       icon: <Users className="w-6 h-6" />,
// //       to: "/faq/affiliate-partnership",
// //     },
// //     {
// //       title: "Scaling Plan",
// //       description: "Find answers to Scaling Plan questions.",
// //       icon: <TrendingUp className="w-6 h-6" />,
// //       to: "/faq/scaling-plan",
// //     },
// //   ];

// //   return (
// //     <div className=" min-h-screen p-6">
// //       <div className="max-w-4xl mx-auto">
// //         <div className="bg-white rounded-lg shadow-lg p-6">
// //           <h1 className="text-2xl font-bold mb-6">
// //             Frequently Asked Questions
// //           </h1>
// //           <div className="grid gap-4">
// //             {faqSections.map((section, index) => (
// //               <NavLink
// //                 key={index}
// //                 to={section.to}
// //                 className={({ isActive }) =>
// //                   `block p-4 rounded-lg border ${
// //                     isActive ? "border-indigo-600" : "border-gray-200"
// //                   } hover:border-indigo-600 transition-colors duration-200`
// //                 }
// //               >
// //                 <div className="flex items-start">
// //                   <div className="flex-shrink-0 mr-4">{section.icon}</div>
// //                   <div>
// //                     <h2 className="text-lg font-semibold">{section.title}</h2>
// //                     {section.description && (
// //                       <p className="text-sm text-gray-600 mt-1">
// //                         {section.description}
// //                       </p>
// //                     )}
// //                     {section.articleCount && (
// //                       <p className="text-sm text-gray-500 mt-2">
// //                         {section.articleCount} articles
// //                       </p>
// //                     )}
// //                   </div>
// //                 </div>
// //               </NavLink>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <Outlet />
// //     </div>
// //   );
// // };

// // export default FAQPage;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Bookmark,
  FileText,
  FolderOpen,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react";
import HelpCenter from "../components/FAQPage/HelpCenter";
import HomePage from "../components/FAQPage/HomePage";

const FAQPage = () => {
  // const faqSections = [
  //   {
  //     title: "General rules",
  //     description:
  //       "No matter what type of account you have, whether it's a challenge or a funded account, it's important to...",
  //     icon: <Bookmark className="w-6 h-6" />,
  //     articleCount: 47,
  //     to: "/faq/general-rules",
  //   },
  //   {
  //     title: "Challenge Stage Rules",
  //     description:
  //       "No matter what type of account you have, whether it's a challenge or a funded account, it's important to...",
  //     icon: <Bookmark className="w-6 h-6" />,
  //     articleCount: 47,
  //     to: "/faq/challenge-stage-rules",
  //   },
  //   {
  //     title: "Order & Billing",
  //     icon: <FileText className="w-6 h-6" />,
  //     articleCount: 4,
  //     to: "/faq/order-billing",
  //   },
  //   {
  //     title: "Two Step evaluations",
  //     icon: <FolderOpen className="w-6 h-6" />,
  //     articleCount: 9,
  //     to: "/faq/two-step-evaluations",
  //   },
  //   {
  //     title: "One Step Rules",
  //     description: "Find answers to One Step Rules questions.",
  //     icon: <FolderOpen className="w-6 h-6" />,
  //     to: "/faq/one-step-rules",
  //   },
  //   {
  //     title: "Funded Stage Rules",
  //     description: "Find answers to Funded Stage Rules questions.",
  //     icon: <FolderOpen className="w-6 h-6" />,
  //     to: "/faq/funded-stage-rules",
  //   },
  //   {
  //     title: "Payouts",
  //     description: "Find answers to Payouts questions.",
  //     icon: <DollarSign className="w-6 h-6" />,
  //     to: "/faq/payouts",
  //   },
  //   {
  //     title: "Affiliate & Partnership",
  //     description: "Find answers to Affiliate & Partnership questions.",
  //     icon: <Users className="w-6 h-6" />,
  //     to: "/faq/affiliate-partnership",
  //   },
  //   {
  //     title: "Scaling Plan",
  //     description: "Find answers to Scaling Plan questions.",
  //     icon: <TrendingUp className="w-6 h-6" />,
  //     to: "/faq/scaling-plan",
  //   },
  // ];

  return (
    <div className=" min-h-screen p-6">
      <HelpCenter />
      <HomePage />
      {/* <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <div className="grid gap-4">
            {faqSections.map((section, index) => (
              <NavLink
                key={index}
                to={section.to}
                className={({ isActive }) =>
                  `block p-4 rounded-lg border ${
                    isActive ? "border-indigo-600" : "border-gray-200"
                  } hover:border-indigo-600 transition-colors duration-200`
                }
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-[#96fc02]">
                    {React.cloneElement(section.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{section.title}</h2>
                    {section.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {section.description}
                      </p>
                    )}
                    {section.articleCount && (
                      <p className="text-sm text-gray-500 mt-2">
                        {section.articleCount} articles
                      </p>
                    )}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div> */}
      <Outlet />
    </div>
  );
};

export default FAQPage;

// // import React from "react";
// // import { NavLink, Outlet } from "react-router-dom";
// // import {
// //   Bookmark,
// //   FileText,
// //   FolderOpen,
// //   DollarSign,
// //   Users,
// //   TrendingUp,
// // } from "lucide-react";
// // import HelpCenter from "../components/FAQPage/HelpCenter";

// // const FAQPage = () => {
// //   const faqSections = [
// //     {
// //       title: "General rules",
// //       description:
// //         "No matter what type of account you have, whether it's a challenge or a funded account, it's important to...",
// //       icon: <Bookmark className="w-6 h-6" />,
// //       articleCount: 47,
// //       to: "/faq/general-rules",
// //     },
// //     {
// //       title: "Challenge Stage Rules",
// //       description:
// //         "No matter what type of account you have, whether it's a challenge or a funded account, it's important to...",
// //       icon: <Bookmark className="w-6 h-6" />,
// //       articleCount: 47,
// //       to: "/faq/challenge-stage-rules",
// //     },
// //     {
// //       title: "Order & Billing",
// //       icon: <FileText className="w-6 h-6" />,
// //       articleCount: 4,
// //       to: "/faq/order-billing",
// //     },
// //     {
// //       title: "Two Step evaluations",
// //       icon: <FolderOpen className="w-6 h-6" />,
// //       articleCount: 9,
// //       to: "/faq/two-step-evaluations",
// //     },
// //     {
// //       title: "One Step Rules",
// //       description: "Find answers to One Step Rules questions.",
// //       icon: <FolderOpen className="w-6 h-6" />,
// //       to: "/faq/one-step-rules",
// //     },
// //     {
// //       title: "Funded Stage Rules",
// //       description: "Find answers to Funded Stage Rules questions.",
// //       icon: <FolderOpen className="w-6 h-6" />,
// //       to: "/faq/funded-stage-rules",
// //     },
// //     {
// //       title: "Payouts",
// //       description: "Find answers to Payouts questions.",
// //       icon: <DollarSign className="w-6 h-6" />,
// //       to: "/faq/payouts",
// //     },
// //     {
// //       title: "Affiliate & Partnership",
// //       description: "Find answers to Affiliate & Partnership questions.",
// //       icon: <Users className="w-6 h-6" />,
// //       to: "/faq/affiliate-partnership",
// //     },
// //     {
// //       title: "Scaling Plan",
// //       description: "Find answers to Scaling Plan questions.",
// //       icon: <TrendingUp className="w-6 h-6" />,
// //       to: "/faq/scaling-plan",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen">
// //       <HelpCenter />
// //       <div className="max-w-4xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
// //         <h1 className="text-2xl font-bold mb-6 text-white">
// //           Frequently Asked Questions
// //         </h1>
// //         <div className="grid gap-4">
// //           {faqSections.map((section, index) => (
// //             <NavLink
// //               key={index}
// //               to={section.to}
// //               // className={({ isActive }) =>
// //               //   `block p-4 rounded-lg border ${
// //               //     isActive ? "border-green-400" : "border-green-400"
// //               //   } hover:border-indigo-300 transition-colors duration-200 bg-indigo-700 bg-opacity-50`
// //               // }
// //             >
// //               <div className="flex items-start">
// //                 <div className="flex-shrink-0 mr-4">
// //                   {React.cloneElement(section.icon, { className: "w-6 h-6" })}
// //                 </div>
// //                 <div>
// //                   <h2 className="text-lg font-semibold ">{section.title}</h2>
// //                   {section.description && (
// //                     <p className="text-sm mt-1">{section.description}</p>
// //                   )}
// //                   {section.articleCount && (
// //                     <p className="text-sm mt-2">
// //                       {section.articleCount} articles
// //                     </p>
// //                   )}
// //                 </div>
// //               </div>
// //             </NavLink>
// //           ))}
// //         </div>
// //       </div>
// //       <Outlet />
// //     </div>
// //   );
// // };

// // export default FAQPage;

// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import {
//   Bookmark,
//   FileText,
//   FolderOpen,
//   DollarSign,
//   Users,
//   TrendingUp,
// } from "lucide-react";
// import HelpCenter from "../components/FAQPage/HelpCenter";

// const FAQPage = () => {
//   const faqSections = [
//     // ... (keep the existing faqSections array unchanged)
//   ];

//   return (
//     <div className="min-h-screen">
//       <HelpCenter />
//       <div className="max-w-4xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
//         <div className="grid gap-4">
//           {faqSections.map((section, index) => (
//             <NavLink
//               key={index}
//               to={section.to}
//               className={({ isActive }) =>
//                 `block p-4 rounded-lg border ${
//                   isActive ? "border-indigo-600" : "border-gray-200"
//                 } hover:border-indigo-600 transition-colors duration-200`
//               }
//             >
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 mr-4 text-[#96fc02]">
//                   {React.cloneElement(section.icon, { className: "w-6 h-6" })}
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold">{section.title}</h2>
//                   {section.description && (
//                     <p className="text-sm text-gray-600 mt-1">
//                       {section.description}
//                     </p>
//                   )}
//                   {section.articleCount && (
//                     <p className="text-sm text-gray-500 mt-2">
//                       {section.articleCount} articles
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </NavLink>
//           ))}
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// };

// export default FAQPage;
