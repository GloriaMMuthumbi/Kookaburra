import React from "react";
import TeamMember from "../SubComponents/TeamMember";
import syagga from "../../Assets/Syagga.jpg";
import owit from "../../Assets/Owit.jpg";
import david from "../../Assets/David.jpg";
import washington from "../../Assets/Washingtone.jpg";

const TheTeam = () => {
    return ( 
        <section className="my-20">
            <h2 className="mx-24 font-poppins font-extrabold text-xl text-charcoal-500 my-2">The Team</h2>
            <p className="font-poppins mx-24 text-md text-charcoal-500">Meet the dedicated professionals at 
            Kookaburra Group Ltd, where passion for environmental stewardship and expertise converge to drive positive change.</p>
            <div className="flex mx-auto justify-center my-4 items-center">
                <TeamMember
                    name="Prof. Paul Maurice Syagga"
                    position="Lead Consultant"
                    member_img={syagga}
                    department="-"
                    className="w-1/4"/>
                <TeamMember
                    name="Prof. Washington H.A Olima"
                    position="Lead Consultant"
                    member_img={washington}
                    department="-"
                    className="w-1/4"/>
                <TeamMember
                    name="Prof. Owit Abiero K'Akumu"
                    position="Lead Consultant"
                    member_img={owit}
                    department="-"
                    className="w-1/4"/>
                <TeamMember
                    name="Dr. David Nyangau Siriba"
                    position="Lead Consultant"
                    member_img={david}
                    department="-"
                    className="w-1/4"/>
            </div>
            <div className="flex items-center justify-center">
                <button className="font-poppins uppercase bg-darkblue-500 text-white border border-darkblue-500 hover:text-darkblue-500 hover:bg-white rounded-3xl w-44 h-10 transition-colors duration-350 my-4 text-sm font-bold">Reach Out Today!</button>
            </div>
        </section>
     );
}
 
export default TheTeam;