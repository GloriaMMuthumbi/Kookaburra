import React from "react";

const ServiceR = ({ number,  title, description, benefits, imageUrl }) => {
    return ( 
        <div className="flex flex-row mx-24 font-poppins justify-center items-center pt-10 pb-10 border-b-2">
            <div className="font-extrabold text-9xl justify-start items-start flex flex-col w-1/3">
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {number}
                </span>
            </div>
            <div className="flex flex-col w-2/3">
                <p className="font-bold text-xl mb-2 text-darkblue-500">{title}</p>
                <div className="flex flex-row mb-4 text-charcoal-500">
                    <p className="font-semibold mr-6">Description:</p>
                    <p className="text-sm leading-6">{description}</p>
                </div>
                <div className="flex flex-row text-charcoal-500">
                    <p className="font-semibold mr-20">Benefits</p>
                    <ul className="text-sm list-disc leading-6">
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
