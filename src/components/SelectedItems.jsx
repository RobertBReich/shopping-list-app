import React, { useEffect } from "react";
import arrActiveShoppingItems from "./zustände/useActiveShoppingItemsStore";
import useActiveShoppingItemsStore from "./zustände/useActiveShoppingItemsStore";
import useShoppingStore from "./zustände/useShoppingStore";
import useShoppingCategoriesStore from "./zustände/useShoppingCategoriesStore";
import useLanguageStore from "./zustände/useLanguageStore";
//import { nanoid } from "nanoid";
import styled from "styled-components";

// Search Result Button
const Div = styled.div`
  margin-bottom: 24px;
`;

const Button = styled.button`
  position: relative;
  font-size: 1.4rem;
  background-color: #515151;
  color: #fff;
  padding: 10px 16px;
  margin: 4px 6px 4px 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.1);
`;

export default function SelectedItems(cat) {
  const arrActiveShoppingItems = useActiveShoppingItemsStore(
    (state) => state.arrActiveShoppingItems
  );
  const setArrActiveShoppingItems = useActiveShoppingItemsStore(
    (state) => state.setArrActiveShoppingItems
  );
  const arrShoppingCategories = useShoppingCategoriesStore(
    (state) => state.arrShoppingCategories
  );
  const arrShoppingItems = useShoppingStore((state) => state.arrShoppingItems);
  const strLanguage = useLanguageStore((state) => state.strLanguage);

  // persist
  useEffect(() => {
    // if (arrActiveShoppingItems.length === 0) {
    //   let data = JSON.parse(localStorage.getItem("shopping.activeItems"));
    //   //console.log("- local data -");
    //   //console.log(data);
    //   if (data.length > 0) setArrActiveShoppingItems(data);
    //   //console.log(arrActiveShoppingItems);
    // }
  });

  return (
    <Div>
      {arrActiveShoppingItems.map((item, index) => {
        let objItem = arrShoppingItems.find(
          (shopItem) => shopItem._id === item
        );

        let name = objItem.name[strLanguage];

        return objItem.category._ref === cat.category._id ? (
          <Button
            key={objItem._id} // nanoid() is doof!
            style={{ animationDelay: 0.003 * index + "s" }}
          >
            {name}
          </Button>
        ) : null;
      })}
    </Div>
  );
}
