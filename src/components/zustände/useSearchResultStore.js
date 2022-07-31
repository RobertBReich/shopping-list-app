import create from "zustand";

export const useSearchResultStore = create((set) => {
  return {
    arrSearchResult: [],
    setArrSearchResult: (search) => {
      set({ arrSearchResult: search });
    },
  };
});

export default useSearchResultStore;
