import Image from 'next/image';
import logo from '../img/logo.svg';


export default () => {
    return(
        <div className='flex w-full justify-between items-center'>
            <Image src={logo} alt='logo' height={100} width={100} />
            <button className='text-3xl font-boton border-purple-900 border-2 px-2 py-1 h-fit rounded-lg hover:bg-purple-900'>Contact</button>
        </div>
    )
}