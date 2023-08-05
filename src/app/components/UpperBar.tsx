import Image from 'next/image';
import logo from '../img/logo100x100.svg';


const UpperBar = () => {
    return(
        <div className='flex w-full justify-around items-center bg-bar px-2 py-1 rounded-lg'>
            <a href="#about">
                <Image src={logo} alt='logo' height={100} width={100} />
            </a>
            <button className='text-2xl p-2 font-boton border-purple-900 border-2 px-2 py-1 h-fit rounded-lg hover:bg-purple-900 hover:scale-110'><a href="#contact">Contact</a></button>
        </div>
    )
};

export default UpperBar;