/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll/modules";

const MainPage = () => {
  const appearOptions = {
    rootMargin: "0px 0px -150px 0px",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          // entry.target.classList.remove('show');
          return;
        }
      });
    }, appearOptions);

    const hideElements = document.querySelectorAll(".hide");
    hideElements.forEach((elem) => observer.observe(elem));
  }, []);

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='hide uppercase text-sm tracking-widest'>
            Connect with me
          </p>
          <h1 className='hide'>
            Hi, Im <span className='text-blue-600 '>Mike</span>
          </h1>
          <h1 className='hide py-2'>A Fullstack Software Engineer</h1>
          {/* <p className='hide py-4 text-gray-600 max-w-[70%] m-auto'>
            I&apos;m a Fullstack software engineer with experience in creating
            responsive web applications, while using my frontend and backend
            programming knowledge to ensure an optimal user experience. I enjoy
            the process of designing, developing, and maintaining web
            applications with a team of people.
          </p> */}
          <p className='hide py-4 text-gray-600 max-w-[70%] m-auto'>
            I&apos;m a Fullstack software engineer bringing extensive experience
            in developing scalable and efficient solutions for complex
            challenges. With a strong focus on optimizing performance and
            delivering high-quality products, I bring experience in
            collaborating with cross-functional teams to drive innovation and
            enhancing user experiences. I aim to tackle exciting technical
            endeavors and make a real impact on the lives of billions of users
            worldwide.
          </p>
          <div className='hide flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/michael-kleyman/'
              target='_blank'
              rel='noreferrer'
              className='rounded-full shadow-lg shadow-gray-400
            p-5
            cursor-pointer
            hover:scale-110 ease-in duration-300'
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href='https://github.com/MichaelKleyman'
              target='_blank'
              rel='noreferrer'
              className='rounded-full shadow-lg shadow-gray-400
            p-5
            cursor-pointer
            hover:scale-110 ease-in duration-300'
            >
              <FaGithub size={20} />
            </a>
            <Link
              className='rounded-full shadow-lg shadow-gray-400
            p-5
            cursor-pointer
            hover:scale-110 ease-in duration-300'
              to='contact'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <AiOutlineMail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
