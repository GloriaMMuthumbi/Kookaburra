import React from "react";
import bg from "../../Assets/background_hero_landing.png";
import NavMenu from '../NavMenu';

const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 animate-in fade-in duration-1000"></div>
            <NavMenu />
            <div className="font-poppins absolute h-full flex justify-center items-center mx-8 animate-in fade-in slide-in-from-left duration-1000
                            lg:w-1/2 sm:mx-24">
                <div>
                    <h1 className="text-white font-extrabold sm:text-3xl md:text-4xl text-2xl mb-4">Welcome to <span className="text-darkblue-500">Kooka</span><span className="text-greenblue-500">burra</span></h1>
                    <p className="text-white font-semibold mb-4 text-xl">Explore our innovative environmental services and solutions.</p>
                    <p className="text-white font-light sm:text-base text-sm leading-6">Discover Kookaburra, your go-to partner for environmental solutions. Our expert team offers tailored services, from impact assessments to auditing, to drive sustainability and meet your organization's needs. Join us in creating a greener future today.</p>
                    <button className="uppercase bg-orange-500 border-2 border-orange-500 hover:bg-white hover:border-white hover:text-orange-500 text-white rounded-xl w-36 h-10 transition-colors duration-350 text-sm font-bold my-5">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;