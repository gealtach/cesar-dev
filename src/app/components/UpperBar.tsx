import Image from 'next/image';
import logo from '../img/logo.svg';


const UpperBar = () => {
    return(
        <div className='flex w-full justify-between items-center bg-bar px-2 py-1 rounded-lg'>
            <Image src={logo} alt='logo' height={100} width={100} />
            <button className='text-2xl p-2 font-boton border-purple-900 border-2 px-2 py-1 h-fit rounded-lg hover:bg-purple-900'><a href="#contact">Contact</a></button>
        </div>
    )
};

export default UpperBar;