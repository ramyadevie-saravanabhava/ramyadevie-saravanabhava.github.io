import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const About = () => {
  const handleNavigation = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ramya-Resume.pdf";
    link.download = "Ramya-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const router = useRouter();
  const handleNavigate = () => {
    router.push("#contact");
  };
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 item-center lg:-mx-4 text-center lg:text-left">
        <section id="profile">
          <div class="section__pic-container">
            <Image
              src={`/profile-pic-focus.jpg`}
              height={250}
              width={400}
              alt="Ramya Devie Profile Pic"
              className="rounded-full aspect-square object-cover"
            />
          </div>
          <div class="section__text">
            <p class="section__text__p1">Hello, I'm</p>
            <h1 class="title">Ramya Devie</h1>
            <p class="section__text__p2">Full Stack Web Developer</p>
            <div class="btn-container">
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                onClick={handleDownload}
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download CV
                </span>
              </button>
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                onClick={handleNavigate}
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Contact Info
                </span>
              </button>
            </div>
            <div id="socials-container">
              <Link
                href="https://www.linkedin.com/in/ramya-devie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.png"
                  alt="Ramya's LinkedIn profile"
                  width={30}
                  height={30}
                  className="icon"
                />
              </Link>
              <Link
                href="https://github.com/ramyadevie-saravanabhava"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.png"
                  alt="Ramya's Github profile"
                  width={30}
                  height={30}
                  className="icon"
                />
              </Link>
            </div>
          </div>
        </section>
        <section class="section-nav-padding" id="about">
          <p class="section__text__p1">Get To Know More</p>
          <h1 class="title">About Me</h1>
          <div class="section-container">
            <div class="abt-pic-container">
              <img src="/about.jpg" alt="Profile picture" class="about-pic" />
            </div>
            <div class="about-details-container">
              <div class="about-containers">
                <div class="details-container dark:bg-black">
                  <Image
                    src={`/experience.png`}
                    height={10}
                    width={30}
                    alt="Experience icon"
                    className="icon"
                  />
                  <h3 className="text-gray-900 dark:text-white">Experience</h3>
                  <p className="text-gray-900 dark:text-white">
                    3+ years <br />
                    Full Stack Web Development
                  </p>
                </div>
                <div class="details-container dark:bg-black">
                  <Image
                    src={`/education.png`}
                    height={10}
                    width={30}
                    alt="Education icon"
                    className="icon"
                  />
                  <h3 className="text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-900 dark:text-white">
                    B.E. Bachelors Degree
                    <br />
                    M.Sc. Masters Degree
                  </p>
                </div>
              </div>
              <div class="text-container">
                <p>
                  I am a seasoned web developer and system analyst with
                  expertise in Java, JavaScript, and frameworks like Next.js and
                  React. I specialize in optimizing UI interactions and backend
                  processes, achieving significant performance improvements. My
                  certifications and innovative projects underscore my
                  commitment to excellence and technological advancement.
                </p>
              </div>
            </div>
          </div>
          {/* <img
            src="/arrow.png"
            alt="Arrow icon"
            class="icon arrow"
            onclick="location.href='./#experience'"
          /> */}
        </section>
        <section class="section-nav-padding" id="skills">
          <p class="section__text__p1">Explore My</p>
          <h1 class="title">Skills</h1>
          <div class="experience-details-container">
            <div class="about-containers">
              <div class="details-container dark:bg-black">
                <div class="article-container">
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div className="dark:text-white">
                      <h3 className="text-gray-900 dark:text-white">NextJS</h3>
                      <p className="text-gray-700 dark:text-white">
                        Intermediate
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">
                        CI/CD Pipelines
                      </h3>
                      <p className="text-gray-700 dark:text-white">
                        Intermediate
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">
                        IaaC (Pulumi/Packer)
                      </h3>
                      <p className="text-gray-700 dark:text-white">
                        Experienced
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">AWS</h3>
                      <p className="text-gray-700 dark:text-white">
                        Intermediate
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">MongoDB</h3>
                      <p className="text-gray-700 dark:text-white">
                        Experienced
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">
                        REST services
                      </h3>
                      <p className="text-gray-700 dark:text-white">
                        Experienced
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">Git</h3>
                      <p className="text-gray-700 dark:text-white">
                        Experienced
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">
                        Selenium
                      </h3>
                      <p className="text-gray-700 dark:text-white">
                        Intermediate
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">
                        HTML/CSS
                      </h3>
                      <p className="text-gray-700 dark:text-white">
                        Experienced
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">SASS</h3>
                      <p className="text-gray-700 dark:text-white">
                        Intermediate
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">
                        JavaScript/TypeScript
                      </h3>
                      <p className="text-gray-700 dark:text-white">
                        Intermediate
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">MySQL</h3>
                      <p className="text-gray-700 dark:text-white">
                        Intermediate
                      </p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3 className="text-gray-900 dark:text-white">
                        Material UI
                      </h3>
                      <p className="text-gray-700 dark:text-white">
                        Intermediate
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/* <img
            src="/arrow.png"
            alt="Arrow icon"
            class="icon arrow"
            onclick="location.href='./#projects'"
          /> */}
        </section>
        <section class="section-nav-padding" id="projects">
          <p class="section__text__p1">Browse My Recent</p>
          <h1 class="title">Projects</h1>
          <div class="experience-details-container">
            <div class="about-containers">
              <div class="details-container color-container dark:bg-black">
                <div class="article-container">
                  <img
                    src="/assignment.jpg"
                    alt="Project 1"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title dark:text-white">
                  12 Factor Assignment Tracker App
                </h2>
                <div class="btn-container">
                  <button
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                    onClick={() =>
                      handleNavigation(
                        "https://github.com/orgs/neu-ramya-12FactorApp/repositories"
                      )
                    }
                  >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Github
                    </span>
                  </button>
                </div>
              </div>
              <div class="details-container color-container dark:bg-black">
                <div class="article-container">
                  <img src="/art.jpg" alt="Project 2" class="project-img" />
                </div>
                <h2 class="experience-sub-title project-title dark:text-white">
                  Art Gallery Management System
                </h2>
                <div class="btn-container">
                  <button
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                    onClick={() =>
                      handleNavigation(
                        "https://github.com/Yuktagohil/ART_GALLERY_MANAGEMENT_SYSTEM"
                      )
                    }
                  >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Github
                    </span>
                  </button>
                </div>
              </div>
              <div class="details-container color-container dark:bg-black">
                <div class="article-container">
                  <img
                    src="/athena.png"
                    alt="Project 3"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title dark:text-white">
                  Mental Health Application
                </h2>
                <div class="btn-container">
                  <button
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                    onclick="location.href='https://github.com/'"
                  >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Github
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <img
            src="./assets/arrow.png"
            alt="Arrow icon"
            class="icon arrow"
            onclick="location.href='./#contact'"
          /> */}
        </section>
        <section id="contact">
          <p class="section__text__p1">Get in Touch</p>
          <h1 class="title">Contact Me</h1>
          <div class="contact-info-upper-container">
            <div class="contact-info-container">
              <img
                src="/message.png"
                alt="Email icon"
                class="icon contact-icon email-icon"
              />
              <p>
                <a href="mailto:ramyadevie.s@gmail.com">
                  ramyadevie.s@gmail.com
                </a>
              </p>
            </div>
            <div class="contact-info-container">
              <img
                src="/linkedin.png"
                alt="LinkedIn icon"
                class="icon contact-icon"
              />
              <p>
                <a
                  href="https://www.linkedin.com/in/ramya-devie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
