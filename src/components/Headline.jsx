import React from "react";
import { useStore } from "zustand";
import styled from "styled-components";

// Searchbar
const H1 = styled.h1`
  min-width: 100%;
  padding: 4px 0px;
  margin: 24px 0px 0px;

  /* font-family: Georgia, Times, "Times New Roman", serif; */
  font-weight: 300;
  /* font-family: Calibri, "Trebuchet MS", sans-serif; */
  font-family: Georgia, "Times New Roman", Times, serif;

  font-size: 32px;

  /* ... */
`;

export default function Headline() {
  return (
    <div>
      <H1>Einkaufsliste</H1>
    </div>
  );
}
