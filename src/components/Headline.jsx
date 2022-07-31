import React from "react";
import styled from "styled-components";
import useLanguageStore from "./zustände/useLanguageStore";

// Searchbar
const H1 = styled.h1`
  /* min-width: 100%;
  padding: 4px 0px;
  margin: 24px 0px 0px; */
  /* font-family: Georgia, Times, "Times New Roman", serif; */
  /* font-family: Calibri, "Trebuchet MS", sans-serif; */
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 300;
  font-size: 32px;

  /* ... */
`;

export default function Headline() {
  const strLanguage = useLanguageStore((state) => state.strLanguage);
  return (
    <div>
      {strLanguage === "de" ? <H1>Einkaufsliste</H1> : <H1>Shoppinglist</H1>}
    </div>
  );
}
