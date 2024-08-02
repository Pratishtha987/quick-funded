import React from "react";

export default function FooterPage() {
  return (
    <div>
      <div className="flex flex-col items-center px-20 py-16 bg-white max-md:px-5">
        <div className="flex gap-5 justify-between mt-7 w-full max-w-[1440px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-[6.81] w-[245px]">
            <img
              loading="lazy"
              srcSet="..."
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex overflow-hidden relative flex-col justify-center items-center w-full aspect-[6.81]">
              <img
                loading="lazy"
                srcSet="..."
                className="object-cover absolute inset-0 size-full"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="w-full aspect-[6.67]"
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between my-auto text-lg leading-5 capitalize text-neutral-900 max-md:flex-wrap">
            <div>Feature</div>
            <div>Exchange</div>
            <div>about Us</div>
            <div>Exchange</div>
          </div>
        </div>
        <div className="shrink-0 mt-7 max-w-full h-px border border-solid bg-neutral-900 border-neutral-900 w-[1440px]" />
        <div className="flex gap-5 justify-center mt-8 w-full max-w-[1440px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-lg leading-6 text-center capitalize text-neutral-900">
              2024 Featured. All Right Reserved
            </div>
            <div className="flex gap-3 justify-center pr-20 mt-5 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3594ddfa24a5cce6d220fa333dcca8494683cd09ffbb9d9f82999c6cc29ac92?"
                className="shrink-0 w-12 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fb7c081385cdd80d219f3429791ad62c8d2a1a24db21ec5b61cf609f42585f1?"
                className="shrink-0 w-12 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f57013b53b0f780cf4920be31277cfd78bb9b4cbf36a75c36f6c99a8c2eb894?"
                className="shrink-0 w-12 aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col self-start text-lg leading-6 text-right capitalize text-neutral-900">
            <div>Terms of digital asset rate</div>
            <div className="mt-3">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
