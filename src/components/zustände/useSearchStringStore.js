import create from "zustand";

export const useSearchStringStore = create((set) => {
  return {
    searchString: "",

    setSearchString: (newString) => {
      set((state) => {
        return { searchString: newString };
      });
    },
  };
});

export default useSearchStringStore;
