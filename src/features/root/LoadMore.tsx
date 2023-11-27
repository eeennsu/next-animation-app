import Image from 'next/image';
import type { FC } from 'react';

const LoadMore: FC = () => {

    return (
        <section className='flex items-center justify-center w-full'>
            <Image
                src='./spinner.svg'
                alt='spinner'
                width={56}
                height={56}
                className='object-contain'
            />
        </section>
    );
};

export default LoadMore;