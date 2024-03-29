import React from "react";
import service_1 from "../../Assets/services_1.png";
import service_2 from "../../Assets/services_2.png";
import service_3 from "../../Assets/services_3.png";

const Services = () => {
    return ( 
        <section className="my-12 mx-4 md:mx-24"> 
            <h2 className="font-poppins font-extrabold text-xl my-8">Services</h2>
            <div className="flex flex-col w-full justify-between lg:flex-row"> 
                <div className="relative flex flex-col justify-center mb-10 lg:mb-0">
                    <div className="lg:max-w-sm lg:relative sm:py-12  bg-darkblue-500 z-20 rounded-xl lg:transition-opacity lg:duration-200 lg:ease-in lg:opacity-0 hover:opacity-100">
                        <div className="p-6">
                            <div className="font-bold text-xl mb-2 text-white">Environment Auditing</div>
                            <p className="font-poppins text-sm font-light text-white sm:leading-5 leading-6">
                                We conduct rigorous environmental audits to identify opportunities for improvement, minimize risks, and promote sustainability. Our tailored reports provide actionable insights to drive continuous improvement and foster environmental responsibility. With our expertise, we help organizations meet their environmental goals and regulatory requirements effectively.
                            </p>
                        </div>
                        <div className="flex justify-center pb-6">
                            <button className="font-poppins uppercase bg-white text-darkblue-500 rounded-xl w-36 h-10 transition-colors duration-350 text-sm font-bold">Get Started</button>
                        </div>
                    </div>
                    <img className="hidden lg:block absolute inset-0 rounded-xl w-full h-full object-cover z-10" src={service_1} alt="Sunset in the mountains" />
                </div>
                <div className="relative flex flex-col justify-center mb-10 lg:mb-0">
                    <div className="lg:max-w-sm lg:relative sm:py-12 bg-greenblue-500 z-20 rounded-xl lg:transition-opacity lg:duration-200 lg:ease-in lg:opacity-0 hover:opacity-100">
                        <div className="p-6">
                            <div className="font-bold text-xl mb-2 text-white">Environmental Impact Assessment</div>
                            <p className="font-poppins font-light text-white text-sm sm:leading-5 leading-6">
                                Our Environmental Impact Assessment (EIA) services involve thorough evaluation and analysis of proposed projects to identify potential environmental impacts. We assess factors such as air quality, water resources, biodiversity, and socio-economic aspects to ensure sustainable development and regulatory compliance.
                            </p>
                        </div>
                        <div className="flex justify-center pb-6">
                            <button className="font-poppins uppercase bg-white text-greenblue-500 rounded-xl w-36 h-10 transition-colors duration-350 text-sm font-bold">Get Started</button>
                        </div>
                    </div>
                    <img className="hidden lg:block absolute inset-0 rounded-xl w-full h-full object-cover z-10" src={service_2} alt="Sunset in the mountains" />
                </div>
                <div className="relative flex flex-col justify-center mb-5 lg:mb-0">
                    <div className="lg:max-w-sm lg:relative sm:py-12 bg-orange-500 z-20 rounded-xl lg:transition-opacity lg:duration-200 lg:ease-in lg:opacity-0 hover:opacity-100">
                        <div className="p-6">
                            <div className="font-bold text-xl mb-2 text-white">Others</div>
                            <p className="font-poppins text-sm font-light text-white sm:leading-5 leading-6">
                                Including Resettlement Policy Frameworks, Socio-economic Surveys, Policy and Economic Analysis, Land Policy and Land Tenure Systems, Resource Utilization and Governance, Physical Planning, Monitoring and Evalution Studies, Investment Appraisals, Land Surveys and Digital Mapping, Development, Studies and Human Settelements etc.
                            </p>
                        </div>
                        <div className="flex justify-center pb-6">
                            <button className="font-poppins uppercase bg-white text-orange-500 rounded-xl w-36 h-10 transition-colors duration-350 text-sm font-bold">Get Started</button>
                        </div>
                    </div>
                    <img className="hidden lg:block absolute inset-0 rounded-xl w-full h-full object-cover z-10" src={service_3} alt="Sunset in the mountains" />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="font-poppins uppercase bg-white text-darkblue-500 border border-darkblue-500 hover:text-white hover:bg-darkblue-500 my-10 rounded-3xl w-36 h-10 transition-colors duration-350 text-sm font-bold">Explore More!</button>
            </div>
        </section>
    );
}
 
export default Services;
