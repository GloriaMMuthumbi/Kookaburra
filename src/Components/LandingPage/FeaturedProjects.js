import React from "react";
import Project from "../SubComponents/Project";

const FeaturedProjects = () => {
    return ( 
        <section className="my-12">
            <h2 className=" mx-24 font-poppins font-extrabold text-xl text-greenblue-500 my-2">Featured <span className="text-darkblue-500">projects</span></h2>
            <p className="font-poppins mx-24 text-md text-charcoal-500">Discover some of our recent projects that showcase our expertise, innovation, and commitment to environmental sustainability:</p>
            <div className="flex w-full justify-evenly">
                <div className="flex flex-row w-full justify-center bg-darkblue-500 bg-opacity-85 py-10 px-24 my-12">
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="font-poppins uppercase bg-white text-darkblue-500 border border-darkblue-500 hover:text-white hover:bg-darkblue-500 rounded-xl w-36 h-10 transition-colors duration-350 text-sm font-bold">More Projects</button>
            </div>
        </section>
    );
}

export default FeaturedProjects;