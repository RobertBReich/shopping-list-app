import "./App.css";
import Searchbar from "./components/Searchbar";
import SearchResultList from "./components/SearchResultList";
import React, { useEffect } from "react";
import useShoppingStore from "./components/zustände/useShoppingStore";
import useShoppingCategoriesStore from "./components/zustände/useShoppingCategoriesStore";
import useLanguageStore from "./components/zustände/useLanguageStore";
import ShoppingList from "./components/ShoppingList";
import LanguageChoice from "./components/LanguageChoice";

function App() {
  const strShoppingItemsURL = "https://fetch-me.vercel.app/api/shopping/items";
  const strShoppingCategoriesURL =
    "https://fetch-me.vercel.app/api/shopping/categories";

  const setArrShoppingItems = useShoppingStore(
    (state) => state.setArrShoppingItems
  );
  const setArrShoppingCategories = useShoppingCategoriesStore(
    (state) => state.setArrShoppingCategories
  );
  const strLanguage = useLanguageStore((state) => state.strLanguage);

  async function fetchItems(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data.data;
  }

  useEffect(() => {
    async function getAllData() {
      const arrShoppingItems = await fetchItems(strShoppingItemsURL);
      const arrShoppingCategories = await fetchItems(strShoppingCategoriesURL);

      setArrShoppingItems(arrShoppingItems);
      setArrShoppingCategories(arrShoppingCategories);
    }
    getAllData();
  });

  let buyMsg =
    strLanguage === "de"
      ? "Was willst Du einkaufen?"
      : "What do you want to buy?";

  return (
    <div className="App">
      <LanguageChoice />
      <div className="App-header">
        <ShoppingList />
        <h3>{buyMsg}</h3>
        <Searchbar />
        <SearchResultList />
      </div>
    </div>
  );
}
export default App;
