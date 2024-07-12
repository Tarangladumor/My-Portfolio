import React from 'react'
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Contact from './Contact';
import Download from './Download';
import Location from './Location';
import Tools from './Tools';
import Skills from './Skills';
import { Name, Designation, SOCIAL_LINKS } from '../../../constants/constant';
import Tarang from '../../../Public/Images/Tarang Image.jpg';
import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
        <>
            {/* fixed at top */}
            <div className='headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4'>
                <img className='w-20 h-20 rounded-full aspect-square ' src={Tarang} alt='profile picture' />
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-gray-300 text-base font-bold break-normal'>{Name}</span>
                    <span className='text-sm text-LightGray text-center mt-2'>{Designation}</span>
                </div>
            </div>

            {/* middle components */}
            <div className='beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4'>
                <Location />
                <Skills />
                <Tools />
                <Contact />
                <Download icon={<FaDownload />} />
            </div>

            {/* fixed at bottom */}
            <div className='footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow'>
                <Link href={SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer' className=''>
                    <FaGithub />
                </Link>
                {/* <Link href={SOCIAL_LINKS.TWITTER} target='_blank' rel='noreferrer' className=''>
        <FaTwitter />
      </Link> */}
                {/* <Link href={SOCIAL_LINKS.FACEBOOK} target='_blank' rel='noreferrer' className=''>
        <FaFacebook />
      </Link> */}
                <Link href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel='noreferrer' className=''>
                    <FaLinkedin />
                </Link>
            </div>
        </>
    )
}

export default Introduction
