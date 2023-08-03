import jsLogo from "../img/javascript-svgrepo-com.svg";
import expressLogo from "../img/expressjs-icon.svg";
import gitLogo from "../img/git-svgrepo-com(1).svg";
import nextLogo from "../img/next-js-seeklogo.com.svg";
import nodeLogo from "../img/node-js-svgrepo-com.svg";
import postgreLogo from "../img/postgresql-icon.svg";
import prismaLogo from "../img/prisma-3.svg";
import reactLogo from "../img/react-svgrepo-com.svg";
import reduxLogo from '../img/redux-svgrepo-com.svg';
import socketLogo from '../img/socketio-icon.svg';
import tailwindLogo from '../img/tailwindcss.svg';
import Image from 'next/image';

const About = () => {
    return(
        <div className="font-text py-10 md:py-40" id="about">
            <div className="flex flex-col md:w-1/3">
            <span className="text-3xl">Hi there I am Cesar.</span>
            <span>
            I am a Full Stack Web developer with experience building web and mobile applications.
            I specialize in JavaScript and experience working with:
            </span>
            </div>
            <div className="flex flex-auto justify-center flex-wrap m-2 p-2 rounded-xl">
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={jsLogo} alt="JavaScript" className="w-10 m-2" />
                <span>JavaScript</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={reactLogo} alt="React.js" className="w-10 m-2" />
                    <span>React</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={reactLogo} alt="React-Native" className="w-10 m-2" />
                    <span>React-Native</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={reduxLogo} alt="Redux" className="w-10 m-2" />
                    <span>Redux</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={expressLogo} alt="Express.js" className="w-10 m-2" />
                    <span>Expres</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={nodeLogo} alt="Node.js" className="w-10 m-2" />
                    <span>Node</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={nextLogo} alt="Next.js" className="w-10 m-2" />
                    <span>Next</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={gitLogo} alt="Git" className="w-10 m-2" />
                    <span>Git</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={postgreLogo} alt="PostgreSql" className="w-10 m-2" />
                    <span>PostgreSql</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={prismaLogo} alt="Prisma" className="w-10 m-2" />
                    <span>Prisma ORM</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={socketLogo} alt="Socket.io" className="w-10 m-2" />
                    <span>Socket.io</span>
                </div>
                <div className="flex flex-col items-center w-1/2 md:w-1/5 my-2 md:my-10 hover:scale-125">
                    <Image src={tailwindLogo} alt="TailwindCss" className="w-10 m-2 h-10" />
                <span>TailwindCss</span>
                </div>
            </div>
        </div>
    )
};

export default About;