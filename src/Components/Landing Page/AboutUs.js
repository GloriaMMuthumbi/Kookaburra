import React from "react";
import aboutimg from "../../Assets/aboutus_img.png";
// import PieChart from "./SubComponents/PieChart";

const AboutUs = () => {
    return (
        <section className="sm:my-12 sm:mx-24 mx-7 my-8 ">
            <h2 className="font-poppins font-extrabold text-xl animate-in slide-in-from-top fade-in-0 duration-500">About <span className="text-darkblue-500">Kooka</span><span className="text-greenblue-500">burra</span></h2>
            <div className="container flex flex-col justify-center lg:p-6 sm:flex-row pt-4 mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between">
                <div className="flex-grow-0 flex-shrink-0 sm:w-1/3 animate-in fade-in-0 duration-1000 hidden lg:block">
                    <div className="flex items-center justify-left align-middle py-14">
                        <div className="top-1/2 left-1/2 transform">
                            <div className="w-60 h-60 rounded-full bg-transparent border-2 border-charcoal-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-56 h-56 rounded-full bg-transparent border-2 border-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-52 h-52 rounded-full bg-transparent border-2 border-greenblue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <img alt="about us" src={aboutimg} className="w-48 h-48 md:w-36 md:h-36 sm:w-24 sm:h-24 rounded-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="flex-grow flex flex-col sm:justify-center lg:p-6">
                    <p className="text-charcoal-500 font-poppins animate-in fade-in-0 duration-1000 leading sm:text-base text-sm leading-6">At Kookaburra Group Ltd, we’re passionate about driving positive environmental change. As an indigenous Kenyan 
                        firm, we specialize in Environmental Impact Assessment , Resettlement Policy Frameworks, and more. With a 
                        commitment to environment rights and sustainable development, we strive to create spaces where life can thrive. 
                        Join us in building a greener, more sustainable future.</p>
                    <p className="font-poppins font-semibold my-4 text-charcoal-500 animate-in slide-in-from-top fade-in-0 duration-1000">Our <span className="text-greenblue-500">Mission</span></p>
                    <p className="font-poppins italic text-md text-charcoal-500 animate-in slide-in-from-top fade-in-0 duration-1000 sm:text-base text-sm">Create avenues that impact the society</p>
                    <p className="font-poppins font-semibold my-4 text-charcoal-500 animate-in slide-in-from-top fade-in-0 duration-1000">Our <span className="text-darkblue-500">Vision</span></p>
                    <p className="font-poppins italic text-md text-charcoal-500 animate-in slide-in-from-top fade-in-0 duration-1000 sm:text-base text-sm">Create a green future for the generations to come</p>
                </div>
            </div>
            {/* <div className="flex w-full justify-center">
                <div className="mx-16">
                    <div className="w-50 h-50 rounded-full bg-greenblue-500 border-2 border-bluegreen-500"></div>
                    <p className="font-poppins font-light text-center my-3">Project success rate</p>
                </div>
                <div className="mx-16">
                    <div className="w-50 h-50 rounded-full bg-transparent border-8 border-darkblue-500"></div>
                    <p className="font-poppins font-light text-center my-3 whitespace-normal">Environmental Impact Assessments Conducted</p>
                </div>
                <div className="mx-1"><PieChart /></div>
            </div> */}
        </section>
    );
}
 
export default AboutUs;
