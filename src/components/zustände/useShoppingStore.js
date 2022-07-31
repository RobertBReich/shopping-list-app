import create from "zustand";

export const useShoppingStore = create((set) => {
  return {
    arrShoppingItems: [],

    setArrShoppingItems: (item) => {
      set((state) => {
        return { arrShoppingItems: item };
      });
    },
  };
});

export default useShoppingStore;
