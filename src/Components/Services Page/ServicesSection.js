import React from "react";
import ServiceL from "../SubComponents/ServiceL";
import bg01 from "../../Assets/01.png";
import bg02 from "../../Assets/02.png";
import bg03 from "../../Assets/03.png";
import bg04 from "../../Assets/04.png";
import ServiceR from "../SubComponents/ServiceR";

const Services = () => {
    return ( 
        <section className="flex flex-col">
            <ServiceL
                number="01"
                title="Environment Impact Assessment"
                description="We offer comprehensive environmental assessment services to evaluate the impact of projects on the environment. Our assessments cover a wide range of factors, including air quality, water resources, land use, and biodiversity."
                benefits={[
                    "Early identification of Impacts",
                    "Legal Compliance",
                    "Decision Making Support"
                ]}
                imageUrl={bg01}
            />
            <ServiceR
                number="02"
                title="Environmental Auditing"
                description="Our environmental auditing services involve thorough inspections and evaluations of facilities, operations, and processes to assess compliance with environmental regulations and identify areas for improvement."
                benefits={[
                    "Resource Efficiency",
                    "Risk Management",
                    "Evaluation of Assessment Performance"
                ]}
                imageUrl={bg02}
            />
            <ServiceL
                number="03"
                title="Sustainability Consulting"
                description="We provide sustainability consulting services to help organizations integrate environmental, social, and economic considerations into their business strategies. Our expert consultants work closely with clients to develop tailored sustainability plans and initiatives."
                benefits={[
                    "Reduced Environemental Footprint",
                    "Attract socially conscious customers",
                    "Improved long-term Resilience and Competitiveness"
                ]}
                imageUrl={bg03}
            />
            <ServiceR
                number="04"
                title="Renewable Energy Solutions"
                description="Our renewable energy solutions focus on leveraging clean and renewable energy sources such as solar, wind, and hydroelectric power. We offer consulting, design, and implementation services for renewable energy projects of all scales."
                benefits={[
                    "Resource Efficiency",
                    "Risk Management",
                    "Evaluation of Assessment Performance"
                ]}
                imageUrl={bg04}
            />
        </section>
     );
}
 
export default Services;