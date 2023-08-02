import Image from "next/image"
import gmailLogo from '../img/gmail-icon-logo-svgrepo-com.svg';
import linkedinLogo from '../img/linkedin-svgrepo-com.svg';

const Contact = () => {
    return(
        <div className="font-text bg-bar pt-2 pl-2 pb-3" id="contact">
            <div className="flex flex-col md:items-center">
                <span className="text-2xl">You can find me here</span>
                <br />
                <span>
                    Do you want to talk? <br />
                    Do you want to start a new project? <br />
                </span>
            </div>
            <br />
            <div className="flex flex-row">
                <a href="mailto:cleivaj93@gmail.com" target='_blank' className="flex w-1/2 justify-center cursor-default">
                    <Image src={gmailLogo} alt="mailTo" className="w-24 hover:scale-125 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/cesar-leiva/" target='_blank' className="flex w-1/2 justify-center cursor-default">
                    <Image src={linkedinLogo} alt="mailTo" className="w-24 hover:scale-125 cursor-pointer" />
                </a>
            </div>
        </div>
    )
};

export default Contact;