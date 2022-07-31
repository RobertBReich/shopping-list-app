import React, { useEffect } from "react";
import useActiveShoppingItemsStore from "./zustände/useActiveShoppingItemsStore";
import useShoppingStore from "./zustände/useShoppingStore";
import useShoppingCategoriesStore from "./zustände/useShoppingCategoriesStore";
import useLanguageStore from "./zustände/useLanguageStore";
import SelectedItems from "./SelectedItems";
import { nanoid } from "nanoid";
import styled from "styled-components";

const Hazwo = styled.h2`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 300;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.1);
  user-select: none;
`;

export default function ShoppingList() {
  const arrActiveShoppingItems = useActiveShoppingItemsStore(
    (state) => state.arrActiveShoppingItems
  );
  const arrShoppingCategories = useShoppingCategoriesStore(
    (state) => state.arrShoppingCategories
  );
  const arrShoppingItems = useShoppingStore((state) => state.arrShoppingItems);
  const strLanguage = useLanguageStore((state) => state.strLanguage);

  // make category divs

  // get active list
  // for each, get id

  let icon = "→";
  useEffect(() => {
    //
  }, [arrShoppingCategories]);

  arrActiveShoppingItems.forEach((element) => {
    let data = arrShoppingItems.filter((result) => {
      return element === result._id;
    });
    //console.log(data);
  });

  return (
    <>
      {
        // make category divs

        arrShoppingCategories.map((category, index) => {
          return (
            <article key={nanoid()}>
              <Hazwo>
                <span>{icon}</span> {category.name[strLanguage]}
              </Hazwo>

              <SelectedItems category={category} />
            </article>
          );
        })
      }
    </>
  );
}
