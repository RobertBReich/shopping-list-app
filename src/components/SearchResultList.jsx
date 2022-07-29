import React, { useEffect } from "react";
import useStore from "../useStore";
import useSearchResultStore from "../useSearchResultStore";
import { nanoid } from "nanoid";
import styled from "styled-components";

export default function SearchResultList() {
  let searchString = useStore((state) => state.searchString);
  let arrSearchResult =
    useSearchResultStore((state) => state.arrSearchResult) || [];

  return (
    <div className="buttonlist">
      {arrSearchResult.map((items) => {
        return <button key={nanoid()}>{items.name.de}</button>;
      })}
    </div>
  );
}
