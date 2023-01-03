import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import sliceImg from '../public/projects/Slice.jpeg';
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
} from 'react-icons/Si';

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
          src={sliceImg}
          alt='image'
        />
        <div className='absolute top-[70%] left-[50%] right-[50%] max-w-[1240px] w-full translate-x-[-50%] translate-y-[-50%] text-white z-10'>
          <h2 className='py-2 tracking-widest'>Slice Task Management</h2>
          <h3 className='tracking-widest uppercase text-sm md:text-lg'>
            NextJS / Firebase / Tailwind / Redux
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href='https://youtu.be/GRtXewbt4jQ' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/2209-Capstone-Team-B/Slice'
            target='_blank'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
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
                <SiNextdotjs color='blue' className='pr-1' /> NextJS
              </p>
              <p className='flex items-center py-2'>
                <SiFirebase color='blue' className='pr-1' /> Firebase
              </p>
              <p className='flex items-center py-2'>
                <SiRedux color='blue' className='pr-1' /> Redux
              </p>
              <p className='flex items-center py-2'>
                <SiTailwindcss color='blue' className='pr-1' /> TailwindCSS
              </p>
              <p className='flex items-center py-2'>
                <SiMaterialui color='blue' className='pr-1' /> Material UI
              </p>
              <p className='flex items-center py-2'>
                <SiReact color='blue' className='pr-1' /> React Drag N Drop
              </p>
              <p className='flex items-center py-2'>
                <SiChartdotjs color='blue' className='pr-1' /> ChartJS
              </p>
              <p className='flex items-center py-2'>
                <SiFigma color='blue' className='pr-1' /> Figma
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer pb-5'>Go back</p>
        </Link>
      </div>
    </div>
  );
};

export default slice;
