import React from "react";
import icon from "../../Assets/logo.svg";

const Factor = () => {
  return ( 
    <div className="bg-white rounded-md lg:mb-0 mb-4 text-darkblue-500 flex flex-col sm:w-5/6 items-center lg:mx-10 py-10 transition duration-300 ease-in-out transform hover:bg-darkblue-500 hover:text-white">
      <div className="rounded-full shadow-xl p-3 mb-6 bg-white">
        <img src={icon} alt="company-logo" className="md:h-6 h-4" />
      </div>
      <p className="font-semibold">Unique Factor</p>
    </div>
  );
};

export default Factor;
