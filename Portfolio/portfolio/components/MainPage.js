import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll/modules';

const MainPage = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest'>Connect with me</p>
          <h1>
            Hi, Im <span className='text-blue-600 '>Mike</span>
          </h1>
          <h1 className='py-2'>A Fullstack Software Engineer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I&apos;m a Fullstack software engineer with experience in creating
            responsive web applications, while using my frontend and backend
            programming knowledge to ensure an optimal user experience. I enjoy
            the process of designing, developing, and maintaining web
            applications with a team of people.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
