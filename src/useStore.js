import create from "zustand";

export const useStore = create((set) => {
  return {
    searchString: "",

    setSearchString: () => {
      set((state) => {
        return { searchString: state.searchString };
      });
    },
  };
});

export const useShoppingStore = create((set) => {
  return {
    arrShoppingItems: [],

    setArrShoppingItems: (item) => {
      set((state) => {
        return { arrShoppingItems: item };
      });
    },
    arrShoppingCategories: [],

    setArrShoppingCategories: (ele) => {
      set((state) => {
        return { arrShoppingItems: ele };
      });
    },
  };
});

export const useShoppingCategoriesStore = create((set) => {
  return {
    arrShoppingCategories: [],

    setArrShoppingCategories: (ele) => {
      set((state) => {
        return { arrShoppingItems: ele };
      });
    },
  };
});

export default useStore;
