import React from "react";
import NavMenu from "../NavMenu";
import bg from "../../Assets/background_hero_services.png";

const HeaderSection = () => {
    return ( 
        <div className="relative overflow-hidden">
            <NavMenu />
            <div className="inset-0 flex items-center justify-center bg-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h2 className="uppercase text-white font-poppins font-bold text-3xl py-12">Blogs & Projects</h2>
            </div>
        </div>
    );
}

export default HeaderSection;
