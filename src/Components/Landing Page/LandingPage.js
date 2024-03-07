import React from "react";
import AboutUs from './AboutUs';
import FeaturedProjects from './FeaturedProjects';
import Footer from '../Footer';
import HeroSection from './HeroSection';
import TheTeam from './MeetTheTeam';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';


const LandingPage = () => {
    return ( 
        <div className='App w-full overflow-hidden'>
            <HeroSection />
            <AboutUs />
            <Services />
            <WhyChooseUs />
            <FeaturedProjects />
            <TheTeam />
            <Footer />
        </div>
    );
}
 
export default LandingPage;