import React from "react";

function MaximizeProfile() {
  return (
    // <div>
    //   <div>
    //     <img src="../public/tool-2.png" />
    //   </div>
    //   <div className="max-w-md text-center md:text-left">
    //     <h1 className="text-4xl font-bold text-green-500 mb-4">
    //       Maximize Your Profit
    //     </h1>
    //     <p className="text-gray-700 mb-4">
    //       Boost your profit split to an incredible 95% with our exclusive
    //       scaling plan! Simply achieve a total profit of 10% on your initial
    //       account balance for 4 consecutive months, and make at least 4
    //       withdrawals within those months.
    //     </p>
    //     <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
    //       Chat with us 💬
    //     </button>
    //   </div>
    // </div>
    <div className="max-w-[1438] flex md:flex-row items-center min-h-screen">
      <div className="flex md:flex-row items-center justify-center h-2/4 w-2/4">
        <img src="../tool-2.png" />
      </div>
      {/* <div> */}
      {/* <div className="absolute inset-0 rounded-full flex items-center justify-center"> */}
      {/* <Percent className="text-white" size={80} /> */}

      {/* </div> */}
      {/* <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-2 shadow-lg"></div> */}
      {/* <div className="absolute top-0 left-0 w-4 h-4 bg-green-300 rounded-full" />
        <div className="absolute top-8 right-0 w-2 h-2 bg-green-300 rounded-full" /> */}
      {/* </div> */}
      <div className="h-screen w-1/2 flex flex-col justify-center items-start ml-20  max-w-md text-start md:text-left">
        <h1
          className="text-[60px] font-bold text-start bg-clip-text 
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent mb-4 -mx-20"
        >
          Maximize Your Profit
        </h1>
        <p className="mb-4 -ml-20 text-start text-[#121316] opacity-[72%] font-[18px]">
          Boost your profit split to an incredible 95% with our exclusive
          scaling plan! Simply achieve a total profit of 10% on your initial
          account balance for 4 consecutive months, and make at least 4
          withdrawals within those months.
        </p>
      </div>
    </div>
  );
}

export default MaximizeProfile;

// import React from 'react';
// import { Percent, DollarSign } from 'lucide-react';

const MaximizeProfitComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">
      <div className="relative w-64 h-64 mb-8 md:mb-0 md:mr-8">
        <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center">
          <Percent className="text-white" size={80} />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-2 shadow-lg">
          <DollarSign className="text-green-500" size={24} />
        </div>
        <div className="absolute top-0 left-0 w-4 h-4 bg-green-300 rounded-full" />
        <div className="absolute top-8 right-0 w-2 h-2 bg-green-300 rounded-full" />
      </div>
      <div className="max-w-md text-center md:text-left">
        <h1 className="text-4xl font-bold text-green-500 mb-4">
          Maximize Your Profit
        </h1>
        <p className="text-gray-700 mb-4">
          Boost your profit split to an incredible 95% with our exclusive
          scaling plan! Simply achieve a total profit of 10% on your initial
          account balance for 4 consecutive months, and make at least 4
          withdrawals within those months.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
          Chat with us 💬
        </button>
      </div>
    </div>
  );
};

// export default MaximizeProfitComponent;
