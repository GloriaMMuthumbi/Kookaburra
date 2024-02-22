import React from "react";
import Factor from "../SubComponents/Factor";

const UniqueFactors = () => {
    return ( 
        <div className="bg-greenblue-500 bg-opacity-50 px-8 py-14 mx-24 my-12 font-poppins">
            <p className="font-bold text-2xl mb-8">Our Unique Factors</p>
            <div className="flex flex-row">
                <Factor />
                <Factor />
                <Factor />
                <Factor /> 
            </div>
        </div>
     );
}
 
export default UniqueFactors;