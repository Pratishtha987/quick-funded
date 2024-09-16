// import React from "react";
// import SearchBar from "./SearchBar";
// import GeneralQnsList from "./GeneralQuestion/GenerealQnsList";
// import ChallengeStageQns from "./ChallengeStageRules/ChallengeStageQns";

// const HelpCenter = () => {
//   const articles = [...GeneralQnsList, ...ChallengeStageQns].map((item) => ({
//     title: item.question,
//     content: item.answer,
//     link: item.routerLink,
//   }));

//   return (
//     <div className="bg-indigo-700 min-h-screen p-6">
//       <div className="max-w-4xl mx-auto">
//         <header className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-white">
//             Goat Funded Trader Help Center
//           </h1>
//           <div className="text-white">English ▼</div>
//         </header>
//         <SearchBar articles={articles} />
//         {/* Rest of your help center content */}
//       </div>
//     </div>
//   );
// };

// export default HelpCenter;

// import React from "react";
// import { ChevronDown } from "lucide-react";
// import SearchBar from "./SearchBar";
// import GeneralQnsList from "./GeneralQuestion/GenerealQnsList";
// import ChallengeStageQns from "./ChallengeStageRules/ChallengeStageQns";

// const HelpCenter = () => {
//   const articles = [...GeneralQnsList, ...ChallengeStageQns].map((item) => ({
//     title: item.question,
//     content: item.answer,
//     link: item.routerLink,
//   }));

//   return (
//     <div className=" min-h-screen">
//       <div className="max-w-4xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-white">
//             Goat Funded Trader Help Center
//           </h1>
//           <div className="text-white flex items-center cursor-pointer">
//             <span className="mr-1">English</span>
//             <ChevronDown size={16} />
//           </div>
//         </header>
//         <SearchBar articles={articles} />
//         {/* Rest of your help center content */}
//       </div>
//     </div>
//   );
// };

// export default HelpCenter;
// imp

// HelpCenter.js
// import React from "react";
// import { ChevronDown } from "lucide-react";
// import SearchBar from "./SearchBar";
// import FAQSection from "./FAQSection";
// import { GeneralQnsList, ChallengeStageQns } from "./faqData";

// const HelpCenter = () => {
//   const allArticles = [...GeneralQnsList, ...ChallengeStageQns].map((item) => ({
//     title: item.question,
//     content: item.answer,
//     link: item.routerLink,
//   }));

//   return (
//     <div className="bg-indigo-600 min-h-screen">
//       <div className="max-w-4xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-white">
//             Goat Funded Trader Help Center
//           </h1>
//           <div className="text-white flex items-center cursor-pointer">
//             <span className="mr-1">English</span>
//             <ChevronDown size={16} />
//           </div>
//         </header>
//         <SearchBar articles={allArticles} />
//         <FAQSection title="General rules" articles={GeneralQnsList} />
//         <FAQSection
//           title="Challenge Stage Rules"
//           articles={ChallengeStageQns}
//         />
//       </div>
//     </div>
//   );
// };

// export default HelpCenter;

// import React from "react";
// import { ChevronDown } from "lucide-react";
// import SearchBar from "./SearchBar";

// const HelpCenter = () => {
//   return (
//     <div className="bg-indigo-600 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-white">
//             Goat Funded Trader Help Center
//           </h1>
//           <div className="text-white flex items-center cursor-pointer">
//             <span className="mr-1">English</span>
//             <ChevronDown size={16} />
//           </div>
//         </header>
//         <SearchBar />
//       </div>
//     </div>
//   );
// };

// export default HelpCenter;

// import React from "react";
// import { ChevronDown } from "lucide-react";
// import SearchBar from "./SearchBar";

// const HelpCenter = () => {
//   return (
//     <div className="bg-indigo-700 min-h-screen py-12">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <header className="flex justify-between items-center mb-12">
//           <h1 className="text-3xl font-bold text-white">
//             Goat Funded Trader Help Center
//           </h1>
//           <div className="text-white flex items-center cursor-pointer">
//             <span className="mr-1">English</span>
//             <ChevronDown size={16} />
//           </div>
//         </header>
//         <h2 className="text-4xl font-bold text-white mb-8">
//           Hi GOAT, How can we help?
//         </h2>
//         <SearchBar />
//       </div>
//     </div>
//   );
// };

// export default HelpCenter;

import React from "react";
// import { Search } from "lucide-react";
import SearchBar from "./SearchBar";
import GeneralQnsList from "./GeneralQuestion/GenerealQnsList";
import ChallengeStageQns from "./ChallengeStageRules/ChallengeStageQns";

const HelpCenter = () => {
  const articles = [...GeneralQnsList, ...ChallengeStageQns].map((item) => ({
    title: item.question,
    content: item.answer,
    link: item.routerLink,
  }));
  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="flex justify-center text-4xl font-bold mb-4">
          Quick FAQs, How can we help?
        </h1>
        <div className="relative">
          {/* <input
            type="text"
            placeholder="Search for articles..."
            className="w-full py-3 px-4 pl-12 rounded-lg bg-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          /> */}
          {/* <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300" /> */}
          <SearchBar articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
