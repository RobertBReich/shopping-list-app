import useShoppingStore from "./zustände/useShoppingStore";
import useSearchResultStore from "./zustände/useSearchResultStore";
import useLanguageStore from "./zustände/useLanguageStore";
import useSearchStringStore from "./zustände/useSearchStringStore";
import { search } from "fast-fuzzy";
import styled from "styled-components";

// Styles
const Input = styled.input`
  min-width: 100%;
  padding: 12px 16px 12px 40px;
  font-size: 1.5rem;
  margin: 16px auto;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.15);
`;
const Section = styled.section`
  width: 100%;
  position: relative;
`;

export default function Searchbar() {
  const arrShoppingItems = useShoppingStore((state) => state.arrShoppingItems);
  const setSearchString = useSearchStringStore(
    (state) => state.setSearchString
  );
  const setArrSearchResult = useSearchResultStore(
    (state) => state.setArrSearchResult
  );
  const strLanguage = useLanguageStore((state) => state.strLanguage);

  function handleChange(event) {
    event.preventDefault();

    setSearchString(event.target.value);

    async function fuzzySearch() {
      let searchResult = await search(event.target.value, arrShoppingItems, {
        keySelector: (obj) => obj.name[strLanguage],
      });

      return searchResult;
    }
    //arrSearchResult = searchResult;
    async function successCallback(result) {
      setArrSearchResult(result);
    }
    function failureCallback() {
      console.error("- failureCallback -");
    }

    fuzzySearch().then(successCallback, failureCallback);
  }

  let placeholder =
    strLanguage === "de" ? " Tippe um zu suchen..." : " Type to search...";

  return (
    <Section>
      <Input
        type="search"
        placeholder={placeholder}
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
