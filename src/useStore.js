import create from "zustand";

export const useStore = create((set) => {
  return {
    searchString: "",

    setSearchString: (newString) => {
      set({ searchString: newString });
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

export const useActiveShoppingItemsStore = create((set) => {
  return {
    arrActiveShoppingItems: [],

    setArrActiveShoppingItems: (ele) => {
      set((state) => {
        // check if id is already used
        if (!state.arrActiveShoppingItems.includes(ele)) {
          state.arrActiveShoppingItems = [...state.arrActiveShoppingItems, ele];
        }
        localStorage.setItem(
          "shopping.activeItems",
          JSON.stringify(state.arrActiveShoppingItems)
        );
        return { arrActiveShoppingItems: state.arrActiveShoppingItems };
      });
    },
  };
});

export const useSearchResultStore = create((set) => {
  return {
    arrSearchResult: [],
    setArrSearchResult: (search) => {
      set({ arrSearchResult: search });
    },
  };
});

export default useStore;
