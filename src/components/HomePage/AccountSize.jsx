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
//     <div className="w-full max-w-[1438px] flex justify-center max-md:mt-10 max-md:max-w-full mx-autos ">
//       <div className="flex justify-between">
//         <div className="w-1/4 rounded-lg shadow-md">
//           <div className="flex space-x-2 mb-4">
//             {steps.map((step) => (
//               <button
//                 key={step}
//                 // className={`px-4 py-2 rounded-full ${
//                 //   selectedStep === step
//                 //     ? "bg-green-500 text-white"
//                 //     : "bg-gray-200 text-gray-700"
//                 // }`}
//                 onClick={() => setSelectedStep(step)}
//               >
//                 {step}
//               </button>
//             ))}
//           </div>
//           <div className="flex flex-wrap gap-2 mb-6">
//             {sizes.map((size) => (
//               <button
//                 key={size}
//                 // className={`px-4 py-2 rounded-full ${
//                 //   selectedSize === size
//                 //     ? "bg-green-500 text-white"
//                 //     : "bg-gray-200 text-gray-700"
//                 // }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//           <div className="text-4xl font-bold mb-6">$299</div>
//           <button className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center ">
//             Buy Challenge
//             <ChevronRight className="ml-2" />
//           </button>
//         </div>
//         <div className="w-3/4 overflow-x-auto rounded-lg shadow-md">
//           <table className="w-full table-auto">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="px-4 py-2 text-left">Criteria</th>
//                 <th className="px-4 py-2 text-left">Step 1</th>
//                 {selectedStep === "Two Step" && (
//                   <th className="px-4 py-2 text-left">Step 2</th>
//                 )}
//                 <th className="px-4 py-2 text-left">Funded Account</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tradingInfo[selectedStep].map((row, index) => (
//                 <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
//                   <td className="px-4 py-2">{row.label}</td>
//                   <td className="px-4 py-2">{row.step1}</td>
//                   {selectedStep === "Two Step" && (
//                     <td className="px-4 py-2">{row.step2}</td>
//                   )}
//                   <td className="px-4 py-2">{row.funded}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountSize;

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// const AccountSize = () => {
//   const [challengeType, setChallengeType] = useState("twoStep");
//   const [amount, setAmount] = useState(50);

//   const challengeTypes = {
//     twoStep: {
//       name: "Two Step",
//       steps: ["Step 1", "Step 2", "Funded Account"],
//       profitTargets: ["10%", "5%", "N/A"],
//       minTradingDays: [3, 3, 3],
//       dailyDrawdown: ["5%", "5%", "5%"],
//       overallDrawdown: ["10%", "10%", "10%"],
//       tradingPeriod: ["Unlimited", "Unlimited", "Unlimited"],
//       firstWithdrawal: ["N/A", "N/A", "Bi-Weekly"],
//       profitSplit: ["N/A", "N/A", "Up to 95%"],
//     },
//     oneStep: {
//       name: "One Step",
//       steps: ["Step 1", "Funded Account"],
//       profitTargets: ["10%", "N/A"],
//       minTradingDays: [3, 3],
//       dailyDrawdown: ["4%", "4%"],
//       overallDrawdown: ["6%", "6%"],
//       tradingPeriod: ["Unlimited", "Unlimited"],
//       firstWithdrawal: ["N/A", "Bi-Weekly"],
//       profitSplit: ["N/A", "Up to 95%"],
//     },
//   };

//   const currentChallenge = challengeTypes[challengeType];

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <Card className="mb-4">
//         <CardContent className="p-4">
//           <div className="flex justify-between items-center mb-4">
//             <div>
//               <Button
//                 variant={challengeType === "twoStep" ? "default" : "secondary"}
//                 onClick={() => setChallengeType("twoStep")}
//               >
//                 Two Step
//               </Button>
//               <Button
//                 variant={challengeType === "oneStep" ? "default" : "secondary"}
//                 onClick={() => setChallengeType("oneStep")}
//                 className="ml-2"
//               >
//                 One Step
//               </Button>
//             </div>
//             <div>
//               {[5, 10, 25, 50, 100].map((value) => (
//                 <Button
//                   key={value}
//                   variant={amount === value ? "default" : "secondary"}
//                   onClick={() => setAmount(value)}
//                   className="mx-1"
//                 >
//                   {value}k
//                 </Button>
//               ))}
//             </div>
//           </div>
//           <div className="text-4xl font-bold mb-4">$299</div>
//           <Button className="w-full">Buy Challenge →</Button>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent className="p-4">
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th></th>
//                 {currentChallenge.steps.map((step, index) => (
//                   <th
//                     key={index}
//                     className="text-left px-2 py-1 font-medium text-green-600"
//                   >
//                     {step}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(currentChallenge)
//                 .slice(1)
//                 .map(([key, values], index) => (
//                   <tr
//                     key={index}
//                     className={index % 2 === 0 ? "bg-gray-100" : ""}
//                   >
//                     <td className="px-2 py-1 font-medium">
//                       {key.replace(/([A-Z])/g, " $1").trim()}
//                     </td>
//                     {values.map((value, i) => (
//                       <td key={i} className="px-2 py-1">
//                         {value}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AccountSize;

// import React, { useState } from "react";

// const AccountSize = () => {
//   const [challengeType, setChallengeType] = useState("twoStep");
//   const [amount, setAmount] = useState(50);

//   const challengeTypes = {
//     twoStep: {
//       name: "Two Step",
//       steps: ["Step 1", "Step 2", "Funded Account"],
//       profitTargets: ["10%", "5%", "N/A"],
//       minTradingDays: [3, 3, 3],
//       dailyDrawdown: ["5%", "5%", "5%"],
//       overallDrawdown: ["10%", "10%", "10%"],
//       tradingPeriod: ["Unlimited", "Unlimited", "Unlimited"],
//       firstWithdrawal: ["N/A", "N/A", "Bi-Weekly"],
//       profitSplit: ["N/A", "N/A", "Up to 95%"],
//     },
//     oneStep: {
//       name: "One Step",
//       steps: ["Step 1", "Funded Account"],
//       profitTargets: ["10%", "N/A"],
//       minTradingDays: [3, 3],
//       dailyDrawdown: ["4%", "4%"],
//       overallDrawdown: ["6%", "6%"],
//       tradingPeriod: ["Unlimited", "Unlimited"],
//       firstWithdrawal: ["N/A", "Bi-Weekly"],
//       profitSplit: ["N/A", "Up to 95%"],
//     },
//   };

//   const currentChallenge = challengeTypes[challengeType];

//   const buttonStyle = {
//     padding: "10px 15px",
//     margin: "0 5px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   };

//   const activeButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: "#4CAF50",
//     color: "white",
//   };

//   const inactiveButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: "#f0f0f0",
//     color: "black",
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "800px",
//         margin: "0 auto",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <div
//         style={{
//           marginBottom: "20px",
//           padding: "20px",
//           border: "1px solid #ddd",
//           borderRadius: "10px",
//           backgroundColor: "white",
//           boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <div>
//             <button
//               style={
//                 challengeType === "twoStep"
//                   ? activeButtonStyle
//                   : inactiveButtonStyle
//               }
//               onClick={() => setChallengeType("twoStep")}
//             >
//               Two Step
//             </button>
//             <button
//               style={
//                 challengeType === "oneStep"
//                   ? activeButtonStyle
//                   : inactiveButtonStyle
//               }
//               onClick={() => setChallengeType("oneStep")}
//             >
//               One Step
//             </button>
//           </div>
//           <div>
//             {[5, 10, 25, 50, 100].map((value) => (
//               <button
//                 key={value}
//                 style={
//                   amount === value ? activeButtonStyle : inactiveButtonStyle
//                 }
//                 onClick={() => setAmount(value)}
//               >
//                 {value}k
//               </button>
//             ))}
//           </div>
//         </div>
//         <div
//           style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}
//         >
//           $299
//         </div>
//         <button
//           style={{
//             ...activeButtonStyle,
//             width: "100%",
//             padding: "15px",
//             fontSize: "1.2em",
//             backgroundColor: "#4CAF50",
//           }}
//         >
//           Buy Challenge →
//         </button>
//       </div>

//       <div
//         style={{
//           padding: "20px",
//           border: "1px solid #ddd",
//           borderRadius: "10px",
//           backgroundColor: "white",
//           boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//         }}
//       >
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th
//                 style={{
//                   textAlign: "left",
//                   padding: "10px",
//                   borderBottom: "2px solid #ddd",
//                 }}
//               ></th>
//               {currentChallenge.steps.map((step, index) => (
//                 <th
//                   key={index}
//                   style={{
//                     textAlign: "left",
//                     padding: "10px",
//                     borderBottom: "2px solid #ddd",
//                     color: "#4CAF50",
//                   }}
//                 >
//                   {step}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(currentChallenge)
//               .slice(1)
//               .map(([key, values], index) => (
//                 <tr
//                   key={index}
//                   style={{
//                     backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
//                   }}
//                 >
//                   <td style={{ padding: "10px", fontWeight: "bold" }}>
//                     {key.replace(/([A-Z])/g, " $1").trim()}
//                   </td>
//                   {values.map((value, i) => (
//                     <td key={i} style={{ padding: "10px" }}>
//                       {value}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AccountSize;

// import React, { useState } from "react";

// const AccountSize = () => {
//   const [challengeType, setChallengeType] = useState("oneStep");
//   const [amount, setAmount] = useState(50);

//   const challengeTypes = {
//     twoStep: {
//       name: "Two Step",
//       steps: ["Step 1", "Step 2", "Funded Account"],
//       profitTargets: ["10%", "5%", "N/A"],
//       minTradingDays: [3, 3, 3],
//       dailyDrawdown: ["5%", "5%", "5%"],
//       overallDrawdown: ["10%", "10%", "10%"],
//       tradingPeriod: ["Unlimited", "Unlimited", "Unlimited"],
//       firstWithdrawal: ["N/A", "N/A", "Bi-Weekly"],
//       profitSplit: ["N/A", "N/A", "Up to 95%"],
//     },
//     oneStep: {
//       name: "One Step",
//       steps: ["Step 1", "Funded Account"],
//       profitTargets: ["10%", "N/A"],
//       minTradingDays: [3, 3],
//       dailyDrawdown: ["4%", "4%"],
//       overallDrawdown: ["6%", "6%"],
//       tradingPeriod: ["Unlimited", "Unlimited"],
//       firstWithdrawal: ["N/A", "Bi-Weekly"],
//       profitSplit: ["N/A", "Up to 95%"],
//     },
//   };

//   const currentChallenge = challengeTypes[challengeType];

//   const buttonStyle = {
//     padding: "10px 15px",
//     margin: "0 5px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   };

//   const activeButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: "#4CAF50",
//     color: "white",
//   };

//   const inactiveButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: "#f0f0f0",
//     color: "black",
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         maxWidth: "1440px",
//         margin: "0 auto",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "white",
//         borderRadius: "10px",
//         boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//       }}
//     >
//       <div style={{ flex: "1", padding: "20px" }}>
//         <div style={{ marginBottom: "20px" }}>
//           <button
//             style={
//               challengeType === "twoStep"
//                 ? inactiveButtonStyle
//                 : activeButtonStyle
//             }
//             onClick={() => setChallengeType("twoStep")}
//           >
//             Two Step
//           </button>
//           <button
//             style={
//               challengeType === "oneStep"
//                 ? activeButtonStyle
//                 : inactiveButtonStyle
//             }
//             onClick={() => setChallengeType("oneStep")}
//           >
//             One Step
//           </button>
//         </div>
//         <div style={{ marginBottom: "20px" }}>
//           {[5, 10, 25, 50, 100].map((value) => (
//             <button
//               key={value}
//               style={amount === value ? activeButtonStyle : inactiveButtonStyle}
//               onClick={() => setAmount(value)}
//             >
//               {value}k
//             </button>
//           ))}
//         </div>
//         <div
//           style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}
//         >
//           $299
//         </div>
//         <button
//           style={{
//             ...activeButtonStyle,
//             width: "100%",
//             padding: "15px",
//             fontSize: "1.2em",
//             backgroundColor: "#4CAF50",
//           }}
//         >
//           Buy Challenge →
//         </button>
//       </div>

//       <div style={{ flex: "2", padding: "20px" }}>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th
//                 style={{
//                   textAlign: "left",
//                   padding: "10px",
//                   borderBottom: "2px solid #ddd",
//                 }}
//               ></th>
//               {currentChallenge.steps.map((step, index) => (
//                 <th
//                   key={index}
//                   style={{
//                     textAlign: "left",
//                     padding: "10px",
//                     borderBottom: "2px solid #ddd",
//                     color: "#4CAF50",
//                   }}
//                 >
//                   {step}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(currentChallenge)
//               .slice(1)
//               .map(([key, values], index) => (
//                 <tr
//                   key={index}
//                   style={{
//                     backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
//                   }}
//                 >
//                   <td style={{ padding: "10px", fontWeight: "bold" }}>
//                     {key.replace(/([A-Z])/g, " $1").trim()}
//                   </td>
//                   {values.map((value, i) => (
//                     <td key={i} style={{ padding: "10px" }}>
//                       {value}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AccountSize;

// import React, { useState } from "react";

// const AccountChallenge = () => {
//   const [selectedAccountSize, setSelectedAccountSize] = useState("5k");
//   const [challengeStep, setChallengeStep] = useState("Two Step"); // Toggle between "Two Step" and "One Step"

//   const accountSizes = ["5k", "10k", "25k", "50k", "100k"];

//   // Challenge data for each account size and step
//   const challengeData = {
//     "Two Step": {
//       "5k": {
//         step1: {
//           profitTarget: "10%",
//           minTradingDays: 3,
//           dailyDrawdown: "5%",
//           overallDrawdown: "10%",
//         },
//         step2: {
//           profitTarget: "5%",
//           minTradingDays: 3,
//           dailyDrawdown: "5%",
//           overallDrawdown: "10%",
//         },
//         funded: {
//           profitTarget: "N/A",
//           minTradingDays: 3,
//           dailyDrawdown: "5%",
//           overallDrawdown: "10%",
//           profitSplit: "Up to 95%",
//           firstWithdrawal: "Bi-Weekly",
//         },
//       },
//       "10k": {
//         // Custom values for '10k' account size
//         step1: {
//           profitTarget: "10%",
//           minTradingDays: 3,
//           dailyDrawdown: "5%",
//           overallDrawdown: "10%",
//         },
//         step2: {
//           profitTarget: "5%",
//           minTradingDays: 3,
//           dailyDrawdown: "5%",
//           overallDrawdown: "10%",
//         },
//         funded: {
//           profitTarget: "N/A",
//           minTradingDays: 3,
//           dailyDrawdown: "5%",
//           overallDrawdown: "10%",
//           profitSplit: "Up to 95%",
//           firstWithdrawal: "Bi-Weekly",
//         },
//       },
//       // Define for other sizes similarly...
//     },
//     "One Step": {
//       "5k": {
//         step1: {
//           profitTarget: "10%",
//           minTradingDays: 3,
//           dailyDrawdown: "4%",
//           overallDrawdown: "6%",
//         },
//         funded: {
//           profitTarget: "N/A",
//           minTradingDays: 3,
//           dailyDrawdown: "4%",
//           overallDrawdown: "6%",
//           profitSplit: "Up to 95%",
//           firstWithdrawal: "Bi-Weekly",
//         },
//       },
//       "10k": {
//         // Custom values for '10k' One Step account size
//         step1: {
//           profitTarget: "10%",
//           minTradingDays: 3,
//           dailyDrawdown: "4%",
//           overallDrawdown: "6%",
//         },
//         funded: {
//           profitTarget: "N/A",
//           minTradingDays: 3,
//           dailyDrawdown: "4%",
//           overallDrawdown: "6%",
//           profitSplit: "Up to 95%",
//           firstWithdrawal: "Bi-Weekly",
//         },
//       },
//       // Define for other sizes similarly...
//     },
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
//       <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg">
//         {/* Header */}
//         <div className="text-center p-6 bg-green-100 rounded-t-lg">
//           <h1 className="text-3xl font-bold text-green-700">
//             Choose The Account Size
//           </h1>
//         </div>

//         {/* Toggle Step */}
//         <div className="flex justify-center space-x-4 mt-4">
//           <button
//             onClick={() => setChallengeStep("Two Step")}
//             className={`px-4 py-2 rounded-lg border-2 ${
//               challengeStep === "Two Step"
//                 ? "border-green-600 bg-green-50"
//                 : "border-gray-300"
//             }`}
//           >
//             Two Step
//           </button>
//           <button
//             onClick={() => setChallengeStep("One Step")}
//             className={`px-4 py-2 rounded-lg border-2 ${
//               challengeStep === "One Step"
//                 ? "border-green-600 bg-green-50"
//                 : "border-gray-300"
//             }`}
//           >
//             One Step
//           </button>
//         </div>

//         {/* Account Sizes and Price */}
//         <div className="flex flex-col items-center mt-4">
//           <div className="flex space-x-4 mb-4">
//             {accountSizes.map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedAccountSize(size)}
//                 className={`px-4 py-2 rounded-lg border-2 ${
//                   selectedAccountSize === size
//                     ? "border-green-600 bg-green-50"
//                     : "border-gray-300"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//           <div className="text-3xl font-bold text-green-700">
//             ${selectedAccountSize === "5k" ? "59" : "Price Varies"}
//           </div>
//           <button className="mt-4 px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500">
//             Buy Challenge
//           </button>
//         </div>

//         {/* Challenge Details */}
//         <div className="grid grid-cols-3 gap-4 p-6">
//           {/* Step 1 */}
//           <div className="col-span-1">
//             <h2 className="text-xl font-bold text-center mb-4">Step 1</h2>
//             <ul className="space-y-2">
//               <li>
//                 Profit Target:{" "}
//                 {
//                   challengeData[challengeStep][selectedAccountSize].step1
//                     .profitTarget
//                 }
//               </li>
//               <li>
//                 Minimum Trading Days:{" "}
//                 {
//                   challengeData[challengeStep][selectedAccountSize].step1
//                     .minTradingDays
//                 }
//               </li>
//               <li>
//                 Daily Drawdown:{" "}
//                 {
//                   challengeData[challengeStep][selectedAccountSize].step1
//                     .dailyDrawdown
//                 }
//               </li>
//               <li>
//                 Overall Drawdown:{" "}
//                 {
//                   challengeData[challengeStep][selectedAccountSize].step1
//                     .overallDrawdown
//                 }
//               </li>
//               <li>Trading Period: Unlimited</li>
//               <li>First Withdrawal: N/A</li>
//               <li>Profit Split: N/A</li>
//             </ul>
//           </div>

//           {/* Step 2 for Two Step */}
//           {challengeStep === "Two Step" && (
//             <div className="col-span-1">
//               <h2 className="text-xl font-bold text-center mb-4">Step 2</h2>
//               <ul className="space-y-2">
//                 <li>
//                   Profit Target:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].step2
//                       .profitTarget
//                   }
//                 </li>
//                 <li>
//                   Minimum Trading Days:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].step2
//                       .minTradingDays
//                   }
//                 </li>
//                 <li>
//                   Daily Drawdown:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].step2
//                       .dailyDrawdown
//                   }
//                 </li>
//                 <li>
//                   Overall Drawdown:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].step2
//                       .overallDrawdown
//                   }
//                 </li>
//                 <li>Trading Period: Unlimited</li>
//                 <li>First Withdrawal: N/A</li>
//                 <li>Profit Split: N/A</li>
//               </ul>
//             </div>
//           )}

//           {/* Funded Account */}
//           <div className="col-span-1">
//             <h2 className="text-xl font-bold text-center mb-4">
//               Funded Account
//             </h2>
//             <ul className="space-y-2">
//               <li>
//                 Profit Target:{" "}
//                 {
//                   challengeData[challengeStep][selectedAccountSize].funded
//                     .profitTarget
//                 }
//               </li>
//               <li>
//                 Minimum Trading Days:{" "}
//                 {
//                   challengeData[challengeStep][selectedAccountSize].funded
//                     .minTradingDays
//                 }
//               </li>
//               <li>
//                 Daily Drawdown:{" "}
//                 {
//                   challengeData[challengeStep][selectedAccountSize].funded
//                     .dailyDrawdown
//                 }
//               </li>
//               <li>
//                 Overall Drawdown:{" "}
//                 {
//                   challengeData[challengeStep][selectedAccountSize].funded
//                     .overallDrawdown
//                 }
//               </li>
//               <li>Trading Period: Unlimited</li>
//               <li>
//                 First Withdrawal:{" "}
//                 {
//                   challengeData[challengeStep][selectedAccountSize].funded
//                     .firstWithdrawal
//                 }
//               </li>
//               <li>
//                 Profit Split:{" "}
//                 {
//                   challengeData[challengeStep][selectedAccountSize].funded
//                     .profitSplit
//                 }
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountChallenge;

// import React, { useState } from "react";

// const AccountChallenge = () => {
//   const [selectedAccountSize, setSelectedAccountSize] = useState("5k");
//   const [challengeStep, setChallengeStep] = useState("Two Step"); // Toggle between "Two Step" and "One Step"

//   const accountSizes = ["5k", "10k", "25k", "50k", "100k"];

//   // Challenge data for each account size and step
//   const challengeData = {
//     "Two Step": {
//       "5k": {
//         step1: {
//           profitTarget: "10%",
//           minTradingDays: 3,
//           dailyDrawdown: "5%",
//           overallDrawdown: "10%",
//         },
//         step2: {
//           profitTarget: "5%",
//           minTradingDays: 3,
//           dailyDrawdown: "5%",
//           overallDrawdown: "10%",
//         },
//         funded: {
//           profitTarget: "N/A",
//           minTradingDays: 3,
//           dailyDrawdown: "5%",
//           overallDrawdown: "10%",
//           profitSplit: "Up to 95%",
//           firstWithdrawal: "Bi-Weekly",
//         },
//       },
//       // Define data for other account sizes similarly...
//     },
//     "One Step": {
//       "5k": {
//         step1: {
//           profitTarget: "10%",
//           minTradingDays: 3,
//           dailyDrawdown: "4%",
//           overallDrawdown: "6%",
//         },
//         funded: {
//           profitTarget: "N/A",
//           minTradingDays: 3,
//           dailyDrawdown: "4%",
//           overallDrawdown: "6%",
//           profitSplit: "Up to 95%",
//           firstWithdrawal: "Bi-Weekly",
//         },
//       },
//       // Define data for other account sizes similarly...
//     },
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
//       <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
//         {/* Left Side: Account Size and Price */}
//         <div className="md:w-1/3 p-6 bg-green-100 rounded-l-lg">
//           <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
//             Choose The Account Size
//           </h1>

//           {/* Toggle Step */}
//           <div className="flex justify-center space-x-4 mb-6">
//             <button
//               onClick={() => setChallengeStep("Two Step")}
//               className={`px-4 py-2 rounded-lg border-2 ${
//                 challengeStep === "Two Step"
//                   ? "border-green-600 bg-green-50"
//                   : "border-gray-300"
//               }`}
//             >
//               Two Step
//             </button>
//             <button
//               onClick={() => setChallengeStep("One Step")}
//               className={`px-4 py-2 rounded-lg border-2 ${
//                 challengeStep === "One Step"
//                   ? "border-green-600 bg-green-50"
//                   : "border-gray-300"
//               }`}
//             >
//               One Step
//             </button>
//           </div>

//           {/* Account Sizes */}
//           <div className="flex flex-wrap justify-center space-x-4 mb-6">
//             {accountSizes.map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedAccountSize(size)}
//                 className={`px-4 py-2 rounded-lg border-2 ${
//                   selectedAccountSize === size
//                     ? "border-green-600 bg-green-50"
//                     : "border-gray-300"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>

//           {/* Price and Button */}
//           <div className="text-center">
//             <div className="text-4xl font-bold text-green-700">
//               ${selectedAccountSize === "5k" ? "59" : "Price Varies"}
//             </div>
//             <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500">
//               Buy Challenge
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Challenge Details */}
//         <div className="md:w-2/3 p-6 bg-white rounded-r-lg">
//           <div className="grid grid-cols-2 gap-6">
//             {/* Step 1 */}
//             <div className="col-span-1">
//               <h2 className="text-xl font-bold text-center mb-4">Step 1</h2>
//               <ul className="space-y-2">
//                 <li>
//                   Profit Target:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].step1
//                       .profitTarget
//                   }
//                 </li>
//                 <li>
//                   Minimum Trading Days:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].step1
//                       .minTradingDays
//                   }
//                 </li>
//                 <li>
//                   Daily Drawdown:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].step1
//                       .dailyDrawdown
//                   }
//                 </li>
//                 <li>
//                   Overall Drawdown:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].step1
//                       .overallDrawdown
//                   }
//                 </li>
//                 <li>Trading Period: Unlimited</li>
//                 <li>First Withdrawal: N/A</li>
//                 <li>Profit Split: N/A</li>
//               </ul>
//             </div>

//             {/* Step 2 or Funded Account */}
//             {challengeStep === "Two Step" && (
//               <div className="col-span-1">
//                 <h2 className="text-xl font-bold text-center mb-4">Step 2</h2>
//                 <ul className="space-y-2">
//                   <li>
//                     Profit Target:{" "}
//                     {
//                       challengeData[challengeStep][selectedAccountSize].step2
//                         .profitTarget
//                     }
//                   </li>
//                   <li>
//                     Minimum Trading Days:{" "}
//                     {
//                       challengeData[challengeStep][selectedAccountSize].step2
//                         .minTradingDays
//                     }
//                   </li>
//                   <li>
//                     Daily Drawdown:{" "}
//                     {
//                       challengeData[challengeStep][selectedAccountSize].step2
//                         .dailyDrawdown
//                     }
//                   </li>
//                   <li>
//                     Overall Drawdown:{" "}
//                     {
//                       challengeData[challengeStep][selectedAccountSize].step2
//                         .overallDrawdown
//                     }
//                   </li>
//                   <li>Trading Period: Unlimited</li>
//                   <li>First Withdrawal: N/A</li>
//                   <li>Profit Split: N/A</li>
//                 </ul>
//               </div>
//             )}

//             {/* Funded Account */}
//             <div className="col-span-2">
//               <h2 className="text-xl font-bold text-center mb-4">
//                 Funded Account
//               </h2>
//               <ul className="space-y-2">
//                 <li>
//                   Profit Target:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].funded
//                       .profitTarget
//                   }
//                 </li>
//                 <li>
//                   Minimum Trading Days:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].funded
//                       .minTradingDays
//                   }
//                 </li>
//                 <li>
//                   Daily Drawdown:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].funded
//                       .dailyDrawdown
//                   }
//                 </li>
//                 <li>
//                   Overall Drawdown:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].funded
//                       .overallDrawdown
//                   }
//                 </li>
//                 <li>Trading Period: Unlimited</li>
//                 <li>
//                   First Withdrawal:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].funded
//                       .firstWithdrawal
//                   }
//                 </li>
//                 <li>
//                   Profit Split:{" "}
//                   {
//                     challengeData[challengeStep][selectedAccountSize].funded
//                       .profitSplit
//                   }
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountChallenge;

// import React, { useState } from "react";

// const ChallengePage = () => {
//   const [selectedStep, setSelectedStep] = useState("Two Step");
//   const [selectedAccount, setSelectedAccount] = useState("5k");

//   const accountPrices = {
//     "5k": 59,
//     "10k": 99,
//     "25k": 159,
//     "50k": 299,
//     "100k": 499,
//   };

//   const challengeRules = {
//     "Two Step": {
//       step1: {
//         profitTarget: "10%",
//         minTradingDays: 3,
//         dailyDrawdown: "4%",
//         overallDrawdown: "6%",
//       },
//       funded: {
//         profitTarget: "N/A",
//         minTradingDays: 3,
//         dailyDrawdown: "4%",
//         overallDrawdown: "6%",
//         firstWithdrawal: "Bi-Weekly",
//         profitSplit: "Up to 95%",
//       },
//     },
//     "One Step": {
//       step1: {
//         profitTarget: "10%",
//         minTradingDays: 3,
//         dailyDrawdown: "4%",
//         overallDrawdown: "6%",
//       },
//       funded: {
//         profitTarget: "N/A",
//         minTradingDays: 3,
//         dailyDrawdown: "4%",
//         overallDrawdown: "6%",
//         firstWithdrawal: "Bi-Weekly",
//         profitSplit: "Up to 95%",
//       },
//     },
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-6xl bg-white shadow-md rounded-lg flex">
//         {/* Left Section */}
//         <div className="w-1/3 p-6 bg-green-50 rounded-l-lg">
//           <h2 className="text-2xl font-semibold text-center mb-4">
//             Choose The Account Size
//           </h2>

//           {/* Step Toggle */}
//           <div className="flex justify-center space-x-4 mb-6">
//             <button
//               className={`px-4 py-2 rounded-lg ${
//                 selectedStep === "Two Step"
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200 text-gray-700"
//               }`}
//               onClick={() => setSelectedStep("Two Step")}
//             >
//               Two Step
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg ${
//                 selectedStep === "One Step"
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200 text-gray-700"
//               }`}
//               onClick={() => setSelectedStep("One Step")}
//             >
//               One Step
//             </button>
//           </div>

//           {/* Account Sizes */}
//           <div className="flex justify-center space-x-4 mb-6">
//             {Object.keys(accountPrices).map((account) => (
//               <button
//                 key={account}
//                 className={`px-4 py-2 rounded-lg ${
//                   selectedAccount === account
//                     ? "bg-green-500 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//                 onClick={() => setSelectedAccount(account)}
//               >
//                 {account}
//               </button>
//             ))}
//           </div>

//           {/* Price */}
//           <div className="text-center">
//             <p className="text-4xl font-bold text-green-700 mb-4">
//               ${accountPrices[selectedAccount]}
//             </p>
//             <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
//               Buy Challenge
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-2/3 p-6">
//           <div className="flex justify-between">
//             {/* Step 1 */}
//             <div className="w-1/2 pr-4">
//               <h3 className="text-lg font-semibold text-center mb-4">Step 1</h3>
//               <ul className="space-y-2">
//                 <li>
//                   Profit Target:{" "}
//                   {challengeRules[selectedStep].step1.profitTarget}
//                 </li>
//                 <li>
//                   Minimum Trading Days:{" "}
//                   {challengeRules[selectedStep].step1.minTradingDays}
//                 </li>
//                 <li>
//                   Daily Drawdown:{" "}
//                   {challengeRules[selectedStep].step1.dailyDrawdown}
//                 </li>
//                 <li>
//                   Overall Drawdown:{" "}
//                   {challengeRules[selectedStep].step1.overallDrawdown}
//                 </li>
//                 <li>Trading Period: Unlimited</li>
//               </ul>
//             </div>

//             {/* Funded Account */}
//             <div className="w-1/2 pl-4">
//               <h3 className="text-lg font-semibold text-center mb-4">
//                 Funded Account
//               </h3>
//               <ul className="space-y-2">
//                 <li>
//                   Profit Target:{" "}
//                   {challengeRules[selectedStep].funded.profitTarget}
//                 </li>
//                 <li>
//                   Minimum Trading Days:{" "}
//                   {challengeRules[selectedStep].funded.minTradingDays}
//                 </li>
//                 <li>
//                   Daily Drawdown:{" "}
//                   {challengeRules[selectedStep].funded.dailyDrawdown}
//                 </li>
//                 <li>
//                   Overall Drawdown:{" "}
//                   {challengeRules[selectedStep].funded.overallDrawdown}
//                 </li>
//                 <li>
//                   First Withdrawal:{" "}
//                   {challengeRules[selectedStep].funded.firstWithdrawal}
//                 </li>
//                 <li>
//                   Profit Split:{" "}
//                   {challengeRules[selectedStep].funded.profitSplit}
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChallengePage;

// import React, { useState } from "react";

// function AccountSize() {
//   let [twoStep, setTwoStep] = useState(true);
//   return (
//     <div>
//       <h1>Account Size</h1>
//       {/* <button onClick={() => setTwoStep(true)}>Two Step</button>
//       {twoStep && <button onClick={() => setTwoStep(false)}>One Step</button>} */}
//       {twoStep ? (
//         <div>
//           {/* <h1>Two Step</h1> */}
//           <button onClick={() => setTwoStep(true)}>Two Step</button>
//         </div>
//       ) : (
//         <div>
//           {/* <h1>One Step</h1> */}
//           <button onClick={() => setTwoStep(false)}>One Step</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AccountSize;

// import React, { useState } from "react";

// const AccountSize = () => {
//   const [selectedStep, setSelectedStep] = useState("Two Step");
//   const [selectedAccount, setSelectedAccount] = useState("5k");

//   const accountPrices = {
//     "5k": 59,
//     "10k": 99,
//     "25k": 159,
//     "50k": 299,
//     "100k": 499,
//   };

//   const challengeRules = {
//     "Two Step": {
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
//         firstWithdrawal: "Bi-Weekly",
//         profitSplit: "Up to 95%",
//       },
//       funded: {
//         profitTarget: "N/A",
//         minTradingDays: 3,
//         dailyDrawdown: "4%",
//         overallDrawdown: "6%",
//         tradingPeriod: "Unlimited",
//         firstWithdrawal: "Bi-Weekly",
//         profitSplit: "Up to 95%",
//       },
//     },
//     "One Step": {
//       step1: {
//         profitTarget: "10%",
//         minTradingDays: 3,
//         dailyDrawdown: "4%",
//         overallDrawdown: "6%",
//         tradingPeriod: "Unlimited",
//         firstWithdrawal: "N/A",
//         profitSplit: "N/A",
//       },
//       funded: {
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

//   return (
//     <div className="w-full max-w-[1440px] flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full flex mx-12">
//         {/* Left Section */}
//         <div className="w-1/3 p-6 mb-4 rounded-2xl bg-white ">
//           {/* <h2 className="text-2xl font-semibold text-center">
//             Choose The Account Size
//           </h2> */}

//           {/* Step Toggle */}
//           <div className="flex justify-start space-x-4 mb-6">
//             <button
//               className={`px-4 font-semibold text-xl py-2 rounded-lg ${
//                 selectedStep === "Two Step"
//                   ? "bg-green-500 text-white font-bold"
//                   : "bg-gray-200 text-gray-700"
//               }`}
//               onClick={() => setSelectedStep("Two Step")}
//             >
//               Two Step
//             </button>
//             <button
//               className={`px-4 font-semibold text-xl py-2 rounded-lg ${
//                 selectedStep === "One Step"
//                   ? "bg-green-500 text-white font-bold"
//                   : "bg-gray-200 text-gray-700"
//               }`}
//               onClick={() => setSelectedStep("One Step")}
//             >
//               One Step
//             </button>
//           </div>

//           {/* Account Sizes */}
//           <div className="flex justify-start space-x-2 font-semibold mb-6">
//             {Object.keys(accountPrices).map((account) => (
//               <button
//                 key={account}
//                 className={`px-3 py-2 rounded-lg ${
//                   selectedAccount === account
//                     ? "bg-green-500 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//                 onClick={() => setSelectedAccount(account)}
//               >
//                 {account}
//               </button>
//             ))}
//           </div>

//           {/* Price */}
//           <div className="text-center">
//             <p className="text-4xl font-bold text-green-700 mb-4 text-start">
//               ${accountPrices[selectedAccount]}
//             </p>
//             <button className="px-6 py-2 text-center bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
//               Buy Challenge
//             </button>
//           </div>
//         </div>
//         {/* Right Section */}
//         <div className="w-2/3 p-6 ml-10 rounded-2xl bg-white">
//           <div className="grid grid-cols-2 gap-6">
//             <div className="border-r-2 border-gray-300 pr-6">
//               <h3 className="text-lg font-semibold text-center mb-4">Step 1</h3>
//               <ul className="space-y-2">
//                 <li>
//                   Profit Target:{" "}
//                   {challengeRules[selectedStep].step1.profitTarget}
//                 </li>
//                 <li>
//                   Minimum Trading Days:{" "}
//                   {challengeRules[selectedStep].step1.minTradingDays}
//                 </li>
//                 <li>
//                   Daily Drawdown:{" "}
//                   {challengeRules[selectedStep].step1.dailyDrawdown}
//                 </li>
//                 <li>
//                   Overall Drawdown:{" "}
//                   {challengeRules[selectedStep].step1.overallDrawdown}
//                 </li>
//                 <li>
//                   Trading Period:{" "}
//                   {challengeRules[selectedStep].step1.tradingPeriod}
//                 </li>
//                 <li>
//                   First Withdrawal:{" "}
//                   {challengeRules[selectedStep].step1.firstWithdrawal}
//                 </li>
//                 <li>
//                   Profit Split: {challengeRules[selectedStep].step1.profitSplit}
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-center mb-4">
//                 Funded Account
//               </h3>
//               <ul className="space-y-2">
//                 <li>
//                   Profit Target:{" "}
//                   {challengeRules[selectedStep].funded.profitTarget}
//                 </li>
//                 <li>
//                   Minimum Trading Days:{" "}
//                   {challengeRules[selectedStep].funded.minTradingDays}
//                 </li>
//                 <li>
//                   Daily Drawdown:{" "}
//                   {challengeRules[selectedStep].funded.dailyDrawdown}
//                 </li>
//                 <li>
//                   Overall Drawdown:{" "}
//                   {challengeRules[selectedStep].funded.overallDrawdown}
//                 </li>
//                 <li>
//                   Trading Period:{" "}
//                   {challengeRules[selectedStep].funded.tradingPeriod}
//                 </li>
//                 <li>
//                   First Withdrawal:{" "}
//                   {challengeRules[selectedStep].funded.firstWithdrawal}
//                 </li>
//                 <li>
//                   Profit Split:{" "}
//                   {challengeRules[selectedStep].funded.profitSplit}
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountSize;

// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";

// const AccountSize = () => {
//   const [selectedStep, setSelectedStep] = useState("Two Step");
//   const [selectedAccount, setSelectedAccount] = useState("5k");

//   const accountPrices = {
//     "5k": 59,
//     "10k": 99,
//     "25k": 159,
//     "50k": 299,
//     "100k": 499,
//   };

//   const challengeRules = {
//     "Two Step": {
//       profitTarget: ["10%", "5%", "N/A"],
//       minTradingDays: ["3", "3", "3"],
//       dailyDrawdown: ["5%", "5%", "5%"],
//       overallDrawdown: ["10%", "10%", "10%"],
//       tradingPeriod: ["Unlimited", "Unlimited", "Unlimited"],
//       firstWithdrawal: ["N/A", "N/A", "Bi-Weekly"],
//       profitSplit: ["N/A", "N/A", "Up to 95%"],
//     },
//     "One Step": {
//       profitTarget: ["10%", "N/A"],
//       minTradingDays: ["3", "3"],
//       dailyDrawdown: ["4%", "4%"],
//       overallDrawdown: ["6%", "6%"],
//       tradingPeriod: ["Unlimited", "Unlimited"],
//       firstWithdrawal: ["N/A", "Bi-Weekly"],
//       profitSplit: ["N/A", "Up to 95%"],
//     },
//   };

//   const RuleRow = ({ label, values }) => (
//     <div className="flex justify-between items-center py-2 border-b border-gray-200">
//       <span className="text-gray-600 w-1/4">{label}</span>
//       {values.map((value, index) => (
//         <span key={index} className="font-semibold w-1/4 text-center">
//           {value}
//         </span>
//       ))}
//     </div>
//   );

//   return (
//     <div className="w-full max-w-[1440px] flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full flex mx-12">
//         {/* Left Section */}
//         <div className="w-1/3 p-6 mb-4 rounded-2xl bg-white">
//           <h2 className="text-2xl font-semibold mb-6">Two Step Challenge</h2>

//           <div className="flex justify-start space-x-4 mb-6">
//             <button
//               className={`px-4 font-semibold text-xl py-2 rounded-lg ${
//                 selectedStep === "Two Step"
//                   ? "bg-green-500 text-white font-bold"
//                   : "bg-gray-200 text-gray-700"
//               }`}
//               onClick={() => setSelectedStep("Two Step")}
//             >
//               Two Step
//             </button>
//             <button
//               className={`px-4 font-semibold text-xl py-2 rounded-lg ${
//                 selectedStep === "One Step"
//                   ? "bg-green-500 text-white font-bold"
//                   : "bg-gray-200 text-gray-700"
//               }`}
//               onClick={() => setSelectedStep("One Step")}
//             >
//               One Step
//             </button>
//           </div>

//           <div className="flex justify-start space-x-2 font-semibold mb-6">
//             {Object.keys(accountPrices).map((account) => (
//               <button
//                 key={account}
//                 className={`px-3 py-2 rounded-lg ${
//                   selectedAccount === account
//                     ? "bg-green-500 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//                 onClick={() => setSelectedAccount(account)}
//               >
//                 {account}
//               </button>
//             ))}
//           </div>

//           <div className="text-center">
//             <p className="text-4xl font-bold text-green-700 mb-4 text-start">
//               ${accountPrices[selectedAccount]}
//             </p>
//             <button className="px-6 py-2 text-center bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
//               Buy Challenge
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-2/3 p-6 ml-10 rounded-2xl bg-white">
//           <Card>
//             <CardContent className="pt-6">
//               <div className="flex justify-between mb-4 font-bold">
//                 <span className="w-1/4"></span>
//                 <span className="w-1/4 text-center">Step 1</span>
//                 {selectedStep === "Two Step" && (
//                   <span className="w-1/4 text-center">Step 2</span>
//                 )}
//                 <span className="w-1/4 text-center">Funded Account</span>
//               </div>
//               <RuleRow
//                 label="Profit Target"
//                 values={challengeRules[selectedStep].profitTarget}
//               />
//               <RuleRow
//                 label="Minimum Trading Days"
//                 values={challengeRules[selectedStep].minTradingDays}
//               />
//               <RuleRow
//                 label="Daily Drawdown"
//                 values={challengeRules[selectedStep].dailyDrawdown}
//               />
//               <RuleRow
//                 label="Overall Drawdown"
//                 values={challengeRules[selectedStep].overallDrawdown}
//               />
//               <RuleRow
//                 label="Trading Period"
//                 values={challengeRules[selectedStep].tradingPeriod}
//               />
//               <RuleRow
//                 label="First Withdrawal"
//                 values={challengeRules[selectedStep].firstWithdrawal}
//               />
//               <RuleRow
//                 label="Profit Split"
//                 values={challengeRules[selectedStep].profitSplit}
//               />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountSize;

import React, { useState } from "react";

const AccountSize = () => {
  const [selectedStep, setSelectedStep] = useState("Two Step");
  const [selectedAccount, setSelectedAccount] = useState("5k");

  const accountPrices = {
    "5k": 59,
    "10k": 99,
    "25k": 159,
    "50k": 299,
    "100k": 499,
  };

  const challengeRules = {
    "Two Step": {
      profitTarget: ["10%", "5%", "N/A"],
      minTradingDays: ["3", "3", "3"],
      dailyDrawdown: ["5%", "5%", "5%"],
      overallDrawdown: ["10%", "10%", "10%"],
      tradingPeriod: ["Unlimited", "Unlimited", "Unlimited"],
      firstWithdrawal: ["N/A", "N/A", "Bi-Weekly"],
      profitSplit: ["N/A", "N/A", "Up to 95%"],
    },
    "One Step": {
      profitTarget: ["10%", "N/A"],
      minTradingDays: ["3", "3"],
      dailyDrawdown: ["4%", "4%"],
      overallDrawdown: ["6%", "6%"],
      tradingPeriod: ["Unlimited", "Unlimited"],
      firstWithdrawal: ["N/A", "Bi-Weekly"],
      profitSplit: ["N/A", "Up to 95%"],
    },
  };

  const RuleRow = ({ label, values }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-200">
      <span className=" font-bold w-1/4">{label}</span>
      {values.map((value, index) => (
        <span key={index} className="font-semibold w-1/4 text-center">
          {value}
        </span>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-[1440px] flex justify-center items-center">
      <div className="w-full flex mx-12">
        {/* Left Section */}
        <div className="w-1/3 p-7 rounded-2xl shadow-lg bg-white flex justify-around flex-col py-12">
          {/* <h2 className="text-2xl font-semibold mb-6">Two Step Challenge</h2> */}

          <div className="flex justify-start space-x-4 mb-6">
            <button
              className={`px-4 font-semibold text-xl py-2 rounded-xl ${
                selectedStep === "Two Step"
                  ? "justify-center px-7 border py-[25px] text-base font-semibold text-white bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-xl max-md:px-5"
                  : "bg-[#F1F1F1] text-gray-700"
              }`}
              onClick={() => setSelectedStep("Two Step")}
            >
              Two Step
            </button>
            <button
              className={`px-4 font-semibold text-xl py-2 rounded-lg ${
                selectedStep === "One Step"
                  ? "justify-center px-7 border py-[25px] text-base font-semibold text-white bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-xl max-md:px-5"
                  : "bg-[#F1F1F1] text-gray-700"
              }`}
              onClick={() => setSelectedStep("One Step")}
            >
              One Step
            </button>
          </div>

          <div className="flex justify-start space-x-2 font-semibold mb-6">
            {Object.keys(accountPrices).map((account) => (
              <button
                key={account}
                className={`px-3 py-2 rounded-lg ${
                  selectedAccount === account
                    ? "justify-center px-7 border py-[25px] text-base font-semibold text-white bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-xl max-md:px-5"
                    : "bg-[#F1F1F1] text-gray-700"
                }`}
                onClick={() => setSelectedAccount(account)}
              >
                {account}
              </button>
            ))}
          </div>

          <div className="text-center">
            <p className="text-5xl font-bold mb-4 text-start">
              ${accountPrices[selectedAccount]}
            </p>
            <button
              className="justify-center px-8 py-3 text-base font-bold text-white 
          bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-[20px] max-md:px-5"
            >
              Buy Challenge
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-6 ml-10 rounded-2xl shadow-lg bg-white">
          <div className="rounded-lg p-4">
            <div className="flex justify-between mb-4 font-bold">
              <span className="w-1/4"></span>
              <span className="w-1/4 text-center">Step 1</span>
              {selectedStep === "Two Step" && (
                <span className="w-1/4 text-center ">Step 2</span>
              )}
              <span className="w-1/4 text-center">Funded Account</span>
            </div>
            <RuleRow
              label="Profit Target"
              values={challengeRules[selectedStep].profitTarget}
            />
            <RuleRow
              label="Minimum Trading Days"
              values={challengeRules[selectedStep].minTradingDays}
            />
            <RuleRow
              label="Daily Drawdown"
              values={challengeRules[selectedStep].dailyDrawdown}
            />
            <RuleRow
              label="Overall Drawdown"
              values={challengeRules[selectedStep].overallDrawdown}
            />
            <RuleRow
              label="Trading Period"
              values={challengeRules[selectedStep].tradingPeriod}
            />
            <RuleRow
              label="First Withdrawal"
              values={challengeRules[selectedStep].firstWithdrawal}
            />
            <RuleRow
              label="Profit Split"
              values={challengeRules[selectedStep].profitSplit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSize;
