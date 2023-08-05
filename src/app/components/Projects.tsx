import Image from 'next/image';
import projectOne from '../img/whatsappClone2.png';
import projectTwo from '../img/WhatsApp Image 2023-08-01 at 11.30.27 AM(1).jpeg';
import logo from '../img/logo.svg';
import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from 'react-icons/io';
import { useState } from 'react';

const slides = [
    {
        img: projectOne,
        legend: [
            'This project was created with Next.Js, TailWindCss, Prima-ORM, Socket.io. ',
            'Login with Google using Firebase integration. ',
            'Send and Receive Messages using Sockets: Real-time messaging capabilities. ',
            'Voice Notes with Live Audio Waveforms. ',
            'Support for Emoji.',
            'Send Images. ',
            'Online/Offline Functionality. ',
            'Take instant photos using your device camera and send them instantly. ',
            'Message Read Status: Know when your messages have been read by your recipients. ',
            'Message Time: Stay updated with the time stamps of messages for better organization. '
        ],
        second: 'Find the code ',
        git: 'https://github.com/gealtach/whatsappClone'
    },
    {
        img: projectTwo,
        legend: [
            'An ExpoGo Mobile Games Store project using TailWindCss. ',
            'Login using Firebase integration. ',
            'StoreCart with Redux.',
        ],
        second: 'Find the code ',
        git: 'https://github.com/gealtach/coderGamesApk'
    },
    {
        img: logo,
        legend: 'If you wanna see more about my work contact me or visit my GitHub.',
        second: '',
        git: 'https://github.com/gealtach/gealtach'
    }
]
const Projects = () => {
    const [slide, setSlide] = useState(0);
    const handleRightArrowClick = () => {
        slide === slides.length - 1 ? setSlide(0) : setSlide(slide + 1);
    }
    const handleLeftArrowClick = () => {
        slide === 0 ? setSlide(slides.length -1) : setSlide(slide - 1);
    }

    return(
        <div className="font-text mb-3">
            <span className="text-3xl">Projects</span>
            <div className='my-4 border border-white  p-2 rounded-lg flex flex-col md:flex-row justify-evenly'>
                <Image src={slides[slide].img} alt='p1' className='rounded-lg max-h-fit md:w-1/3' />
                <div className='flex flex-col my-4 md:w-1/3 items-center justify-center'>
                    <span className='md:text-xl'>{slides[slide].legend}</span>
                    <span>{slides[slide].second} <a href={slides[slide].git} target='blank' className='text-purple-900 hover:text-2xl'>here!</a></span>
                </div>
            </div>
            <div className='flex flex-row justify-around my-2'>
                <IoMdArrowDropleftCircle className='cursor-pointer hover:scale-125 text-purple-900 w-10 h-10' onClick={handleLeftArrowClick} />
                <IoMdArrowDroprightCircle className='cursor-pointer hover:scale-125 text-purple-900 w-10 h-10' onClick={handleRightArrowClick} />
            </div>
        </div>
    )
};

export default Projects;