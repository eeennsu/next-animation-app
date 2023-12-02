import Image from 'next/image';
import type { FC } from 'react';

const Hero: FC = () => {

    return (
        <header className='px-8 py-16 bg-center bg-no-repeat bg-cover bg-hero sm:p-16 lg:items-center sm:gap-16'>
            <div className='flex justify-center w-full max-w-6xl gap-0 mx-auto max-lg:flex-col'>
                <div className='flex flex-col items-center flex-1 gap-10 md:items-start'>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        width={101}
                        height={96}
                        className='object-contain'
                    />
                    <h1 className='text-5xl font-bold leading-[120%] text-white sm:text-6xl lg:max-w-lg text-center md:text-left'>
                        Explore The <span className='text-blue-500'>Animation</span> with Next.js!
                    </h1>
                </div>
                <div className='relative justify-center w-full h-[50vh] lg:flex-1'>
                    <Image src='/anime.png' alt='anime' fill className='object-contain' />
                </div>            
            </div>
        </header>
    );
};

export default Hero;