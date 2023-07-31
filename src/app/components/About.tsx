import jsLogo from '../img/javascript-svgrepo-com.svg';
import expressLogo from '../img/expressjs-icon.svg';
import gitLogo from '../img/git-svgrepo-com(1).svg';
import nextLogo from '../img/next-js-seeklogo.com.svg';
import nodeLogo from '../img/node-js-svgrepo-com.svg';
import postgreLogo from '../img/postgresql-icon.svg';
import prismaLogo from '../img/prisma-3.svg';
import reactLogo from '../img/react-svgrepo-com.svg';
import reduxLogo from '../img/redux-svgrepo-com.svg';
import socketLogo from '../img/socketio-icon.svg';
import Image from 'next/image';

export default () => {
    return(
        <div className="font-text">
            <span className="text-3xl">Hi there I'm Cesar</span><br /><br />
            <span>
            I am a Full Stack Web developer with experience building web and mobile applications.
            I specialize in JavaScript and have experience working with:
            </span>
            <div className='flex flex-auto justify-center flex-wrap m-2 p-2  rounded-xl'>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={jsLogo} alt='javaScript' className='w-10 m-2' />
                <span>JavaScript</span>
                </div>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={reactLogo} alt='React.js' className='w-10 m-2' />
                    <span>React</span>
                </div>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={reactLogo} alt='React-Native' className='w-10 m-2' />
                    <span>React-Native</span>
                </div>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={reduxLogo} alt='Redux' className='w-10 m-2' />
                    <span>Redux</span>
                </div>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={expressLogo} alt='Express.js' className='w-10 m-2' />
                    <span>Expres</span>
                </div>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={nodeLogo} alt='Node.js' className='w-10 m-2' />
                    <span>Node</span>
                </div>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={nextLogo} alt='Next.js' className='w-10 m-2' />
                    <span>Next</span>
                </div>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={gitLogo} alt='Git' className='w-10 m-2' />
                    <span>Git</span>
                </div>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={postgreLogo} alt='PostgreSql' className='w-10 m-2' />
                    <span>PostgreSql</span>
                </div>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={prismaLogo} alt='Prisma' className='w-10 m-2' />
                    <span>Prisma ORM</span>
                </div>
                <div className='flex flex-col items-center w-1/2 md:w-1/5 my-1'>
                    <Image src={socketLogo} alt='socket.io' className='w-10 m-2' />
                    <span>Socket.io</span>
                </div>
            </div>
        </div>
    )
}