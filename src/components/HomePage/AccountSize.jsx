// import React, { useState } from "react";
// import Toggle from "./Toggle";

// const AccountSize = () => {
//   const [planType, setPlanType] = useState("twoStep");
//   const [accountSize, setAccountSize] = useState("50k");

//   const planData = {
//     twoStep: {
//       step1: {
//         profitTarget: "10%",
//         minTradingDays: 3,
//         dailyDrawdown: "5%",
//         overallDrawdown: "10%",
//         tradingPeriod: "Unlimited",
//         firstWithdrawal: "N/A",
//         profitSplit: "N/A",
//       },
//       step2: {
//         profitTarget: "5%",
//         minTradingDays: 3,
//         dailyDrawdown: "5%",
//         overallDrawdown: "10%",
//         tradingPeriod: "Unlimited",
//         firstWithdrawal: "N/A",
//         profitSplit: "N/A",
//       },
//       fundedAccount: {
//         profitTarget: "N/A",
//         minTradingDays: 3,
//         dailyDrawdown: "5%",
//         overallDrawdown: "10%",
//         tradingPeriod: "Unlimited",
//         firstWithdrawal: "Bi-Weekly",
//         profitSplit: "Up to 95%",
//       },
//     },
//     oneStep: {
//       step1: {
//         profitTarget: "10%",
//         minTradingDays: 3,
//         dailyDrawdown: "4%",
//         overallDrawdown: "6%",
//         tradingPeriod: "Unlimited",
//         firstWithdrawal: "N/A",
//         profitSplit: "N/A",
//       },
//       fundedAccount: {
//         profitTarget: "N/A",
//         minTradingDays: 3,
//         dailyDrawdown: "4%",
//         overallDrawdown: "6%",
//         tradingPeriod: "Unlimited",
//         firstWithdrawal: "Bi-Weekly",
//         profitSplit: "Up to 95%",
//       },
//     },
//   };

//   const priceData = {
//     "5k": 99,
//     "10k": 149,
//     "25k": 199,
//     "50k": 299,
//     "100k": 499,
//   };

//   const currentPlan = planData[planType];
//   const currentPrice = priceData[accountSize];

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <div className="flex justify-between items-center mb-4">
//         <Toggle
//           pressed={planType === "twoStep"}
//           onPressedChange={() =>
//             setPlanType(planType === "twoStep" ? "oneStep" : "twoStep")
//           }
//         >
//           {planType === "twoStep" ? "Two Step" : "One Step"}
//         </Toggle>
//         <div className="flex space-x-2">
//           {Object.keys(priceData).map((size) => (
//             <Toggle
//               key={size}
//               pressed={accountSize === size}
//               onPressedChange={() => setAccountSize(size)}
//               className={`w-12 ${
//                 accountSize === size ? "bg-green-500" : "bg-gray-200"
//               }`}
//             >
//               {size}
//             </Toggle>
//             // <div>abc</div>
//           ))}
//         </div>
//       </div>

//       <div className="text-3xl font-bold mb-4">${currentPrice}</div>

//       <button className="bg-green-500 text-white px-4 py-2 rounded-full mb-4">
//         Buy Challenge
//       </button>

//       <div className="grid grid-cols-3 gap-4">
//         {Object.entries(currentPlan).map(([phase, data]) => (
//           <div key={phase} className="bg-gray-100 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold mb-2">
//               {phase === "step1"
//                 ? "Step 1"
//                 : phase === "step2"
//                 ? "Step 2"
//                 : "Funded Account"}
//             </h3>
//             {Object.entries(data).map(([key, value]) => (
//               <div key={key} className="flex justify-between mb-1">
//                 <span className="text-sm">
//                   {key
//                     .replace(/([A-Z])/g, " $1")
//                     .replace(/^./, (str) => str.toUpperCase())}
//                 </span>
//                 <span className="text-sm font-medium">{value}</span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AccountSize;

// import React, { useState } from "react";
// import { ChevronRight } from "lucide-react";

// const AccountSize = () => {
//   const [selectedStep, setSelectedStep] = useState("Two Step");
//   const [selectedSize, setSelectedSize] = useState("50k");

//   const steps = ["Two Step", "One Step"];
//   const sizes = ["5k", "10k", "25k", "50k", "100k"];

//   const tradingInfo = {
//     "Two Step": [
//       { label: "Profit Target", step1: "10%", step2: "5%", funded: "N/A" },
//       { label: "Minimum Trading Days", step1: "3", step2: "3", funded: "3" },
//       { label: "Daily Drawdown", step1: "5%", step2: "5%", funded: "5%" },
//       { label: "Overall Drawdown", step1: "10%", step2: "10%", funded: "10%" },
//       {
//         label: "Trading Period",
//         step1: "Unlimited",
//         step2: "Unlimited",
//         funded: "Unlimited",
//       },
//       {
//         label: "First Withdrawal",
//         step1: "N/A",
//         step2: "N/A",
//         funded: "Bi-Weekly",
//       },
//       { label: "Profit Split", step1: "N/A", step2: "N/A", funded: "" },
//     ],
//     "One Step": [
//       { label: "Profit Target", step1: "10%", funded: "N/A" },
//       { label: "Minimum Trading Days", step1: "3", funded: "3" },
//       { label: "Daily Drawdown", step1: "4%", funded: "4%" },
//       { label: "Overall Drawdown", step1: "6%", funded: "6%" },
//       { label: "Trading Period", step1: "Unlimited", funded: "Unlimited" },
//       { label: "First Withdrawal", step1: "N/A", funded: "Bi-Weekly" },
//       { label: "Profit Split", step1: "N/A", funded: "" },
//     ],
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <div className="flex space-x-2 mb-4">
//         {steps.map((step) => (
//           <button
//             key={step}
//             className={`px-4 py-2 rounded-full ${
//               selectedStep === step
//                 ? "bg-green-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => setSelectedStep(step)}
//           >
//             {step}
//           </button>
//         ))}
//       </div>
//       <div className="flex space-x-2 mb-6">
//         {sizes.map((size) => (
//           <button
//             key={size}
//             className={`px-4 py-2 rounded-full ${
//               selectedSize === size
//                 ? "bg-green-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => setSelectedSize(size)}
//           >
//             {size}
//           </button>
//         ))}
//       </div>
//       <div className="text-4xl font-bold mb-6">$299</div>
//       <button className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center mb-8">
//         Buy Challenge
//         <ChevronRight className="ml-2" />
//       </button>
//       <div className="overflow-x-auto">
//         <table className="w-full table-auto">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="px-4 py-2 text-left">Criteria</th>
//               <th className="px-4 py-2 text-left">Step 1</th>
//               {selectedStep === "Two Step" && (
//                 <th className="px-4 py-2 text-left">Step 2</th>
//               )}
//               <th className="px-4 py-2 text-left">Funded Account</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tradingInfo[selectedStep].map((row, index) => (
//               <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
//                 <td className="px-4 py-2">{row.label}</td>
//                 <td className="px-4 py-2">{row.step1}</td>
//                 {selectedStep === "Two Step" && (
//                   <td className="px-4 py-2">{row.step2}</td>
//                 )}
//                 <td className="px-4 py-2">{row.funded}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AccountSize;

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const AccountSize = () => {
  const [selectedStep, setSelectedStep] = useState("Two Step");
  const [selectedSize, setSelectedSize] = useState("50k");

  const steps = ["Two Step", "One Step"];
  const sizes = ["5k", "10k", "25k", "50k", "100k"];

  const tradingInfo = {
    "Two Step": [
      { label: "Profit Target", step1: "10%", step2: "5%", funded: "N/A" },
      { label: "Minimum Trading Days", step1: "3", step2: "3", funded: "3" },
      { label: "Daily Drawdown", step1: "5%", step2: "5%", funded: "5%" },
      { label: "Overall Drawdown", step1: "10%", step2: "10%", funded: "10%" },
      {
        label: "Trading Period",
        step1: "Unlimited",
        step2: "Unlimited",
        funded: "Unlimited",
      },
      {
        label: "First Withdrawal",
        step1: "N/A",
        step2: "N/A",
        funded: "Bi-Weekly",
      },
      { label: "Profit Split", step1: "N/A", step2: "N/A", funded: "" },
    ],
    "One Step": [
      { label: "Profit Target", step1: "10%", funded: "N/A" },
      { label: "Minimum Trading Days", step1: "3", funded: "3" },
      { label: "Daily Drawdown", step1: "4%", funded: "4%" },
      { label: "Overall Drawdown", step1: "6%", funded: "6%" },
      { label: "Trading Period", step1: "Unlimited", funded: "Unlimited" },
      { label: "First Withdrawal", step1: "N/A", funded: "Bi-Weekly" },
      { label: "Profit Split", step1: "N/A", funded: "" },
    ],
  };

  return (
    <div className="w-full mx-auto py-10 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div className="w-1/4">
          <div className="flex space-x-2 mb-4">
            {steps.map((step) => (
              <button
                key={step}
                className={`px-4 py-2 rounded-full ${
                  selectedStep === step
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedStep(step)}
              >
                {step}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 rounded-full ${
                  selectedSize === size
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="text-4xl font-bold mb-6">$299</div>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center">
            Buy Challenge
            <ChevronRight className="ml-2" />
          </button>
        </div>
        <div className="w-3/4 overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Criteria</th>
                <th className="px-4 py-2 text-left">Step 1</th>
                {selectedStep === "Two Step" && (
                  <th className="px-4 py-2 text-left">Step 2</th>
                )}
                <th className="px-4 py-2 text-left">Funded Account</th>
              </tr>
            </thead>
            <tbody>
              {tradingInfo[selectedStep].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-2">{row.label}</td>
                  <td className="px-4 py-2">{row.step1}</td>
                  {selectedStep === "Two Step" && (
                    <td className="px-4 py-2">{row.step2}</td>
                  )}
                  <td className="px-4 py-2">{row.funded}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountSize;
