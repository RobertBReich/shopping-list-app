import "./App.css";
import Searchbar from "./components/Searchbar";
import SearchResultList from "./components/SearchResultList";
import Headline from "./components/Headline";
import React, { useEffect } from "react";
import { useShoppingStore, useShoppingCategoriesStore } from "./useStore";
// import useSearchResultStore from "./useSearchResultStore";

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
  // const arrSearchResult = useSearchResultStore(
  //   (state) => state.arrSearchResult
  // );

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
      <div className="App-header">
        <Headline />
        <Searchbar />
        <SearchResultList />
      </div>
    </div>
  );
}
export default App;
