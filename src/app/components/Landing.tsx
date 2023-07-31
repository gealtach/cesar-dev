import manDev from '../img/man-developing.svg';
import Image from "next/image";

export default () => {
    return(
        <div className='flex flex-col mt-4 font-text'>
            <div className="my-4 flex justify-center">
                <Image src={manDev} alt="dev" height={300} width={300} />
            </div>
            <span className='text-3xl mt-2'>Full-Stack <br /> Web and Mobile Developer.</span>
            <span className='my-4'>
                Building digital structures to solve your needs,
                crafting useful user interfaces and strong platforms for your data.
            </span>
        </div>
    )
}