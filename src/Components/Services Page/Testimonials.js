import React from "react";
import Testimonial from "../SubComponents/Testimonial";

const Testimonials = () => {
    return ( 
        <section className="flex font-poppins px-24 py-24 flex-col items-center bg-darkblue-500">
            <p className="font-bold text-4xl text-white mb-10">Hear what our customers have to say about us!</p>
            <div className="flex">
                <Testimonial />
                {/* <Testimonial />
                <Testimonial />
                <Testimonial /> */}
            </div>
            
        </section>
     );
}
 
export default Testimonials;