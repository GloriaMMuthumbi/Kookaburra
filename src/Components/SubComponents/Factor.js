import React from "react";
import icon from "../../Assets/logo.svg";

const Factor = () => {
  return ( 
    <div className="bg-white rounded-md text-darkblue-500 flex flex-col w-full items-center mx-10 py-10 transition duration-300 ease-in-out transform hover:bg-darkblue-500 hover:text-white">
      <div className="rounded-full shadow-xl p-3 mb-6 bg-white">
        <img src={icon} alt="company-logo" className="h-6" />
      </div>
      <p className="font-semibold">Unique Factor</p>
    </div>
  );
};

export default Factor;
