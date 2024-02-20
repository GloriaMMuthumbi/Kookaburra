import React from "react";
import project from "../../Assets/project.png";

const Project = () => {
    return ( 
        <div className="rounded-xl bg-white flex flex-col mx-10 p-8 transform hover:scale-105 transition-transform duration-500">
            <img src={project} alt="project-img"/>
            <div className="flex flex-row my-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#219BAF" className="w-5 h-5">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                <p className="mx-2 font-poppins text-xs text-charcoal-500">City, Country</p>
            </div>
            <p className="text-darkblue-500 font-poppins text-md font-bold">Project Name</p>
            <p className="text-charcoal-500 font-poppins text-sm font-semibold my-1">Company Name</p>
            <p className="text-charcoal-500 font-poppins text-sm">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-charcoal-500 font-poppins text-xs font-semibold my-2">Duration: 6 months</p>
            <p className="text-greenblue-500 underline font-poppins text-sm font-semibold text-right"><a href="/">Read More...</a></p>
        </div>
    );
}
 
export default Project;
