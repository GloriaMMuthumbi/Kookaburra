import React from "react";
import bg from "../Assets/background-hero.png";
import NavMenu from './NavMenu';

const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <NavMenu />
            <div className="absolute h-full flex justify-center items-center mx-24 w-1/2">
                <div>
                <h1 className="text-white font-poppins font-extrabold text-4xl mb-4">Driving Sustainable Solutions for a <span className="text-greenblue-500 uppercase">greener</span> tomorrow</h1>
                <p className="font-poppins text-white text-md">Expert Environmental Impact Assessment and Auditing Services</p>
                <button className="font-poppins uppercase bg-orange-500 border-2 border-orange-500 hover:bg-white hover:border-white hover:text-orange-500 text-white rounded-xl w-36 h-10 transition-colors duration-350 text-sm font-bold my-5">
                    Get Started
                </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;