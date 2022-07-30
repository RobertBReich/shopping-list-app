import React, { useEffect } from "react";
import { useStore } from "../useStore";
import useSearchResultStore from "../useSearchResultStore";
import { nanoid } from "nanoid";
import styled from "styled-components";

// Search Result Button
const Button = styled.button`
  position: relative;
  font-size: 1.4rem;
  background-color: #fff;
  color: #000;
  padding: 10px 16px;
  margin: 4px 8px;
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
      opacity: 1;
      bottom: 0px;
    }
  }
`;

export default function SearchResultList() {
  const searchString = useStore((state) => state.searchString);
  const setSearchString = useStore((state) => state.setSearchString);
  let arrSearchResult =
    useSearchResultStore((state) => state.arrSearchResult) || [];
  let searchFailed =
    arrSearchResult.length === 0 && searchString.length !== 0 ? false : true;

  console.log(
    arrSearchResult.length +
      " sf: " +
      searchString.length +
      " : " +
      searchFailed
  );
  return (
    <section className="search-result-list">
      {searchFailed ? (
        arrSearchResult.map((items, index) => {
          return (
            <Button
              key={nanoid()}
              style={{ animationDelay: 0.003 * index + "s" }}
            >
              {items.name.de}
            </Button>
          );
        })
      ) : (
        <p>
          Wir konnten nicht finden, wonach du gesucht hast. Das tut uns ehrlich
          leid. 😂
        </p>
      )}
    </section>
  );
}
