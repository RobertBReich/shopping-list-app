import "./App.css";
import Searchbar from "./components/Searchbar";
import SearchResultList from "./components/SearchResultList";
import Headline from "./components/Headline";
import React, { useEffect } from "react";
import { useShoppingStore, useShoppingCategoriesStore } from "./useStore";

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

  return (
    <div className="App">
      <Headline />
      <div className="App-header">
        <Searchbar />
        <SearchResultList />
      </div>
    </div>
  );
}
export default App;
