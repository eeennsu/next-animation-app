import type { FC } from 'react';
import Image from 'next/image';
import MotionDiv from './MoitonDiv';

type Props = {
    anim: Anim;
    index: number;
}

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const AnimCard: FC<Props> = ({ anim, index }) => {

    const src = `https://shikimori.one${anim.image.original}`;
  
    return (
        <MotionDiv
            className='relative flex flex-col max-w-sm rounded-lg shadow-lg hover:shadow-2xl' 
            initial='hidden'
            variants={variants}
            animate='visible'
            transition={{
                delay: index % 12 * 0.15,
                ease: 'easeOut',
                duration: 0.2,
            }}
            viewport={{ amount: 0 }}
        >
            <div className='relative w-full h-[56vh] md:h-[36vh]'>
                <Image 
                    src={src}
                    alt={anim.name}
                    fill
                    className='rounded-t-lg rounded-b-sm'
                    sizes="(max-width: 226px) 100vw, (max-width: 1024px) 50vw, 226px"
                />
            </div>
            <div className='flex flex-col gap-1.5 px-3 py-2'>
                <div className='flex items-center justify-between gap-1'>
                    <p className='overflow-x-hidden text-lg whitespace-nowrap text-ellipsis'>
                        {anim.name}
                    </p>
                    <div className='text-white/80'>
                        {anim.kind}
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='flex gap-2'>
                        <Image 
                            src='./episodes.svg'
                            alt='start'
                            width={18}
                            height={18}
                            className='object-contain'
                        />
                        <p className='text-base font-bold'> 
                            {anim.episodes || anim.episodes_aired}
                        </p>
                    </div>
                    <div className='flex gap-2'>
                        <Image 
                            src='./star.svg'
                            alt='start'
                            width={18}
                            height={18}
                            className='object-contain'
                        />
                        <span>
                            {anim.score}
                        </span>
                    </div>
                </div>
            </div>
        </MotionDiv>
    );
};

export default AnimCard;