import { create } from 'zustand';

const useAnimStore = create<AnimStoreType>((set, get) => ({
    anims: [],
    setAnims: (anims) => set(() => ({ anims: [...get().anims, ...anims] }))
}));

export default useAnimStore;