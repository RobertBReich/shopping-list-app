import create from "zustand";

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

export default useActiveShoppingItemsStore;
