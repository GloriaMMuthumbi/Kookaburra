import React from "react";
import img from "../../Assets/about-img.jpg";

const AboutSection = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 sm:mx-24 mx-4 my-12">
            <div className=" font-poppins justify-center">
                <h3 className="font-bold text-2xl mb-4">About Kookaburra</h3>
                <p className="text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="lg:grid justify-center hidden items-center bg:blue-200">
                <img src={img} alt="about img" className="h-64 rounded-sm"/>
            </div>
        </div>
     );
}
 
export default AboutSection;