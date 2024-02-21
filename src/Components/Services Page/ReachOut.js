import React from "react";

const ReachOut = () => {
    return ( 
        <div className="flex felx-row font-poppins mx-24 my-12 items center">
            <div className="flex flex-col w-2/3">
                <h3 className="font-extrabold text-charcoal-500 text-3xl mb-4">Ready to take the next Step?</h3>
                <p className="text-sm">Reach out to us, and let's start a conversation about how Kookaburra can help you achieve your goals.</p>
            </div>
            <div className="flex flex-col w-1/3 items-center">
                <button className="font-poppins uppercase bg-darkblue-500 text-white border border-darkblue-500 hover:text-darkblue-500 hover:bg-white rounded-xl w-44 h-10 transition-colors duration-350 my-4 text-sm font-bold">Reach out today!</button>
            </div>
        </div>
     );
}
 
export default ReachOut;