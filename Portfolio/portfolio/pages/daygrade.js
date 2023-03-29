import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Daygradeimg from '../public/projects/daygrade.jpeg';
import { FaReact, FaNode } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiTailwindcss,
  SiMaterialui,
  SiChartdotjs,
  SiFigma,
} from 'react-icons/si';

const slice = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          //objectFit maintains the aspect ratio, so it all fits together nicely.
          src={Daygradeimg}
          alt='image'
        />
        <div className='absolute top-[70%] left-[50%] right-[50%] max-w-[1240px] w-full translate-x-[-50%] translate-y-[-50%] text-white z-10'>
          <h2 className='py-2 tracking-widest'>Daygrade</h2>
          <h3 className='tracking-widest uppercase text-sm md:text-lg'>
            ReactJS / Firebase / Tailwind / Redux
          </h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4 p-3'>
          <p className='text-blue-600 tracking-widest uppercase text-xl pb-3'>
            Project
          </p>
          <h2 className='pb-4'>Overview</h2>
          <p>
            Daygrade is fullstack progressive web application, with secure user
            authentication catered specifically to the end user, to collect and
            visualize data overtime. This application is a progressive mental
            health tool and a framework for growth. It aims to help individuals
            improve their strive for daily improvement in their lives, by
            consistently tracking their activities throughout the day, and
            giving each day a score from a scale of 1-10. This system assesses
            how well the individual managed their time and energy throughout the
            day, including their ability to prioritize self-care and maintain a
            healthy work-life balance. With a dynamic and responsive user
            interface, it has cross-platform capability, fast load time, and
            offline accessibility.
          </p>
          <div className='py-3'>
            <p className='text-blue-600 uppercase tracking-wide'>
              Demo Account
            </p>
            <p>Email: michaelkleyman0725@gmail.com</p>
            <p>Password: 123456</p>
          </div>
          <a
            href='https://www.youtube.com/watch?v=3Gzwr1o4UZ4'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/MichaelKleyman/DayGrade/tree/main/daygrade'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://daygrade.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Website</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='flex items-center py-2'>
                <SiJavascript color='blue' className='pr-1' /> Javascript
              </p>
              <p className='flex items-center py-2'>
                <IoLogoCss3 color='blue' className='pr-1' /> CSS
              </p>
              <p className='flex items-center py-2'>
                <FaReact color='blue' className='pr-1' /> ReactJS
              </p>
              <p className='flex items-center py-2'>
                <SiFirebase color='blue' className='pr-1' /> Firebase
              </p>
              <p className='flex items-center py-2'>
                <SiRedux color='blue' className='pr-1' /> Redux Toolkit
              </p>
              <p className='flex items-center py-2'>
                <SiTailwindcss color='blue' className='pr-1' /> TailwindCSS
              </p>
              <p className='flex items-center py-2'>
                <SiMaterialui color='blue' className='pr-1' /> Material UI
              </p>
              <p className='flex items-center py-2'>
                <FaNode color='blue' className='pr-1' /> NodeJS
              </p>
              <p className='flex items-center py-2'>
                <SiChartdotjs color='blue' className='pr-1' /> React-ChartJS
              </p>
              <p className='flex items-center py-2'>
                <SiFigma color='blue' className='pr-1' /> Figma
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer hover:text-blue-600'>
            Go back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default slice;
