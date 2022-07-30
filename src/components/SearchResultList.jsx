import React, { useEffect } from "react";
import useStore from "../useStore";
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
  animation: fadeIn 0.5s;

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

const Section = styled.section`
  /* löppt noch nicht */
  @for $i from 1 through 120 {
    button:nth-child($i) {
      animation-delay: #{$i * 0.1}s;
    }
  }
`;

export default function SearchResultList() {
  let searchString = useStore((state) => state.searchString);
  let arrSearchResult =
    useSearchResultStore((state) => state.arrSearchResult) || [];

  return (
    <Section className="search-result-list">
      {arrSearchResult.map((items) => {
        return <Button key={nanoid()}>{items.name.de}</Button>;
      })}
    </Section>
  );
}
