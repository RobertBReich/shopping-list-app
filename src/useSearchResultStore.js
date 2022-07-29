import create from "zustand";

export const useSearchResultStore = create((set) => {
  return {
    arrSearchResult: [],
    setArrSearchResult: (search) => {
      console.log("Search Triggered!");
      console.log(search);
      set({ arrSearchResult: search });
    },
  };
});

export default useSearchResultStore;
