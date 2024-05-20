import Link from "next/link"
import React from "react"
import ThemeSwitch from '../components/ThemeSwitch';
import { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="nav-center" className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-0 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <div class='logo' className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="font-sans font-medium tracking-wider transition-colors text-gray-900 hover:text-lime-500 dark:text-white">
            Ramya
          </Link>

          {/* <button
            className="text-gray-900 dark:text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button> */}
        </div>

        <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <Link href="#about" className="font-sans block lg:inline-block mt-2 lg:mt-0 ml-0 lg:ml-6 font-medium tracking-wider transition-colors text-gray-900 hover:text-lime-500 uppercase dark:text-white">
            About
          </Link>
          <Link href="#skills" className="font-sans block lg:inline-block mt-2 lg:mt-0 ml-0 lg:ml-6 font-medium tracking-wider transition-colors text-gray-900 hover:text-lime-500 uppercase dark:text-white">
            Skills
          </Link>
          <Link href="#projects" className="font-sans block lg:inline-block mt-2 lg:mt-0 ml-0 lg:ml-6 font-medium tracking-wider transition-colors text-gray-900 hover:text-lime-500 uppercase dark:text-white">
            Projects
          </Link>
          <Link href="#contact" className="font-sans block lg:inline-block mt-2 lg:mt-0 ml-0 lg:ml-6 font-medium tracking-wider transition-colors text-gray-900 hover:text-lime-500 uppercase dark:text-white">
            Contact
          </Link>
        </div>
        <div className="mt-2 lg:mt-0 ml-0 lg:ml-6">
            <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
    // return (
    //     <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
    //         <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
    //             <Link href="/" className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}>
    //                     Ramya 
    //             </Link>
    //             <Link href="/" className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}>
    //                     About 
    //             </Link>
    //             <Link href="/skills" className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}>
    //                     Skills 
    //             </Link>
    //             <Link href="/workexperiences" className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}>
    //                     Work Experiences 
    //             </Link>
    //             <ThemeSwitch />
    //         </div>
    //     </div>
    // )
}

export default Navigation;