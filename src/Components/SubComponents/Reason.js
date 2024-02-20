import React from "react";

const Reason = ({title, description}) => {
    return ( 
        <div className="flex flex-row my-10">
            <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#219BAF" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className="flex flex-col justify-center mx-4">
                <p className="text-white font-poppins my-2 font-semibold">{title}</p>
                <p className="text-white font-poppins text-sm font-light w-4/5">{description}</p>
            </div>
        </div>
    );
}

export default Reason;