import React from "react";
import img from "../../Assets/about-img.jpg";

const AboutSection = () => {
    return ( 
        <div className="flex flex-row mx-24 my-12">
            <div className="flex flex-col font-poppins w-1/2 justify-center">
                <h3 className="font-bold text-2xl mb-4">About Kookaburra</h3>
                <p className="text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2">
                <img src={img} alt="about img" className="h-64 rounded-sm"/>
            </div>
        </div>
     );
}
 
export default AboutSection;