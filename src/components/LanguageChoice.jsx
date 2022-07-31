import React from "react";
import styled from "styled-components";
import Headline from "./Headline";
import useLanguageStore from "./zustände/useLanguageStore";
import useSearchStringStore from "./zustände/useSearchStringStore";

const StyledDiv = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;

  justify-content: space-between;
  gap: 1rem;

  & button {
    padding: 8px;
    margin: 2px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.08);
    background-color: white;
  }
  & button:disabled {
    padding: 8px;
    margin: 2px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: none;
    background-color: #e8e8e8;
  }
`;

export default function LanguageChoice() {
  const strLanguage = useLanguageStore((state) => state.strLanguage);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  // const setSearchString = useSearchStringStore(
  //   (state) => state.setSearchString
  // );

  function changeToDe() {
    if (strLanguage === "en") setLanguage("de");
  }
  function changeToEn() {
    if (strLanguage === "de") setLanguage("en");
  }

  return (
    <StyledDiv>
      <Headline />
      <div>
        <button
          onClick={changeToDe}
          disabled={strLanguage === "de" ? true : false}
        >
          DE
        </button>
        <button
          onClick={changeToEn}
          disabled={strLanguage === "en" ? true : false}
        >
          EN
        </button>
      </div>
    </StyledDiv>
  );
}
