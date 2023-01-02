import React from "react";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:items-center md:justify-between md:p-6 dark:bg-black dark:border-gray-600">
            {/* <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div> */}
                {/* <div className="flex flex-col justify-between lg:flex-row items-center"> */}
                    <p className="text-center">Built with Next.js, Tailwind, Vercel and ♥️</p>
                {/* </div> */}
            {/* </div> */}
        </footer>
    )
}

export default Footer;