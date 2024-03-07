import React from "react";
import Factor from "../SubComponents/Factor";

const UniqueFactors = () => {
    return ( 
        <div className="bg-greenblue-500 bg-opacity-50 sm:px-8 px-2 sm:py-14 py-6 lg:mx-24 my-12 font-poppins">
            <p className="font-bold md:text-2xl text-xl md:mb-8 mb-4">Our Unique Factors</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                <Factor />
                <Factor />
                <Factor />
                <Factor /> 
            </div>
        </div>
     );
}
 
export default UniqueFactors;