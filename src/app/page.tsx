import AnimCard from '@/features/anim/AnimCard';
import LoadMore from '@/features/root/LoadMore';
import { NextPage } from 'next';
import { fetchAnim } from '@/actions/animAction';

const Home: NextPage = async () => {

    const anims = await fetchAnim();

    console.log('data', anims);

    return (
        <main className='flex flex-col max-w-6xl gap-10 px-8 py-16 mx-auto sm:p-16'>
            <h2 className='text-3xl font-bold text-center text-emerald-100 md:text-left'>
                Explore Anime
            </h2>
            <section className='grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {
                    anims.map((anim, i) => (
                        <AnimCard key={anim.id} anim={anim} index={i} />
                    ))
                }
            </section>
            <LoadMore />
        </main>
    );
}

export default Home;
