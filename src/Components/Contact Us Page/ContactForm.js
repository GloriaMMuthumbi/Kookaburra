import React from "react";

const ContactForm = () => {
    return ( 
        <div className="flex font-poppins my-12 mx-24">
            <div className="flex flex-col w-1/2 justify-center mr-10">
                <p className="font-bold text-3xl uppercase mb-4">Get In Touch</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.</p>
            </div>
            <div className="flex-flex-col w-1/2 px-4 py-6">
                    <form class="w-full bg-darkblue-500 py-10 px-12 rounded-lg">
                        <div className="flex w-full justify-between items-start">
                            <div class="my-10 flex flex-col items-center h-full justify-between border-b border-white-500 py-2 w-1/2 mr-8">
                                <input class="appearance-none text-sm bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="ex: Jane Doe" aria-label="Full name">
                                </input>
                            </div>
                            <div class="my-10 flex flex-col items-center h-full justify-between border-b border-white-500 py-2 w-1/2">
                                <input class="appearance-none text-sm bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="ex: janedoe@gmail.com" aria-label="Email">
                                </input>
                            </div>
                        </div>
                        <div class="my-10 flex flex-col items-center h-full justify-between border-b border-white py-2">
                            <textarea class="appearance-none text-sm bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Message" aria-label="Message">
                            </textarea>
                        </div>
                        <div className="flex items-center justify-end">
                            <button className="font-poppins uppercase bg-white text-darkblue-500 border border-darkblue-500 hover:text-darkblue-500 hover:bg-white rounded-xl w-32 h-10 transition-colors duration-350 my-4 text-sm font-bold">Submit</button>
                        </div>
                    </form>
                </div>
        </div>
     );
}
 
export default ContactForm;