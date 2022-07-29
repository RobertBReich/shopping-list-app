import { useShoppingStore, useStore } from "../useStore";
import { useSearchResultStore } from "../useSearchResultStore";
import { search } from "fast-fuzzy";
import SearchResultList from "./SearchResultList";

export default function Searchbar() {
  const arrShoppingItems = useShoppingStore((state) => state.arrShoppingItems);
  const setArrSearchResult = useSearchResultStore(
    (state) => state.setArrSearchResult
  );

  function handleChange(event) {
    event.preventDefault();
    async function fuzzySearch() {
      let searchResult = await search(event.target.value, arrShoppingItems, {
        keySelector: (obj) => obj.name.de,
      });

      return searchResult;
    }
    //arrSearchResult = searchResult;
    async function successCallback(result) {
      console.log(result);
      setArrSearchResult(result);
    }
    function failureCallback() {
      console.error("- failureCallback -");
    }

    fuzzySearch().then(successCallback, failureCallback);
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Tippe um zu suchen"
        aria-labelledby="search-title"
        onChange={handleChange}
      ></input>
    </div>
  );
}
