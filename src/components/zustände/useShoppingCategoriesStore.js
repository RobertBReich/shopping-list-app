import create from "zustand";

export const useShoppingCategoriesStore = create((set) => {
  return {
    arrShoppingCategories: [],

    setArrShoppingCategories: (ele) => {
      set((state) => {
        return { arrShoppingCategories: ele };
      });
    },
  };
});

export default useShoppingCategoriesStore;
