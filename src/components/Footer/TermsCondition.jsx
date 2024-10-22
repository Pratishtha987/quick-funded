// import React from 'react'

// function TermsCondition() {
//   return (
//     <div>TermsCondition</div>
//   )
// }

// export default TermsCondition

// import React, { useState } from "react";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const TermsOfService = () => {
//   const sections = [
//     {
//       title: "Introduction",
//       content: `Welcome to Quick Funded LTD website, quick-funded.io. Operated by Quick Funded LTD (referred to as "the Company" or "we"), this website offers a range of services, tools, and information to users like you, subject to your acceptance of the terms, conditions, policies, and notices outlined here.`,
//     },
//     {
//       title: "General Use and Fees",
//       content: `The Services provided by Quick Funded LTD are tailored for individuals aged 18 and above, residing in countries where our Services are accessible. Upon registration on our Website, users affirm that they meet the age requirement. Those under 18 are not permitted to utilize our Services...`,
//     },
//     {
//       title: "Registration Terms and Conditions",
//       content: `By accepting these Terms of Service, you affirm that you have reached the age of majority in your state or province of residence, or that you have the authority to consent to the use of this site by any minor dependents under your care...`,
//     },
//     {
//       title: "Changes and Accuracy",
//       content: `While we strive for accuracy, please note that the information provided on our site may be sourced from third parties, and we cannot guarantee its completeness, timeliness, or accuracy...`,
//     },
//     {
//       title: "Services and Refunds",
//       content: `Quick Funded LTD reserves the right, though not obligated, to limit the sale of our products or Services to specific individuals, geographic regions, or jurisdictions, at our discretion...`,
//     },
//     {
//       title: "Account Management",
//       content: `We reserve the right, though not obligated, to limit the sale of our products or Services and terminate active accounts for individuals who misuse our systems...`,
//     },
//     {
//       title: "Billing and Account Information",
//       content: `We retain the right to reject any orders placed with us, and may, at our discretion, impose limits on quantities purchased per person, household, or order...`,
//     },
//     {
//       title: "Third Parties",
//       content: `We may grant you access to third-party tools that we neither monitor nor control, provided on an "as is" and "as available" basis, without any warranties, representations, or conditions...`,
//     },
//     {
//       title: "User Submission",
//       content: `We reserve the right, though not obligated, to monitor, edit, or remove content that, in our sole discretion, is deemed unlawful, offensive, threatening, libellous, defamatory...`,
//     },
//     {
//       title: "Limitation of Liability",
//       content: `At Quick Funded LTD, we strive to provide a seamless service experience; however, we cannot guarantee that our service will always be uninterrupted, timely, secure, or error-free...`,
//     },
//     {
//       title: "Indemnification and Severability",
//       content: `By using our service, you agree to indemnify, defend, and hold harmless Quick Funded LTD, our parent, subsidiaries, affiliates, partners, officers, directors, agents...`,
//     },
//     {
//       title: "Termination",
//       content: `In the event of termination of this agreement, the obligations and liabilities of both parties incurred prior to the termination date shall remain in effect...`,
//     },
//     {
//       title: "Entire Agreement",
//       content: `The failure of Quick Funded LTD to enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision...`,
//     },
//     {
//       title: "Changes to Terms of Service",
//       content: `You can review the most current version of the Terms of Service at any time on this page. Quick Funded LTD reserves the right, at its sole discretion, to update, change, or replace any part of these Terms of Service...`,
//     },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl font-bold mb-8 text-gray-800">
//           Terms of Service
//         </h1>

//         <div className="space-y-6">
//           <Accordion type="single" collapsible className="w-full">
//             {sections.map((section, index) => (
//               <AccordionItem key={index} value={`item-${index}`}>
//                 <AccordionTrigger className="text-lg font-semibold text-gray-700 hover:text-gray-900">
//                   {section.title}
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <div className="mt-2 text-gray-600 leading-relaxed">
//                     {section.content}
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>

//         <div className="mt-8 text-sm text-gray-500 text-center">
//           <p>
//             For any questions about the Terms of Service, please contact us at:
//           </p>
//           <a
//             href="mailto:support@quick-funded.io"
//             className="text-blue-600 hover:text-blue-800"
//           >
//             support@quick-funded.io
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsCondition;

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const TermsCondition = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "Introduction",
      content: `Welcome to Quick Funded LTD website, quick-funded.io. Operated by Quick Funded LTD (referred to as "the Company" or "we"), this website offers a range of services, tools, and information to users like you, subject to your acceptance of the terms, conditions, policies, and notices outlined here.`,
    },
    {
      title: "General Use and Fees",
      content: `The Services provided by Quick Funded LTD are tailored for individuals aged 18 and above, residing in countries where our Services are accessible. Upon registration on our Website, users affirm that they meet the age requirement. Those under 18 are not permitted to utilize our Services. Users agree to access and utilize our Services only from countries where they are legally available, understanding that certain jurisdictions may impose restrictions or prohibitions.`,
    },
    {
      title: "Registration Terms and Conditions",
      content: `By accepting these Terms of Service, you affirm that you have reached the age of majority in your state or province of residence, or that you have the authority to consent to the use of this site by any minor dependents under your care. You are prohibited from using our services for any unlawful or unauthorized purpose, and agree not to violate any laws in your jurisdiction, including but not limited to copyright laws.`,
    },
    {
      title: "Changes and Accuracy",
      content: `While we strive for accuracy, please note that the information provided on our site may be sourced from third parties, and we cannot guarantee its completeness, timeliness, or accuracy. The content on our site is intended for general informational purposes only and should not be solely relied upon for decision-making without consulting more authoritative sources.`,
    },
    {
      title: "Services and Refunds",
      content: `Quick Funded LTD reserves the right, though not obligated, to limit the sale of our products or Services to specific individuals, geographic regions, or jurisdictions, at our discretion. We may enforce this restriction on a case-by-case basis and may limit the quantities of products or services offered. Descriptions and pricing of products are subject to change without notice.`,
    },
    {
      title: "Account Management",
      content: `We reserve the right, though not obligated, to limit the sale of our products or Services and terminate active accounts for individuals who misuse our systems. This includes the use of expert advisors (EAs) or trading behaviors that exploit vulnerabilities in our systems. Prohibited activities may include but are not limited to latency arbitrage trading, gap trading, or employing grid systems.`,
    },
    {
      title: "Billing and Account Information",
      content: `We retain the right to reject any orders placed with us, and may, at our discretion, impose limits on quantities purchased per person, household, or order. These limitations may extend to orders made under the same customer account, credit card, or sharing the same billing and/or shipping address.`,
    },
    {
      title: "Third Parties",
      content: `We may grant you access to third-party tools that we neither monitor nor control, provided on an "as is" and "as available" basis, without any warranties, representations, or conditions. Our liability arising from or related to your use of these optional third-party tools is expressly disclaimed.`,
    },
    {
      title: "User Submission",
      content: `We reserve the right, though not obligated, to monitor, edit, or remove content that, in our sole discretion, is deemed unlawful, offensive, threatening, libellous, defamatory, pornographic, obscene, or otherwise objectionable, or that violates any party's intellectual property rights or these Terms of Service.`,
    },
    {
      title: "Limitation of Liability",
      content: `At Quick Funded LTD, we strive to provide a seamless service experience; however, we cannot guarantee that our service will always be uninterrupted, timely, secure, or error-free. While we endeavor to ensure the accuracy and reliability of the results obtained through our service, we cannot warrant that they will always meet your expectations.`,
    },
    {
      title: "Indemnification and Severability",
      content: `By using our service, you agree to indemnify, defend, and hold harmless Quick Funded LTD, our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees from any claims or demands, including reasonable attorneys' fees.`,
    },
    {
      title: "Termination",
      content: `In the event of termination of this agreement, the obligations and liabilities of both parties incurred prior to the termination date shall remain in effect. These Terms of Service shall remain effective until terminated by either party.`,
    },
    {
      title: "Entire Agreement",
      content: `The failure of Quick Funded LTD to enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. These Terms of Service, along with any policies or operating rules posted by Quick Funded LTD on the site or related to the Service, constitute the entire agreement between you and Quick Funded LTD.`,
    },
    {
      title: "Changes to Terms of Service",
      content: `You can review the most current version of the Terms of Service at any time on this page. Quick Funded LTD reserves the right, at its sole discretion, to update, change, or replace any part of these Terms of Service by posting updates and changes on the website.`,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="bg-white p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          Terms of Service
        </h1>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="border overflow-hidden">
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-base md:text-lg font-semibold text-gray-700">
                  {section.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openSection === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-200 ease-in-out ${
                  openSection === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-500 text-center">
          <p className="mb-2">
            For any questions about the Terms of Service, please contact us at:
          </p>
          <a
            href="mailto:support@quick-funded.io"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            support@quick-funded.io
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
