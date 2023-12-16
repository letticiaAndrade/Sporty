import { create } from "zustand";

export const useCache = create((set) => ({
    tournamentCache: [],
    categoriesCache: [],
    // session: null,
    setCache: (key, value) => set({ [key]: value }),
}));