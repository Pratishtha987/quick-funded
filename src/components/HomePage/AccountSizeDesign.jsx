// import React from "react";

// function AccountSizeDesign() {
//   return (
//     <div className="mt-20 relative w-[800px] h-96 overflow-hidden">
//       <img src="../SemiCirclePic.png" />
//       <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
//         <h2
//           className="text-[60px] font-bold text-between bg-clip-text
//                 bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent mb-4 -mx-20"
//         >
//           Choose The Account Size
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default AccountSizeDesign;

// import React from "react";

// function AccountSizeDesign() {
//   return (
//     <div className="mt-20 relative w-[800px] h-96 overflow-hidden">
//       <img src="../SemiCirclePic.png" />
//       <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
//         <h2
//           className="text-[60px] font-bold text-between bg-clip-text
//                 bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent mb-4 -mx-20"
//         >
//           Choose The Account Size
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default AccountSizeDesign;

import React from "react";

function AccountSizeDesign() {
  return (
    <div className="mt-10 md:mt-20 relative w-full overflow-hidden">
      <div className="w-full max-w-[800px] mx-auto relative">
        {/* Image container */}
        <div className="w-[300px] md:w-[600px] mx-auto">
          <img
            src="../SemiCirclePic.png"
            className="w-full h-auto object-contain"
            alt="Semi circle background"
          />
        </div>

        {/* Text container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h2 className="absolute w-full text-3xl md:text-[55px] leading-tight font-bold bg-clip-text bg-gradient-to-r from-[#88B92F] to-[#109523] text-transparent md:mt-8 md:pb-3">
            Choose The
            <br /> Account Size
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AccountSizeDesign;
