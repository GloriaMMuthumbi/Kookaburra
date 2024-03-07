import React from "react";

const ServiceR = ({ number,  title, description, benefits, imageUrl }) => {
    return ( 
        <div className="flex md:flex-row flex-col lg:mx-24 md:mx-10 mx-4 font-poppins justify-center items-center pt-10 pb-10 border-b-2">
            <div className="font-extrabold md:text-9xl text-7xl md:justify-start md:items-start items-center flex flex-col md:w-1/3">
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {number}
                </span>
            </div>
            <div className="flex flex-col md:w-2/3">
                <p className="font-bold md:text-xl mb-2 text-darkblue-500 ">{title}</p>
                <div className="flex flex-row mb-4 text-charcoal-500">
                    <p className="font-semibold mr-6 md:text-base text-sm">Description:</p>
                    <p className="leading-6 md:text-sm text-xs">{description}</p>
                </div>
                <div className="flex flex-row text-charcoal-500">
                    <p className="font-semibold mr-20 md:text-base text-sm">Benefits</p>
                    <ul className="text-xs list-disc leading-6 md:text-sm">
                        {benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default ServiceR;
