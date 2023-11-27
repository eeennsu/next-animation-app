import type { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

const Footer: FC = () => {

    return (
        <footer className='px-8 py-4 bg-gradient-to-bl from-slate-950 to-slate-700 sm:px-16'>
            <div className='flex flex-wrap items-center justify-around max-w-2xl mx-auto gap-y-4'>
                <p className='text-base font-bold text-white'>
                    @2023 All rights reserved
                </p>       
                    <Image 
                        src='./logo.svg' 
                        alt='logo'
                        width={47} 
                        height={44} 
                        className='object-contain' 
                    />
                <div className='flex items-center gap-3'>
                    <ImageWrapper>
                        <Image 
                            src='./tiktok.svg'
                            alt='logo'
                            width={19}
                            height={19}
                            className='object-contain'
                        />
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image 
                            src='./twitter.svg'
                            alt='logo'
                            width={19}
                            height={19}
                            className='object-contain'
                        />
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image 
                            src='./instagram.svg'
                            alt='logo'
                            width={19}
                            height={19}
                            className='object-contain'
                        />
                    </ImageWrapper>
                </div>       
            </div>
        </footer>
    );
};

export default Footer;



const ImageWrapper: FC<PropsWithChildren> = ({ children }) => (
    <div className='p-3 cursor-pointer rounded-2xl bg-white/20 hover:bg-white/30'>
        {children}
    </div>
)