import Image from 'next/image';
import type { FC } from 'react';

const Hero: FC = () => {

    return (
        <header className='flex justify-center w-full gap-0 px-8 py-16 bg-center bg-no-repeat bg-cover max-lg:flex-col bg-hero sm:p-16 lg:items-center sm:gap-16 '>
            <div className='flex flex-col flex-1 gap-10 '>
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={101}
                    height={96}
                    className='object-contain'
                />
                <h1 className='text-5xl text-white sm:text-6xl lg:max-w-lg font-bold leading-[120%]'>
                    Explore The <span className='text-blue-500'>Animation</span> with Next.js!
                </h1>
            </div>
            <div className='relative justify-center w-full h-[50vh] lg:flex-1'>
                <Image src='/anime.png' alt='anime' fill className='object-contain' />
            </div>
        </header>
    );
};

export default Hero;