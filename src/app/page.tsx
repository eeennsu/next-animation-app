import Image from 'next/image'
import { data } from './_data';
import AnimCard from '@/features/root/AnimCard';
import LoadMore from '@/features/root/LoadMore';

export default function Home() {
    return (
        <main className='flex flex-col gap-10 px-8 py-16 sm:p-16'>
            <h2 className='text-3xl font-bold text-emerald-100'>
                Explore Anime
            </h2>
            <section className='grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {
                    data.map((item: any, i) => (
                        <AnimCard key={item.id} anime={item} idx={i} />
                    ))
                }
            </section>
            <LoadMore />
        </main>
    );
}
