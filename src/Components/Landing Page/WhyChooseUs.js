import React from "react";
import Reason from "../SubComponents/Reason";

const WhyChooseUs = () => {
    return ( 
        <section className="bg-darkblue-500 py-8">
            <div className="sm:my-12 sm:mx-24 my-6 mx-4">
                <h2 className="font-poppins font-extrabold text-xl my-4 text-white">Why <span className="text-orange-500">Choose</span> Us</h2>
                <p className="font-poppins text-white text-base leading-7">We stand out as a leading environmental consultancy firm committed to driving positive change and promoting sustainable development. Here's why clients choose us for their environmental needs
                and insights to every project, ensuring comprehensive solutions tailored to our clients' needs.</p>
                <div className="grid sm:grid-cols-2 grid-cols-1">
                    <div className="col sm:w-1/2">
                        <Reason
                            title="Expertise"
                            description="We offer unparalleled expertise in environmental assessment, planning, and management. Our specialists bring diverse skills and insights to every project, ensuring comprehensive solutions tailored to our clients' needs."
                        />
                        <Reason
                            title="Client-Centric Approach"
                            description="Our clients' success is our top priority. We collaborate closely with our clients to understand their objectives, challenges, and priorities, delivering personalized solutions that exceed expectations and add value to their projects."
                        />
                        <Reason
                            title="Client-Centric Approach"
                            description="Our clients' success is our top priority. We collaborate closely with our clients to understand their objectives, challenges, and priorities, delivering personalized solutions that exceed expectations and add value to their projects."
                        />
                    </div>
                    <div className="col sm:w-1/2">
                        <Reason
                        title="Commitment to Sustainablity"
                        description="We are deeply committed to environmental stewardship and sustainability. Our approach prioritizes environmental conservation, social responsibility, and economic viability, aligning with global sustainability goals and best practices."
                        />
                        <Reason
                        title="Quality Assurance"
                        description="We uphold the highest standards of quality and integrity in all our services. Our rigorous quality assurance processes ensure accuracy, reliability, and compliance with regulatory requirements, giving our clients confidence in our work."
                        />
                        <Reason
                        title="Responsive support"
                        description="We are committed to providing responsive and reliable support to our clients at every stage of their projects. Whether it's answering questions, addressing concerns, or providing ongoing guidance, our team is dedicated to ensuring a positive and seamless experience for our clients."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;