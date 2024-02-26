import React from "react";
import logo from "../Assets/kookaborra.png";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
    return ( 
        <>
            <nav className="w-screen relative bg-white border-gray-200 dark:bg-gray-900 animate-in slide-in-from-top duration-1000 fade-in-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <NavLink to="/"
                                className="font-poppins block text-sm py-2 px-5 text-charcoal-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-greenblue-500 md:p-0"
                            >Home</NavLink>
                            <NavLink to="/services"
                                className="font-poppins block text-sm py-2 px-5 text-charcoal-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-greenblue-500 md:p-0"
                            >Services</NavLink>
                            <NavLink to="/about-us"
                                className="font-poppins block text-sm py-2 px-5 text-charcoal-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-greenblue-500 md:p-0"
                            >About Us</NavLink>
                            <NavLink to="/blogs-and-projects"
                                className="font-poppins block text-sm py-2 px-5 text-charcoal-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-greenblue-500 md:p-0"
                            >Blogs & Projects</NavLink>
                            <NavLink to="/contact-us"
                                className="font-poppins block text-sm py-2 px-5 text-charcoal-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-greenblue-500 md:p-0"
                            >Contact Us</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavMenu;