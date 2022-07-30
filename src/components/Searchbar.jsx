import { useShoppingStore, useStore } from "../useStore";
import { useSearchResultStore } from "../useSearchResultStore";
import { search } from "fast-fuzzy";
import SearchResultList from "./SearchResultList";
import styled from "styled-components";

// Searchbar
const Input = styled.input`
  min-width: 100%;
  padding: 12px 16px 12px 40px;
  font-size: 1.5rem;
  margin: 16px auto;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.15);
  /* ... */
`;

const Section = styled.section`
  width: 100%;
  position: relative;
`;

export default function Searchbar() {
  const arrShoppingItems = useShoppingStore((state) => state.arrShoppingItems);
  const setSearchString = useStore((state) => state.setSearchString);
  const setArrSearchResult = useSearchResultStore(
    (state) => state.setArrSearchResult
  );

  function handleChange(event) {
    event.preventDefault();
    console.log("seaStr: " + event.target.value);
    setSearchString(event.target.value);

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
    <Section>
      <Input
        type="search"
        placeholder=" Tippe um zu suchen"
        aria-labelledby="search-title"
        onChange={handleChange}
      ></Input>
      <button
        type="submit"
        title="Submit your search query."
        className="sbx-custom__submit"
      ></button>
    </Section>
  );
}
