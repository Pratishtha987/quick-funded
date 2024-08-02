// import React from "react";
// import { RefreshCcw, ArrowUp, Percent, BarChart2, Layers } from "lucide-react";

// const FeatureBox = ({ icon, title, description, color }) => (
//   <div className={`${color} p-6 rounded-lg text-white mb-4 last:mb-0`}>
//     <div className="flex items-center justify-center mb-4 bg-white rounded-full w-12 h-12">
//       {React.cloneElement(icon, {
//         className: `${color.replace("bg-", "text-")} stroke-[1.5]`,
//       })}
//     </div>
//     <h3 className="text-xl font-bold mb-2">{title}</h3>
//     <p className="text-sm">{description}</p>
//   </div>
// );
// const features = [
//   {
//     icon: <RefreshCcw size={24} />,
//     title: "20% Refund",
//     description:
//       "In the event that you do not succeed in the challenge, we will reimburse 20% of the fee.",
//     color: "bg-blue-500",
//   },
//   {
//     icon: <ArrowUp size={24} />,
//     title: "Bi-Weekly Payouts",
//     description:
//       "At the funded stage, you can make withdrawals every two weeks.",
//     color: "bg-green-500",
//   },
//   {
//     icon: <Percent size={24} />,
//     title: "80% Withdrawal",
//     description:
//       "Enjoy 80% share on your first withdrawal, with no profit targets on funded accounts.",
//     color: "bg-orange-500",
//   },
//   {
//     icon: <BarChart2 size={24} />,
//     title: "Scale Up To 2 Million",
//     description: "We offer you a scaling plan with funding of up to 2 million.",
//     color: "bg-emerald-500",
//   },
//   {
//     icon: <Layers size={24} />,
//     title: "Match Trader",
//     description:
//       "Match Trader offers an intuitive and efficient platform for seamless trading experiences.",
//     color: "bg-purple-500",
//   },
// ];
// function PerkOfQF() {
//   return (
//     <div>
//       <main className="container mx-auto px-4 py-8">
//         <div className="max-w-md mx-auto">
//           {features.map((feature, index) => (
//             <FeatureBox key={index} {...feature} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }
// //   return (
// //     <div
// //       className="flex gap-5 justify-between px-5 mt-16 w-screen text-white max-w-[1440px] max-md:flex-wrap
// // max-md:mt-10 max-md:max-w-full"
// //     >
// //       <div className="flex col-md-3 col-sm-12 flex-col justify-center px-6 py-8 bg-sky-500 rounded-2xl max-md:px-5">
// //         <img
// //           loading="lazy"
// //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/60aeae24ca7dc0f675b1d3f50862f2beb9e61808eee1c0f01461ea52986015be?apiKey=720e6945420e46e981b891180116e7a4&"
// //           className="aspect-square w-[90px]"
// //         />
// //         <div className="mt-6 text-3xl font-semibold leading-10 capitalize">
// //           20 % Refund
// //           <br />
// //           if failed
// //         </div>
// //         <div className="mt-3 text-base leading-6">
// //           In the event that you do not succeed in the challenge, we will
// //           reimburse 20% of   the fee.
// //         </div>
// //       </div>

// //       <div className="flex col-md-3 col-sm-12  flex-col justify-center px-6 py-8 bg-lime-500 rounded-2xl max-md:px-5">
// //         <img
// //           loading="lazy"
// //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea09f606b1e035108a7460e446cecfddccedb35ac3949fc793fc2197d7d276f5?apiKey=720e6945420e46e981b891180116e7a4&"
// //           className="aspect-square w-[90px]"
// //         />
// //         <div className="mt-6 text-3xl font-semibold leading-10 capitalize">
// //           Bi-Weekly Payouts
// //         </div>
// //         <div className="mt-3 text-base leading-6">
// //           At the funded stage, you can make withdrawals every two weeks.
// //           <br />
// //         </div>
// //       </div>

// //       <div className="flex col-md-3 col-sm-12 flex-col justify-center px-6 py-8 bg-amber-500 rounded-2xl max-md:px-5">
// //         <img
// //           loading="lazy"
// //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/d469da1ef36881c23b93858b49bc8ab6f1862b6bf4c4ce5cadb9660cf55e4adf?apiKey=720e6945420e46e981b891180116e7a4&"
// //           className="aspect-square w-[90px]"
// //         />
// //         <div className="mt-6 text-3xl font-semibold leading-10 capitalize">
// //           85% Withdrawal
// //         </div>
// //         <div className="mt-3 text-base leading-6">
// //           Enjoy 85% share on your first withdrawal, with no profit targets on
// //           funded accounts.
// //           <br />
// //         </div>
// //       </div>

// //       <div className="flex col-md-3 col-sm-12 flex-col justify-center px-6 py-8 bg-emerald-600 rounded-2xl max-md:px-5">
// //         <img
// //           loading="lazy"
// //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e3213db2adbddbfe08a5d20dffd45dcd41baff7815a6e6fc97194c1da9a400e?apiKey=720e6945420e46e981b891180116e7a4&"
// //           className="aspect-square w-[90px]"
// //         />
// //         <div className="mt-6 text-3xl font-semibold leading-10 capitalize">
// //           Scale up to 1 Million
// //         </div>
// //         <div className="mt-3 text-base leading-6">
// //           We offer you a scaling plan with funding of up to 1 million.
// //           <br />
// //           <br />
// //         </div>
// //       </div>

// //       <div className="flex col-md-3 col-sm-12 flex-col justify-center px-6 py-8 bg-violet-700 rounded-2xl max-md:px-5">
// //         <img
// //           loading="lazy"
// //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfa0d6645720b19ada0f502b0d1aa1a1de3a82292dbee0044ec462d79d10cf3c?apiKey=720e6945420e46e981b891180116e7a4&"
// //           className="aspect-square w-[90px]"
// //         />
// //         <div className="mt-6 text-3xl font-semibold leading-10 capitalize">
// //           Match Trader
// //           <br />
// //         </div>
// //         <div className="mt-3 text-base leading-6">
// //           Match Trader offers an intuitive and efficient platform for seamless
// //           trading
// //           <br />
// //           experiences.
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// export default PerkOfQF;

// import React from "react";
// import { RefreshCcw, ArrowUp, Percent, BarChart2, Layers } from "lucide-react";

// const FeatureBox = ({ icon, title, description, color }) => (
//   <div
//     className={`${color} p-6 rounded-lg text-white flex-shrink-0 w-72 mr-4 last:mr-0`}
//   >
//     <div className="flex items-center justify-center mb-4 bg-white rounded-full w-12 h-12">
//       {React.cloneElement(icon, {
//         className: `${color.replace("bg-", "text-")} stroke-[1.5]`,
//       })}
//     </div>
//     <h3 className="text-xl font-bold mb-2">{title}</h3>
//     <p className="text-sm">{description}</p>
//   </div>
// );

// const PerkOfQF = () => {
//   const features = [
//     {
//       icon: <RefreshCcw size={24} />,
//       title: "20% Refund",
//       description:
//         "In the event that you do not succeed in the challenge, we will reimburse 20% of the fee.",
//       color: "bg-blue-500",
//     },
//     {
//       icon: <ArrowUp size={24} />,
//       title: "Bi-Weekly Payouts",
//       description:
//         "At the funded stage, you can make withdrawals every two weeks.",
//       color: "bg-green-500",
//     },
//     {
//       icon: <Percent size={24} />,
//       title: "80% Withdrawal",
//       description:
//         "Enjoy 80% share on your first withdrawal, with no profit targets on funded accounts.",
//       color: "bg-orange-500",
//     },
//     {
//       icon: <BarChart2 size={24} />,
//       title: "Scale Up To 2 Million",
//       description:
//         "We offer you a scaling plan with funding of up to 2 million.",
//       color: "bg-emerald-500",
//     },
//     {
//       icon: <Layers size={24} />,
//       title: "Match Trader",
//       description:
//         "Match Trader offers an intuitive and efficient platform for seamless trading experiences.",
//       color: "bg-purple-500",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <main className="container mx-auto px-4 py-8">
//         <div className="flex overflow-x-auto pb-4 -mx-4 px-4">
//           {features.map((feature, index) => (
//             <FeatureBox key={index} {...feature} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PerkOfQF;

// import React from "react";
// import { RefreshCcw, ArrowUp, Percent, BarChart2, Layers } from "lucide-react";

// const FeatureBox = ({ icon, title, description, color }) => (
//   <div
//     className={`${color} p-2 rounded-lg text-white flex flex-col items-center justify-start h-full`}
//   >
//     <div className="flex items-center justify-center mb-1 bg-white rounded-full w-8 h-8">
//       {React.cloneElement(icon, {
//         className: `${color.replace("bg-", "text-")} stroke-[1.5]`,
//         size: 16,
//       })}
//     </div>
//     <h3 className="text-sm font-bold mb-1 text-center">{title}</h3>
//     <p className="text-xs text-center">{description}</p>
//   </div>
// );

// const PerkOfQF = () => {
//   const features = [
//     {
//       icon: <RefreshCcw />,
//       title: "20% Refund",
//       description: "Reimburse 20% if challenge not successful.",
//       color: "bg-blue-500",
//     },
//     {
//       icon: <ArrowUp />,
//       title: "Bi-Weekly Payouts",
//       description: "Withdrawals every two weeks when funded.",
//       color: "bg-green-500",
//     },
//     {
//       icon: <Percent />,
//       title: "80% Withdrawal",
//       description: "80% share on first withdrawal, no targets.",
//       color: "bg-orange-500",
//     },
//     {
//       icon: <BarChart2 />,
//       title: "Scale To 2 Million",
//       description: "Scaling plan up to 2 million funding.",
//       color: "bg-emerald-500",
//     },
//     {
//       icon: <Layers />,
//       title: "Match Trader",
//       description: "Intuitive platform for seamless trading.",
//       color: "bg-purple-500",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <main className="container mx-auto px-2 py-4">
//         <div className="grid grid-cols-5 gap-1">
//           {features.map((feature, index) => (
//             <FeatureBox key={index} {...feature} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PerkOfQF;

// import React from "react";
// import { RefreshCcw, ArrowUp, Percent, BarChart2, Layers } from "lucide-react";
// import {
//   FaSync,
//   FaCalendarAlt,
//   FaMoneyBillWave,
//   FaChartLine,
//   FaMobile,
// } from "react-icons/fa";

// const FeatureBox = ({ icon, title, description, color }) => (
//   <div
//     className={`rounded-full bg-${color} p-3 inline-flex items-center justify-center`}
//   >
//     <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
//       {React.cloneElement(icon, {
//         className: `${color.replace("bg-", "text-")} stroke-[1.5]`,
//         size: 32,
//       })}
//     </div>
//     <h3 className="text-2xl font-bold mb-2">{title}</h3>
//     <p className="text-sm">{description}</p>
//   </div>
// );

// const FeatureIcon = ({ icon: Icon, color }) => (
//   <div
//     className={`rounded-full bg-${color} p-3 inline-flex items-center justify-center`}
//   >
//     <div className="bg-white rounded-full p-2">
//       <Icon className={`text-${color} text-xl`} />
//     </div>
//   </div>
// );

// const PerkOfQF = () => {
//   const features = [
//     {
//       icon: <RefreshCcw />,
//       title: "20% Refund",
//       description:
//         "In the event that you do not succeed in the challenge, we will reimburse 20% of the fee.",
//       color: "bg-blue-500",
//     },
//     {
//       icon: <ArrowUp />,
//       title: "Bi-Weekly Payouts",
//       description:
//         "At the funded stage, you can make withdrawals every two weeks.",
//       color: "bg-green-500",
//     },
//     {
//       icon: <Percent />,
//       title: "80% Withdrawal",
//       description:
//         "Enjoy 80% share on your first withdrawal, with no profit targets on funded accounts.",
//       color: "bg-orange-500",
//     },
//     {
//       icon: <BarChart2 />,
//       title: "Scale Up To 2 Million",
//       description:
//         "We offer you a scaling plan with funding of up to 2 million.",
//       color: "bg-emerald-500",
//     },
//     {
//       icon: <FeatureIcon />,
//       title: "Match Trader",
//       description:
//         "Match Trader offers an intuitive and efficient platform for seamless trading experiences.",
//       color: "bg-purple-500",
//     },
//   ];

//   return (
//     <div className="bg-white mt-20 min-h-40">
//       <div className="flex flex-col px-5 my-auto font-bold mt-12 text-3xl leading-8 capitalize text-neutral-900 max-md:mt-10 max-md:max-w-full">
//         Perks of QUICK FUNDED
//       </div>
//       <main className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {features.map((feature, index) => (
//             // <FeatureBox key={index} {...feature} />
//             <FeatureIcon icon={FaMobile} color="purple-500" />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PerkOfQF;

import React from "react";
import { RefreshCw, ArrowUp, DollarSign, Wallet, Layout } from "lucide-react";

const PerksCard = ({ icon, title, description, color }) => (
  <div
    className={`bg-${color}-500 p-4 rounded-lg text-white flex flex-col items-center text-center`}
  >
    <div className="bg-white rounded-full p-2 mb-2">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const PerkOfQF = () => {
  const perks = [
    {
      icon: <RefreshCw className="text-blue-500" size={24} />,
      title: "20 % Refund",
      description:
        "In the event that you do not succeed in the challenge, we will reimburse 20% of the fee.",
      color: "blue",
    },
    {
      icon: <ArrowUp className="text-green-500" size={24} />,
      title: "Bi-Weekly Payouts",
      description:
        "At the funded stage, you can make withdrawals every two weeks.",
      color: "green",
    },
    {
      icon: <DollarSign className="text-orange-500" size={24} />,
      title: "80% Withdrawal",
      description:
        "Enjoy 80% share on your first withdrawal, with no profit targets on funded accounts.",
      color: "orange",
    },
    {
      icon: <Wallet className="text-emerald-500" size={24} />,
      title: "Scale Up To 2 Million",
      description:
        "We offer you a scaling plan with funding of up to 2 million.",
      color: "emerald",
    },
    {
      icon: <Layout className="text-purple-500" size={24} />,
      title: "Match Trader",
      description:
        "Match Trader offers an intuitive and efficient platform for seamless trading experiences.",
      color: "purple",
    },
  ];

  return (
    <div className="bg-white p-8 mt-4 rounded-lg">
      <h2 className="text-4xl font-bold text-green-600 mb-8">
        Perks Of QuickFunded
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {perks.map((perk, index) => (
          <PerksCard key={index} {...perk} />
        ))}
      </div>
    </div>
  );
};

export default PerkOfQF;
