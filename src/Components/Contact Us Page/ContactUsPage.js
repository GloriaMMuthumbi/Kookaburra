import React from "react";
import HeaderSection from "./HeaderSection";
import ContactForm from "./ContactForm";
import LocationComponent from "./Location";
import Footer from "../Footer";

const ContactUsPage = () => {
    return ( 
        <div className="App">
            <HeaderSection />
            <ContactForm />
            <LocationComponent />
            <Footer />
        </div>
     );
}
 
export default ContactUsPage;