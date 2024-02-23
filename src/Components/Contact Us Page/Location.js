import React from "react";

const LocationComponent = () => {
    return ( 
        <div className="bg-darkblue-500 bg-opacity-15 w-full py-14 font-poppins">
            <div className="mx-24 flex">
                <div className="flex flex-col items-center py-8 mx-10 justify-center relative w-1/2">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 px-10 rounded-3xl py-3 bg-orange-500">
                        <p className="uppercase text-white">Hours</p>
                    </div>
                <div className="bg-darkblue-500 rounded-md py-10 w-2/3 flex flex-col items-center">
                    <div>
                        <p className="font-semibold text-center mb-2 text-white">Monday - Friday</p>
                        <p className="text-center mb-2 text-white text-sm">8am - 5pm</p>
                        <p className="font-semibold text-center mb-2 text-white">Saturday</p>
                        <p className="text-sm text-center mb-2 text-white">9am -4pm</p>
                        <p className="font-semibold text-center mb-2 text-white">Sunday</p>
                        <p className="text-sm text-center mb-2 text-white">Closed</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center w-1/2">
                    <h3 className="font-bold text-3xl font-charcoal-black mb-2">Visit Our Offices Today!</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat.</p>
                        <div className="flex">
                            <button className="font-poppins uppercase bg-white text-darkblue-500 border border-darkblue-500 hover:text-white hover:bg-darkblue-500 rounded-3xl w-40 h-10 transition-colors duration-350 my-4 text-sm font-bold">Get Directions</button>
                        </div>
                </div>
        </div>
        </div>
     );
}
 
export default LocationComponent;