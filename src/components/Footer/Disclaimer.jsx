// // import React from 'react'

// // function Disclaimer() {
// //   return (
// //     <div>Disclaimer</div>
// //   )
// // }

// // export default Disclaimer

// // import React, { useState } from "react";
// // import { ChevronDown } from "lucide-react";

// // const Disclaimer = () => {
// //   const [openSection, setOpenSection] = useState(null);

// //   const toggleSection = (index) => {
// //     setOpenSection(openSection === index ? null : index);
// //   };

// //   const sections = [
// //     {
// //       title: "Company Information",
// //       content: `This website is owned and operated by Quick Funded LTD, UK based company with registration number 14665391 and address 128 City Road, London, United Kingdom EC1V2NX. Throughout this disclaimer, the terms "we," "us," and "our" refer to Quick Funded LTD and its trading name, Quick Funded.`,
// //     },
// //     {
// //       title: "General Information",
// //       content: `The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.`,
// //     },
// //     {
// //       title: "Applicable Law",
// //       content: `This disclaimer is governed by and construed in accordance with the laws of England and Wales.`,
// //     },
// //     {
// //       title: "Financial Disclaimer",
// //       content: `Quick Funded is a trading name of Quick Funded and may be referred to interchangeably in the context of financial services. However, it is important to note that any financial information or services provided on this website are for general informational purposes only and do not constitute financial advice. We recommend consulting with a qualified financial professional before making any financial decisions.`,
// //     },
// //     {
// //       title: "Third-Party Links",
// //       content: `This website may contain links to third-party websites for your convenience. We do not endorse the content of these websites and are not responsible for any information, products, or services provided by third parties.`,
// //     },
// //     {
// //       title: "Limitation of Liability",
// //       content: `To the extent permitted by law, we exclude all conditions, warranties, representations, or other terms which may apply to our website or any content on it, whether express or implied. In no event will Quick Funded or its affiliates be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.`,
// //     },
// //     {
// //       title: "Changes to Disclaimer",
// //       content: `We reserve the right to modify or amend this disclaimer at any time without notice. By using this website, you agree to the current version of the disclaimer.`,
// //     },
// //   ];

// //   return (
// //     <div className="max-w-4xl mx-auto p-4 md:p-6">
// //       <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
// //         <div className="mb-8">
// //           <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center">
// //             Disclaimer
// //           </h1>
// //           <div className="text-center text-gray-600 text-sm md:text-base">
// //             <p>Quick Funded LTD</p>
// //             <p>Registration No: 14665391</p>
// //             <p>128 City Road, London, United Kingdom EC1V2NX</p>
// //           </div>
// //         </div>

// //         <div className="space-y-4">
// //           {sections.map((section, index) => (
// //             <div
// //               key={index}
// //               className="border border-gray-200 rounded-lg overflow-hidden"
// //             >
// //               <button
// //                 onClick={() => toggleSection(index)}
// //                 className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
// //               >
// //                 <span className="text-base md:text-lg font-semibold text-gray-700">
// //                   {section.title}
// //                 </span>
// //                 <ChevronDown
// //                   className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
// //                     openSection === index ? "transform rotate-180" : ""
// //                   }`}
// //                 />
// //               </button>

// //               <div
// //                 className={`transition-all duration-200 ease-in-out ${
// //                   openSection === index
// //                     ? "max-h-[500px] opacity-100"
// //                     : "max-h-0 opacity-0"
// //                 } overflow-hidden`}
// //               >
// //                 <div className="p-4 text-gray-600 text-sm md:text-base leading-relaxed">
// //                   {section.content}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="mt-8 text-sm text-gray-500 text-center">
// //           <p className="mb-2">
// //             For any questions regarding this disclaimer, please contact us at:
// //           </p>
// //           <a
// //             href="mailto:legal@quick-funded.io"
// //             className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
// //           >
// //             legal@quick-funded.io
// //           </a>
// //         </div>

// //         <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
// //           <p>Last updated: {new Date().toLocaleDateString()}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Disclaimer;

// // import React from "react";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// // const Disclaimer = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8 px-4">
// //       <div className="max-w-3xl mx-auto">
// //         <Card className="bg-white shadow-lg">
// //           <CardHeader>
// //             <CardTitle className="text-2xl font-bold text-center text-gray-800">
// //               Quick Funded LTD - Disclaimer
// //             </CardTitle>
// //           </CardHeader>
// //           <CardContent className="space-y-6">
// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Company Information
// //               </h2>
// //               <p className="text-gray-600">
// //                 This website is owned and operated by Quick Funded LTD, a UK
// //                 based company with registration number 14665391 and address 128
// //                 City Road, London, United Kingdom EC1V2NX. Throughout this
// //                 disclaimer, the terms "we," "us," and "our" refer to Quick
// //                 Funded LTD and its trading name, Quick Funded.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 General Information
// //               </h2>
// //               <p className="text-gray-600">
// //                 The information provided on this website is for general
// //                 informational purposes only. While we strive to keep the
// //                 information up-to-date and accurate, we make no representations
// //                 or warranties of any kind, express or implied, about the
// //                 completeness, accuracy, reliability, suitability, or
// //                 availability with respect to the website or the information,
// //                 products, services, or related graphics contained on the website
// //                 for any purpose.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Applicable Law
// //               </h2>
// //               <p className="text-gray-600">
// //                 This disclaimer is governed by and construed in accordance with
// //                 the laws of England and Wales.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Financial Disclaimer
// //               </h2>
// //               <p className="text-gray-600">
// //                 Quick Funded is a trading name of Quick Funded and may be
// //                 referred to interchangeably in the context of financial
// //                 services. However, it is important to note that any financial
// //                 information or services provided on this website are for general
// //                 informational purposes only and do not constitute financial
// //                 advice. We recommend consulting with a qualified financial
// //                 professional before making any financial decisions.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Third-Party Links
// //               </h2>
// //               <p className="text-gray-600">
// //                 This website may contain links to third-party websites for your
// //                 convenience. We do not endorse the content of these websites and
// //                 are not responsible for any information, products, or services
// //                 provided by third parties.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Limitation of Liability
// //               </h2>
// //               <p className="text-gray-600">
// //                 To the extent permitted by law, we exclude all conditions,
// //                 warranties, representations, or other terms which may apply to
// //                 our website or any content on it, whether express or implied. In
// //                 no event will Quick Funded or its affiliates be liable for any
// //                 loss or damage including, without limitation, indirect or
// //                 consequential loss or damage, or any loss or damage whatsoever
// //                 arising from loss of data or profits arising out of, or in
// //                 connection with, the use of this website.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Changes to Disclaimer
// //               </h2>
// //               <p className="text-gray-600">
// //                 We reserve the right to modify or amend this disclaimer at any
// //                 time without notice. By using this website, you agree to the
// //                 current version of the disclaimer.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Contact Information
// //               </h2>
// //               <p className="text-gray-600">
// //                 If you have any questions regarding this disclaimer, you may
// //                 contact us at legal@quick-funded.io.
// //               </p>
// //             </section>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Disclaimer;

// // import React from "react";

// // const Disclaimer = () => {
// //   return (
// //     <div className="min-h-screen py-8 px-4">
// //       <div className="max-w-5xl mx-auto">
// //         <div className="bg-white p-8">
// //           <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
// //             Quick Funded LTD - Disclaimer
// //           </h1>

// //           <div className="space-y-6">
// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Company Information
// //               </h2>
// //               <p className="text-gray-600">
// //                 This website is owned and operated by Quick Funded LTD, a UK
// //                 based company with registration number 14665391 and address 128
// //                 City Road, London, United Kingdom EC1V2NX. Throughout this
// //                 disclaimer, the terms "we," "us," and "our" refer to Quick
// //                 Funded LTD and its trading name, Quick Funded.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 General Information
// //               </h2>
// //               <p className="text-gray-600">
// //                 The information provided on this website is for general
// //                 informational purposes only. While we strive to keep the
// //                 information up-to-date and accurate, we make no representations
// //                 or warranties of any kind, express or implied, about the
// //                 completeness, accuracy, reliability, suitability, or
// //                 availability with respect to the website or the information,
// //                 products, services, or related graphics contained on the website
// //                 for any purpose.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Applicable Law
// //               </h2>
// //               <p className="text-gray-600">
// //                 This disclaimer is governed by and construed in accordance with
// //                 the laws of England and Wales.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Financial Disclaimer
// //               </h2>
// //               <p className="text-gray-600">
// //                 Quick Funded is a trading name of Quick Funded and may be
// //                 referred to interchangeably in the context of financial
// //                 services. However, it is important to note that any financial
// //                 information or services provided on this website are for general
// //                 informational purposes only and do not constitute financial
// //                 advice. We recommend consulting with a qualified financial
// //                 professional before making any financial decisions.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Third-Party Links
// //               </h2>
// //               <p className="text-gray-600">
// //                 This website may contain links to third-party websites for your
// //                 convenience. We do not endorse the content of these websites and
// //                 are not responsible for any information, products, or services
// //                 provided by third parties.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Limitation of Liability
// //               </h2>
// //               <p className="text-gray-600">
// //                 To the extent permitted by law, we exclude all conditions,
// //                 warranties, representations, or other terms which may apply to
// //                 our website or any content on it, whether express or implied. In
// //                 no event will Quick Funded or its affiliates be liable for any
// //                 loss or damage including, without limitation, indirect or
// //                 consequential loss or damage, or any loss or damage whatsoever
// //                 arising from loss of data or profits arising out of, or in
// //                 connection with, the use of this website.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Changes to Disclaimer
// //               </h2>
// //               <p className="text-gray-600">
// //                 We reserve the right to modify or amend this disclaimer at any
// //                 time without notice. By using this website, you agree to the
// //                 current version of the disclaimer.
// //               </p>
// //             </section>

// //             <section className="space-y-2">
// //               <h2 className="text-xl font-semibold text-gray-700">
// //                 Contact Information
// //               </h2>
// //               <p className="text-gray-600">
// //                 If you have any questions regarding this disclaimer, you may
// //                 contact us at legal@quick-funded.io.
// //               </p>
// //             </section>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Disclaimer;

// import React from "react";

// const Disclaimer = () => {
//   return (
//     <div className="min-h-screen py-8 px-4">
//       <div className="max-w-5xl mx-auto">
//         <div className="bg-white p-8">
//           <h1
//             className="flex justify-center text-4xl font-bold mb-8 text-[54px] bg-clip-text sm:text-5xl sm:leading-[50px]
//                 bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent"
//           >
//             Quick Funded LTD - Disclaimer
//           </h1>

//           <div className="space-y-6 text-center">
//             <section className="space-y-2">
//               <h2 className="text-xl font-semibold text-gray-700">
//                 Company Information
//               </h2>
//               <p className="text-gray-600">
//                 This website is owned and operated by Quick Funded LTD, a UK
//                 based company with registration number 14665391 and address 128
//                 City Road, London, United Kingdom EC1V2NX. Throughout this
//                 disclaimer, the terms "we," "us," and "our" refer to Quick
//                 Funded LTD and its trading name, Quick Funded.
//               </p>
//             </section>

//             <section className="space-y-2">
//               <h2 className="text-xl font-semibold text-gray-700">
//                 General Information
//               </h2>
//               <p className="text-gray-600">
//                 The information provided on this website is for general
//                 informational purposes only. While we strive to keep the
//                 information up-to-date and accurate, we make no representations
//                 or warranties of any kind, express or implied, about the
//                 completeness, accuracy, reliability, suitability, or
//                 availability with respect to the website or the information,
//                 products, services, or related graphics contained on the website
//                 for any purpose.
//               </p>
//             </section>

//             <section className="space-y-2">
//               <h2 className="text-xl font-semibold text-gray-700">
//                 Applicable Law
//               </h2>
//               <p className="text-gray-600">
//                 This disclaimer is governed by and construed in accordance with
//                 the laws of England and Wales.
//               </p>
//             </section>

//             <section className="space-y-2">
//               <h2 className="text-xl font-semibold text-gray-700">
//                 Financial Disclaimer
//               </h2>
//               <p className="text-gray-600">
//                 Quick Funded is a trading name of Quick Funded and may be
//                 referred to interchangeably in the context of financial
//                 services. However, it is important to note that any financial
//                 information or services provided on this website are for general
//                 informational purposes only and do not constitute financial
//                 advice. We recommend consulting with a qualified financial
//                 professional before making any financial decisions.
//               </p>
//             </section>

//             <section className="space-y-2">
//               <h2 className="text-xl font-semibold text-gray-700">
//                 Third-Party Links
//               </h2>
//               <p className="text-gray-600">
//                 This website may contain links to third-party websites for your
//                 convenience. We do not endorse the content of these websites and
//                 are not responsible for any information, products, or services
//                 provided by third parties.
//               </p>
//             </section>

//             <section className="space-y-2">
//               <h2 className="text-xl font-semibold text-gray-700">
//                 Limitation of Liability
//               </h2>
//               <p className="text-gray-600">
//                 To the extent permitted by law, we exclude all conditions,
//                 warranties, representations, or other terms which may apply to
//                 our website or any content on it, whether express or implied. In
//                 no event will Quick Funded or its affiliates be liable for any
//                 loss or damage including, without limitation, indirect or
//                 consequential loss or damage, or any loss or damage whatsoever
//                 arising from loss of data or profits arising out of, or in
//                 connection with, the use of this website.
//               </p>
//             </section>

//             <section className="space-y-2">
//               <h2 className="text-xl font-semibold text-gray-700">
//                 Changes to Disclaimer
//               </h2>
//               <p className="text-gray-600">
//                 We reserve the right to modify or amend this disclaimer at any
//                 time without notice. By using this website, you agree to the
//                 current version of the disclaimer.
//               </p>
//             </section>

//             <section className="space-y-2">
//               <h2 className="text-xl font-semibold text-gray-700">
//                 Contact Information
//               </h2>
//               <p className="text-gray-600">
//                 If you have any questions regarding this disclaimer, you may
//                 contact us at legal@quick-funded.io.
//               </p>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Disclaimer;

import React from "react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-8">
          <h1 className="text-center text-4xl font-bold mb-8 bg-clip-text sm:text-5xl sm:leading-[50px] bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent">
            Quick Funded LTD - Disclaimer
          </h1>

          <div className="space-y-6 text-left">
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Company Information
              </h2>
              <p className="text-gray-600">
                This website is owned and operated by Quick Funded LTD, a UK
                based company with registration number 14665391 and address 128
                City Road, London, United Kingdom EC1V2NX. Throughout this
                disclaimer, the terms "we," "us," and "our" refer to Quick
                Funded LTD and its trading name, Quick Funded.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                General Information
              </h2>
              <p className="text-gray-600">
                The information provided on this website is for general
                informational purposes only. While we strive to keep the
                information up-to-date and accurate, we make no representations
                or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, suitability, or
                availability with respect to the website or the information,
                products, services, or related graphics contained on the website
                for any purpose.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Applicable Law
              </h2>
              <p className="text-gray-600">
                This disclaimer is governed by and construed in accordance with
                the laws of England and Wales.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Financial Disclaimer
              </h2>
              <p className="text-gray-600">
                Quick Funded is a trading name of Quick Funded and may be
                referred to interchangeably in the context of financial
                services. However, it is important to note that any financial
                information or services provided on this website are for general
                informational purposes only and do not constitute financial
                advice. We recommend consulting with a qualified financial
                professional before making any financial decisions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Third-Party Links
              </h2>
              <p className="text-gray-600">
                This website may contain links to third-party websites for your
                convenience. We do not endorse the content of these websites and
                are not responsible for any information, products, or services
                provided by third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Limitation of Liability
              </h2>
              <p className="text-gray-600">
                To the extent permitted by law, we exclude all conditions,
                warranties, representations, or other terms which may apply to
                our website or any content on it, whether express or implied. In
                no event will Quick Funded or its affiliates be liable for any
                loss or damage including, without limitation, indirect or
                consequential loss or damage, or any loss or damage whatsoever
                arising from loss of data or profits arising out of, or in
                connection with, the use of this website.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Changes to Disclaimer
              </h2>
              <p className="text-gray-600">
                We reserve the right to modify or amend this disclaimer at any
                time without notice. By using this website, you agree to the
                current version of the disclaimer.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Contact Information
              </h2>
              <p className="text-gray-600">
                If you have any questions regarding this disclaimer, you may
                contact us at legal@quick-funded.io.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
