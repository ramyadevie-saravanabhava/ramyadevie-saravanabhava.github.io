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
          <Link href="/" className="font-sans font-medium tracking-wider transition-colors text-gray-900 hover:text-lime-500 dark:text-white dark:hover:text-lime-500">
            Ramya
          </Link>
        </div>

        <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <Link href="#about" className="font-sans block lg:inline-block mt-2 lg:mt-0 ml-0 lg:ml-6 font-medium tracking-wider transition-colors text-gray-900 hover:text-lime-500 uppercase dark:text-white dark:hover:text-lime-500">
            About
          </Link>
          <Link href="#skills" className="font-sans block lg:inline-block mt-2 lg:mt-0 ml-0 lg:ml-6 font-medium tracking-wider transition-colors text-gray-900 hover:text-lime-500 uppercase dark:text-white dark:hover:text-lime-500">
            Skills
          </Link>
          <Link href="#projects" className="font-sans block lg:inline-block mt-2 lg:mt-0 ml-0 lg:ml-6 font-medium tracking-wider transition-colors text-gray-900 hover:text-lime-500 uppercase dark:text-white dark:hover:text-lime-500">
            Projects
          </Link>
          <Link href="#contact" className="font-sans block lg:inline-block mt-2 lg:mt-0 ml-0 lg:ml-6 font-medium tracking-wider transition-colors text-gray-900 hover:text-lime-500 uppercase dark:text-white dark:hover:text-lime-500">
            Contact
          </Link>
        </div>
        <div className="mt-2 lg:mt-0 ml-0 lg:ml-6">
            <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;