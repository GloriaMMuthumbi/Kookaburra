import React from "react";
import HeaderSection from "./HeaderSection";
import Footer from "../Footer";
import Services from "./ServicesSection";
import Testimonials from "./Testimonials";
import ReachOut from "./ReachOut";

const ServicesPage = () => {
    return ( 
        <div className='App'>
            <HeaderSection />
            <Services />
            <Testimonials />
            <ReachOut />
            <Footer />
        </div>
     );
}
 
export default ServicesPage;