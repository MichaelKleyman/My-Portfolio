/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { Link } from "react-scroll/modules";
import Image from "next/image";
import Profileimg from "../public/images/profilepic2.JPG";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hideElements = document.querySelectorAll(".hide");
    hideElements.forEach((elem) => observer.observe(elem));
  });

  return (
    <div id='about' className='w-full md:h-screen flex items-center py-16'>
      <div className='p-8 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 hide'>
          <p className='uppercase text-xl tracking-widest text-blue-600'>
            About
          </p>
          <h2 className='py-4'>Who Am I</h2>
          <p className='py-2'>
            I'm currently a Frontend Software Engineer at Valley IT Solutions, a
            military software company specializing in building out an
            application suite for customers to assist in military operations. My
            responsibilities range from maintaining and strengthening our
            frontend infrastructure to enhance customer operational
            decision-making, to providing cross-functional support by
            contributing to our vast backend ecosystem to ensure scalability.
            {/* using ReactJS, Typescript and various
            frontend technologies with a long-standing goal of creating an
            engaging frontend user experience. */}
          </p>
          <p className='py-2'>
            I have a strong passion to build from the ground up and engrain
            myself in every aspect of development. My experience ranges from
            startups to established enterprises working with a vast user base.
            This breadth has cultivated my ability to both take complete
            ownership of product features and collaborate effectively within
            cross-functional teams. In startup environments, my adaptability and
            willingness to wear multiple hats accelerated my technical growth,
            enabling me to rapidly iterate on solutions while directly
            influencing product direction. Conversely, in more established
            company settings, I've learned to navigate complex organizational
            structures while maintaining the same ownership mentality.
            {/* I originally come from a healthcare background with a Bachelors
            degree from CUNY Hunter College, pursuing a career in sports
            Physical Therapy. My transition into tech was driven by lack of
            opportunity and drive in my previous field, and making this switch
            allowed me to grow and challenge myself in many ways. I started
            learning Python to grasp core concepts and data structures while
            working on minor projects. Eventually I transitioned into
            Javascript, HTML, and CSS to expand my knowledge on web development.{" "}
            Being fascinated by the intricacy and power of programming and
            building out projects, I decided to push myself more and enroll into
            an immersive fullstack web development bootcamp with{" "} */}
            {/* <span className='text-blue-600'>Fullstack Academy. </span>I am a
            problem solver through and through, and I strive to handle critical
            technical situations calmly providing structure for investigation
            and taking practical steps to identify & resolve the issue. My
            learning is accelerating rapidly and allowing me to express my
            general interest in working about new technologies and coming up
            with solutions to unsolved problems. */}
          </p>
          <Link
            to='projects'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className='py-2 underline cursor-pointer hover:text-blue-600 italic'
          >
            Check out some of my projects
          </Link>
        </div>
        <div className='w-full h-auto m-auto p-4 rounded-2xl shadow-lg shadow-gray-400 flex items-center justify-center ease-in duration-300 hover:scale-110'>
          <Image
            src={Profileimg}
            alt='profile'
            width='387'
            height='65'
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
