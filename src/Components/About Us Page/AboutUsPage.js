import React from "react";
import HeaderSection from "./HeaderSection";
import AboutSection from "./AboutSection";
import UniqueFactors from "./UniqueFactors";
import TheTeam from "../Landing Page/MeetTheTeam";
import Footer from "../Footer";
import QuoteSection from "./Quote";

const AboutUsPage = () => {
    return ( 
        <div className="App">
            <HeaderSection />
            <AboutSection />
            <QuoteSection />
            <UniqueFactors />
            <TheTeam />
            <Footer />
        </div>
     );
}
 
export default AboutUsPage;