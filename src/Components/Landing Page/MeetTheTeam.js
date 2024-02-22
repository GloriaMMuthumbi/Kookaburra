import React from "react";
import TeamMember from "../SubComponents/TeamMember";

const TheTeam = () => {
    return ( 
        <section className="my-20">
            <h2 className="mx-24 font-poppins font-extrabold text-xl text-charcoal-500 my-2">The Team</h2>
            <p className="font-poppins mx-24 text-md text-charcoal-500">Meet the dedicated professionals at 
            Kookaburra Group Ltd, where passion for environmental stewardship and expertise converge to drive positive change.</p>
            <div className="flex flex-wrap justify-center my-4 items-center">
                <TeamMember className="w-1/3"/>
                <TeamMember className="w-1/3"/>
                <TeamMember className="w-1/3"/>
                <TeamMember className="w-1/3"/>
            </div>
            <div className="flex items-center justify-center">
                <button className="font-poppins uppercase bg-darkblue-500 text-white border border-darkblue-500 hover:text-darkblue-500 hover:bg-white rounded-xl w-44 h-10 transition-colors duration-350 my-4 text-sm font-bold">Reach Out Today!</button>
            </div>
        </section>
     );
}
 
export default TheTeam;