import type { Metadata, NextPage } from 'next'
import { DM_Sans } from 'next/font/google'
import { PropsWithChildren } from 'react';
import './globals.css'
import Hero from '@/features/root/Hero';
import Footer from '@/features/root/Footer';

const inter = DM_Sans({ subsets: ['latin'] });

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
    
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='flex flex-col min-h-screen bg-gradient-to-r from-slate-600 to-slate-100'>
                    <div className='flex flex-col flex-grow w-full mx-auto max-w-7xl'>
                        <Hero />
                        {children}
                    </div>
                    <Footer />
                </div>            
            </body>
        </html>
    );
}

export default RootLayout



export const metadata: Metadata = {
    title: 'Animation App',
    description: 'Generated by create next app',
}