import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cosmosimg from '../public/projects/cosmos2.jpeg';
import { FaReact, FaNode } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import {
  SiJavascript,
  SiMaterialui,
  SiExpress,
  SiSequelize,
  SiVercel,
  SiJira,
} from 'react-icons/si';

const cosmos = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          //objectFit maintains the aspect ratio, so it all fits together nicely.
          src={Cosmosimg}
          alt='image'
        />
        <div className='absolute top-[70%] left-[50%] right-[50%] max-w-[1240px] w-full translate-x-[-50%] translate-y-[-50%] text-white z-10'>
          <h2 className='py-2 tracking-widest'>Learn The Cosmos</h2>
          <h3 className='tracking-widest uppercase text-sm md:text-lg'>
            ReactJS / NodeJS / ExpressJS / PostgreSQL
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
            A hackathon project provided through the #DearJuniorDev Discord
            Community. Organized using an Agile workflow and Jira for project
            planning and task delegation. The theme for this project is to build
            an interactive website that provides information on the planets of
            the solar system, which can serve as an educative platform for
            children. This application consists of a responsive sleek frontend,
            with the planets all being CSS made, with intricate styling to
            correctly display the planet as realistically as possible., as well
            as a custom and efficient backend. The data rendered on the client
            is coming from the Postgres database which was manually seeded, due
            to Sequelize queries carried out through custom express routes and
            API&apos;s via NodeJS. The communication between frontend and
            backend is happening through Axios, allowing for a seamless
            transmission of data.
          </p>
          <div className='py-3'>
            <p className='text-blue-600 uppercase tracking-wide text-sm'>
              Please expect a 30 second load time when clicking the website link
              due to deployment service being used.
            </p>
          </div>
          <a
            href='https://github.com/MichaelKleyman/SolarSysQuack-Frontend'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Frontend Code</button>
          </a>
          <a
            href='https://github.com/pfknight8/SolarSysQuack'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Backend Code</button>
          </a>
          <a
            href='https://solar-system-quack.vercel.app/'
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
                <SiExpress color='blue' className='pr-1' /> ExpressJS
              </p>
              <p className='flex items-center py-2'>
                <SiMaterialui color='blue' className='pr-1' /> Material UI
              </p>
              <p className='flex items-center py-2'>
                <FaNode color='blue' className='pr-1' /> NodeJS
              </p>
              <p className='flex items-center py-2'>
                <SiSequelize color='blue' className='pr-1' /> Sequelize
              </p>
              <p className='flex items-center py-2'>
                <SiVercel color='blue' className='pr-1' /> Vercel
              </p>
              <p className='flex items-center py-2'>
                <SiJira color='blue' className='pr-1' /> Jira
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

export default cosmos;
