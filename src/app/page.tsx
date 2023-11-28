import Image from 'next/image'
import AnimCard from '@/features/root/AnimCard';
import LoadMore from '@/features/root/LoadMore';
import dumyDatas from '@/dumy/dumyDatas';

export default function Home() {

    return (
        <main className='flex flex-col gap-10 px-8 py-16 sm:p-16'>
            <h2 className='text-3xl font-bold text-emerald-100'>
                Explore Anime
            </h2>
            <section className='grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {
                    dumyDatas.map((anim: any, i) => (
                        <AnimCard key={anim.id} anim={anim} idx={i} />
                    ))
                }
            </section>
            <LoadMore />
        </main>
    );
}
