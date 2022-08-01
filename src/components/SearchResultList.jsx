import React from "react";
import useActiveShoppingItemsStore from "./zustände/useActiveShoppingItemsStore";
import useSearchStringStore from "./zustände/useSearchStringStore";
import useSearchResultStore from "./zustände/useSearchResultStore";
import useLanguageStore from "./zustände/useLanguageStore";
//import { nanoid } from "nanoid";
import styled from "styled-components";

// Search Result Button
const Button = styled.button`
  position: relative;
  font-size: 1.4rem;
  background-color: #fff;
  color: #000;
  padding: 10px 16px;
  margin: 4px 6px 4px 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      bottom: -8px;
    }
    100% {
      opacity: 1 !important;
      bottom: 0px;
    }
  }
`;

const ErrorMessage = styled.p`
  text-align: center;
`;

export default function SearchResultList() {
  const searchString = useSearchStringStore((state) => state.searchString);
  //const setSearchString = useStore((state) => state.setSearchString);
  const setArrActiveShoppingItems = useActiveShoppingItemsStore(
    (state) => state.setArrActiveShoppingItems
  );
  const strLanguage = useLanguageStore((state) => state.strLanguage);
  let errorMsg =
    strLanguage === "de"
      ? "Wir konnten nicht finden, wonach du gesucht hast. Das tut uns ehrlich leid. 😂 "
      : "Didn't find what you were looking.";

  let arrSearchResult =
    useSearchResultStore((state) => state.arrSearchResult) || [];
  let searchFailed =
    arrSearchResult.length === 0 && searchString.length !== 0 ? false : true;

  function handleButtonClick(event) {
    // category._ref
    // _id -> name.de
    // put _id into localStorage.
    setArrActiveShoppingItems(arrSearchResult[event.target.id]._id);
  }

  return (
    <section className="search-result-list">
      {searchFailed ? (
        arrSearchResult.map((items, index) => {
          // limiter
          //if (index >= 20) return null;
          return (
            <Button
              key={items._id}
              id={index}
              style={{ animationDelay: 0.003 * index + "s" }}
              onClick={handleButtonClick}
            >
              {items.name[strLanguage]}
            </Button>
          );
        })
      ) : (
        <ErrorMessage>{errorMsg}</ErrorMessage>
      )}
    </section>
  );
}
