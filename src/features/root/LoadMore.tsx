'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { fetchAnim } from '@/actions/animAction';
import AnimCard from '../anim/AnimCard';

const LoadMore: FC = () => {
    // 서버 컴포넌트는 훅을 사용할 수 없기에 클라이언트 컴포넌트로 교체
    const { ref, inView } = useInView({ threshold: 0.5 });

    const [anims, setAnims] = useState<Anim[]>([]);
    const [curPage, setCurPage] = useState<number>(2);

    useEffect(() => {
        if (inView) {
            (async () => {
                const data = await fetchAnim(curPage);

                if (data) {
                    setAnims((prev) => [...prev, ...data]);
                    setCurPage((prev) => prev + 1);
                }
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return (
        <>
            <section className='grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {anims.map((anim, i) => (
                    <AnimCard key={anim.id} anim={anim} index={i} />
                ))}
            </section>
            <section className='flex items-center justify-center w-full'>
                <div ref={ref}>
                    <Image src='./spinner.svg' alt='spinner' width={56} height={56} className='object-contain' />
                </div>
            </section>
        </>
    );
};

export default LoadMore;
