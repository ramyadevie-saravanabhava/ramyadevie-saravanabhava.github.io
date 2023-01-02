import React from "react"
import Link from "next/link"
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'


const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there, I'm Ramya
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            An aspiring Passionate full stack web Developer
                        </p>
                    </div>
                    <Link href="https://www.github.com/yuujay" target="_blank">
                        <FontAwesomeIcon icon={faGithub}  size="xs"/>
                    </Link>
                    <FontAwesomeIcon icon={faLinkedin} fixedWidth listItem size="xs"/>
                    
                    
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <img
                        src="https://drive.google.com/uc?export=view&id=1YmgOk2-FB6rLvcij4uogfp1B25XJypNZ"
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;