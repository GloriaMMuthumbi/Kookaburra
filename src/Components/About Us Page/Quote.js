import React from "react";

const QuoteSection = () => {
    return ( 
        <div className="bg-lightgray-500 w-full py-8">
            <div className="sm:mx-24 sm:*:my-12 flex items-center flex-col">
                <p className="lg:text-4xl md:text-2xl text-lg text-center font-playfair font-semibold italic text-charcoal-500">"Earth provides enough to satisfy every man's needs, but not every man's greed."</p>
                <p className="font-poppins sm:text-sm text-xs text-gray-400 lg:mt-4 mt-2">- Mahatma Gandhi</p>
            </div>
        </div>
     );
}
 
export default QuoteSection;