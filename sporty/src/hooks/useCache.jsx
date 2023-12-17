import { create } from "zustand";

export const useCache = create((set) => ({
    tournamentsCache: [],
    categoriesCache: [],
    inscriptionsCache: [],
    usersCache: [],
    // session: null,
    setCache: (key, value) => set({ [key]: value }),
}));