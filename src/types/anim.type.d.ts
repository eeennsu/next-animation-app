type Anim = {
    id: string;
    name: string;
    image: {
        original: string;
    };
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
    status?: 'anons' | 'ongoing' | 'released';
}

type Order = 'id' | 'ranked' | 'kind' | 'popularity' | 'name' | 'aired_on' | 'episodes' | 'status' | 'random' | 'ranked_random' | 'ranked_shiki';

type AnimStoreType = {
    anims: Anim[];
    setAnims: (anims: Anim[]) => void;
}