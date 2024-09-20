// import React from "react";
// import { TrendingUp, Scale, MessageCircle } from "lucide-react";

// const QuickFundedDashboard = () => {
//   return (
//     <div className="">
//       <div className="flex flex-row max-w-4xl mx-auto p-6">
//         {/* <div className="flex justify-between items-start mb-8"> */}
//         <div>
//           <h1 className="text-4xl font-bold text-green-600">QuickFunded</h1>
//           <p className="mt-2 max-w-lg">
//             QuickFunded was founded in London by a group of accomplished
//             traders. Our goal is to build a community of ambitious traders who
//             are eager to achieve their highest aspirations.
//           </p>
//         </div>
//         <div>
//           <img src="../dashboard.jpg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickFundedDashboard;

// // import React from "react";
// // import { TrendingUp, Scale } from "lucide-react";

// // const DashboardComponent = ({ companyName, description, metrics }) => {
// //   return (
// //     <div className="flex flex-row">
// //       <div>
// //         <h2 className=" text-4xl font-bold text-green-600">QuickFunded</h2>
// //         <p>
// //           QuickFunded was founded in London by a group of accomplished traders.
// //           Our goal is to build a community of ambitious traders who are eager to
// //           achieve their highest aspirations.
// //         </p>
// //       </div>
// //       <div>
// //         <img src="../dashboard.jpg"></img>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardComponent;

// import React from "react";

// const QuickFundedDashboard = () => {
//   return (
//     <div className="p-6 rounded-lg mx-auto">
//       <div className="flex justify-between items-start">
//         <div className="flex flex-col justify-between max-w-lg">
//           <h1 className="text-4xl font-bold text-green-600">QuickFunded</h1>
//           <p className="text-gray-600">
//             QuickFunded was founded in London by a group of accomplished
//             traders. Our goal is to build a community of ambitious traders who
//             are eager to achieve their highest aspirations.
//           </p>
//         </div>
//         {/* Placeholder for the image you'll insert later */}
//         <div className="w-1/2">
//           {/* You can remove this placeholder div when you're ready to insert your image */}
//           <img src=".//dashboard.jpg"></img>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickFundedDashboard;

import React from "react";
import { TrendingUp, Scale } from "lucide-react";

const QuickFundedDashboard = () => {
  return (
    <div className="w-full justify-around max-w-[1438px] flex mx-auto mt-16 max-md:mt-10 max-md:max-w-full">
      {/* // <div className="mt-20    bg-cover bg-center"> */}
      <div className="flex justify-between items-start">
        <div
          className="flex flex-col max-w-lg mt-24 bg-clip-text 
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] leading-[60px] 
                max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
        >
          <h1 className="text-[54px] font-bold bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)s] text-transparent mb-2">
            QuickFunded
          </h1>
          <p
            className="mb-8 mt-4 text-[17px] leading-7 bg-clip-text 
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-[#121316] opacity-[72%] max-md:max-w-full"
          >
            QuickFunded was founded in London by a group of accomplished
            traders. Our goal is to build a community of ambitious traders who
            are eager to achieve their highest aspirations.
          </p>
        </div>
      </div>
      <div className="flex max-w-8xl bg-full">
        <img src="../dashboard.jpg" className="w-[600px]" />
      </div>
    </div>
  );
};

export default QuickFundedDashboard;
