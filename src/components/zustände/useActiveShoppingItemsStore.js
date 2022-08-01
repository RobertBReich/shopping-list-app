import create from "zustand";
import { persist } from "zustand/middleware";

export const useActiveShoppingItemsStore = create(
  persist(
    (set) => {
      return {
        arrActiveShoppingItems: [],

        setArrActiveShoppingItems: (ele) => {
          set((state) => {
            // check if id is already used
            if (!state.arrActiveShoppingItems.includes(ele)) {
              state.arrActiveShoppingItems = [
                ...state.arrActiveShoppingItems,
                ele,
              ];
            }
            localStorage.setItem(
              "shopping.activeItems",
              JSON.stringify(state.arrActiveShoppingItems)
            );
            return { arrActiveShoppingItems: state.arrActiveShoppingItems };
          });
        },
      };
    },
    { name: "localStore" }
  )
);

export default useActiveShoppingItemsStore;
