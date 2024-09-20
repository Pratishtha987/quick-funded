import React from "react";

function HeroSection() {
  return (
    <div
      className="mt-20 w-full max-w-[1438px] max-md:mt-10 max-md:max-w-full bg-cover bg-center"
      style={
        {
          // backgroundImage: "url('../bg.png')",
        }
      }
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {/*Hero Left section content Start */}
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-24 self-stretch px-5 leading-[100%] max-md:mt-10 max-md:max-w-full">
            <div
              className=" text-[54px] font-bold bg-clip-text 
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] leading-[60px] 
                max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
            >
              <p>
                {/* <h2 className=" text-neutral-900 ">Your Trading Journey,</h2> */}
                <span className="white">Your Trading Journey,</span>

                <br />
                <span className="font-[54px] bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)s] text-transparent">
                  Our Investment
                  <br />
                  Expertise!
                </span>
                {/* <span className="text-[#99fb07]">
                  Our Investment
                  <br />
                  Expertise!
                </span> */}
              </p>
            </div>

            <div
              className="mt-4 text-[18px] leading-9 bg-clip-text 
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-[#121316] opacity-[72%] max-md:max-w-full"
            >
              {/* <div className="mt-5 text-[18px] leading-9 bg-clip-text text-white max-md:max-w-full"> */}
              Excel through our QUICKFUNDED challenge and join our professional
              team of traders. Unlock the opportunity to trade with up to{" "}
              {/* <span className="text-2xl font-semibold bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)s] text-transparent"> */}
              <span className="text-[#99fb07]">$2 Million</span> in Funds!
            </div>

            {/* Buy Challange Button Start*/}
            <div className="flex gap-5 mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div
                className="justify-center px-8 py-3 text-base font-semibold text-white 
          bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-[20px] max-md:px-5"
              >
                Buy Challenge
              </div>
            </div>
            {/* Buy Challange Button End*/}
          </div>
        </div>
        {/*Hero Left section content End */}
        {/*Hero Right section content Start */}
        <div className="flex  flex-col  w-5/12 max-md:ml-0 max-md:w-full">
          <img
            src="../homepageimg.png"
            // loading="lazy"
            // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c4b0253c49841536fd081322de2891eaaba3168a2c385ed14e2c5a3da807a398?apiKey=720e6945420e46e981b891180116e7a4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b0253c49841536fd081322de2891eaaba3168a2c385ed14e2c5a3da807a398?apiKey=720e6945420e46e981b891180116e7a4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b0253c49841536fd081322de2891eaaba3168a2c385ed14e2c5a3da807a398?apiKey=720e6945420e46e981b891180116e7a4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b0253c49841536fd081322de2891eaaba3168a2c385ed14e2c5a3da807a398?apiKey=720e6945420e46e981b891180116e7a4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b0253c49841536fd081322de2891eaaba3168a2c385ed14e2c5a3da807a398?apiKey=720e6945420e46e981b891180116e7a4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b0253c49841536fd081322de2891eaaba3168a2c385ed14e2c5a3da807a398?apiKey=720e6945420e46e981b891180116e7a4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b0253c49841536fd081322de2891eaaba3168a2c385ed14e2c5a3da807a398?apiKey=720e6945420e46e981b891180116e7a4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b0253c49841536fd081322de2891eaaba3168a2c385ed14e2c5a3da807a398?apiKey=720e6945420e46e981b891180116e7a4&"
            className="grow w-cover aspect-[1.2] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        {/*Hero Right section content End */}
      </div>
    </div>
  );
}

export default HeroSection;
