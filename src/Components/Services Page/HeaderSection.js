import React from "react";
import NavMenu from "../NavMenu";
// import bg from "../../Assets/background_hero_services.png";

const HeaderSection = () => {
    return ( 
        <section className="relative overflow-hidden">
            <NavMenu />
            <h2 className="font-poppins font-extrabold text-charcoal-500 mt-12 mx-24 text-4xl uppercase">Our Services</h2>
            {/* <div className="relative h-screen">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 h-1/3 bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}></div>
                    <div className="absolute inset-0 h-1/3 bg-black opacity-30"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="uppercase text-white font-poppins font-bold text-3xl">Our Services</h2>
                </div>
            </div> */}
        </section>
    );
}

export default HeaderSection;
