import React, { useState } from "react";
// import Toggle from "./Toggle";

const AccountSize = () => {
  const [planType, setPlanType] = useState("twoStep");
  const [accountSize, setAccountSize] = useState("50k");

  const planData = {
    twoStep: {
      step1: {
        profitTarget: "10%",
        minTradingDays: 3,
        dailyDrawdown: "5%",
        overallDrawdown: "10%",
        tradingPeriod: "Unlimited",
        firstWithdrawal: "N/A",
        profitSplit: "N/A",
      },
      step2: {
        profitTarget: "5%",
        minTradingDays: 3,
        dailyDrawdown: "5%",
        overallDrawdown: "10%",
        tradingPeriod: "Unlimited",
        firstWithdrawal: "N/A",
        profitSplit: "N/A",
      },
      fundedAccount: {
        profitTarget: "N/A",
        minTradingDays: 3,
        dailyDrawdown: "5%",
        overallDrawdown: "10%",
        tradingPeriod: "Unlimited",
        firstWithdrawal: "Bi-Weekly",
        profitSplit: "Up to 95%",
      },
    },
    oneStep: {
      step1: {
        profitTarget: "10%",
        minTradingDays: 3,
        dailyDrawdown: "4%",
        overallDrawdown: "6%",
        tradingPeriod: "Unlimited",
        firstWithdrawal: "N/A",
        profitSplit: "N/A",
      },
      fundedAccount: {
        profitTarget: "N/A",
        minTradingDays: 3,
        dailyDrawdown: "4%",
        overallDrawdown: "6%",
        tradingPeriod: "Unlimited",
        firstWithdrawal: "Bi-Weekly",
        profitSplit: "Up to 95%",
      },
    },
  };

  const priceData = {
    "5k": 99,
    "10k": 149,
    "25k": 199,
    "50k": 299,
    "100k": 499,
  };

  const currentPlan = planData[planType];
  const currentPrice = priceData[accountSize];

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <Toggle
          pressed={planType === "twoStep"}
          onPressedChange={() =>
            setPlanType(planType === "twoStep" ? "oneStep" : "twoStep")
          }
        >
          {planType === "twoStep" ? "Two Step" : "One Step"}
        </Toggle>
        <div className="flex space-x-2">
          {Object.keys(priceData).map((size) => (
            <Toggle
              key={size}
              pressed={accountSize === size}
              onPressedChange={() => setAccountSize(size)}
              className={`w-12 ${
                accountSize === size ? "bg-green-500" : "bg-gray-200"
              }`}
            >
              {size}
            </Toggle>
          ))}
        </div>
      </div>

      <div className="text-3xl font-bold mb-4">${currentPrice}</div>

      <button className="bg-green-500 text-white px-4 py-2 rounded-full mb-4">
        Buy Challenge
      </button>

      <div className="grid grid-cols-3 gap-4">
        {Object.entries(currentPlan).map(([phase, data]) => (
          <div key={phase} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              {phase === "step1"
                ? "Step 1"
                : phase === "step2"
                ? "Step 2"
                : "Funded Account"}
            </h3>
            {Object.entries(data).map(([key, value]) => (
              <div key={key} className="flex justify-between mb-1">
                <span className="text-sm">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </span>
                <span className="text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSize;
