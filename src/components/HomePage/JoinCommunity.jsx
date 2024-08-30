import React from "react";
import { FaDiscord } from "react-icons/fa";

function JoinCommunity() {
  return (
    //   <div
    //     className="flex flex-col px-3 py-2 w-full max-w-[1440px] rounded-[48px] max-md:px-5
    // max-md:mt-10 max-md:max-w-full"
    //   >
    //     <div
    //       className="flex flex-col items-center p-10 mt-12 w-full text-lg leading-5
    // bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] max-w-[1440px] rounded-[30px] max-md:px-5 max-md:mt-10
    // max-md:max-w-full"
    //     >
    //       <div className="mt-4 text-6xl font-semibold text-center text-white capitalize max-md:max-w-full max-md:text-4xl">
    //         Join Our Community
    //       </div>
    //       <div className="mt-5 leading-7 text-center text-white capitalize w-[950px] max-md:max-w-full">
    //         Join our global trader community to share and gain market insights
    //         with traders worldwide
    //       </div>
    //       <div className="w-6/12 flex flex-row justify-around">
    //         <div className="flex gap-1 px-9 py-4 mt-16 mb-4 bg-white rounded-[120px] max-md:px-5 max-md:mt-10">
    //           <div className="bg-clip-text font-bold bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent">
    //             Join Discord
    //           </div>

    //           <img
    //             loading="lazy"
    //             src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f7e8386fe9d81e8df61a3463a19016893316bf954bda1b93b0b8983c979a7a?apiKey=720e6945420e46e981b891180116e7a4&"
    //             className="shrink-0 aspect-square w-[18px]"
    //           />
    //         </div>

    //         <div className="flex gap-1 px-9 py-4 mt-16 mb-4 bg-white rounded-[120px] max-md:px-5 max-md:mt-10">
    //           <div className="bg-clip-text font-bold bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent">
    //             Buy Challenge
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // <div
    //   className="flex flex-col px-3 py-2 w-full max-w-[1440px] rounded-[48px] max-md:px-5
    // max-md:mt-10 max-md:max-w-full"
    // >
    <div className="w-full bg-gradient-to-r from-lime-400 to-green-600 rounded-3xl p-24 px-36 text-center text-white shadow-lg">
      <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
      <p className="mb-8 text-lg">
        Join our global trader community to share and gain market insights with
        traders worldwide
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-white text-green-600 px-6 py-3 rounded-full flex items-center font-semibold hover:bg-gray-100 transition-colors">
          <FaDiscord className="mr-2 text-xl" />
          Join Discord
        </button>
        <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Buy Challenge
        </button>
      </div>
    </div>
    // </div>
  );
}

export default JoinCommunity;
