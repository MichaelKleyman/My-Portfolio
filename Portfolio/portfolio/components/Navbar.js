import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image
          src='/../public/images/Logo.png'
          alt='logo'
          width='105'
          height='50'
          className='pb-9'
        />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase duration-200 hover:scale-110'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase duration-200 hover:scale-110'>
                About
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase duration-200 hover:scale-110'>
                Skills
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase duration-200 hover:scale-110'>
                Projects
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase duration-200 hover:scale-110'>
                Contacts
              </li>
            </Link>
          </ul>
          <div className='md:hidden'>
            <AiOutlineMenu size={35} />
          </div>
        </div>
      </div>
      <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#FAF9F6] p-10 ease-in duration-500'>
          <div className='flex items-center justify-between'>
            <Image
              src='/../public/images/Logo.png'
              alt='logo'
              width='87'
              height='65'
            />
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>Explore my portfolio</p>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Contacts</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Lets Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full '>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn size={30} />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub size={30} />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;