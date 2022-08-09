import React, { useState } from "react";
import {
  SelectContainer,
  SelectFlag,
  SelectLanguage,
  DropContainer,
} from "./Elements";
import { UkFlag } from "utils/assets.config";
import PopOver from "../PopOver";
import PopItem from "../PopOver/PopItem";
import { getLanguages } from "helpers/language.config";
const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    flag: UkFlag,
    title: "EN",
  });
  const languages = getLanguages(selectedLanguage.title);
  return (
    <PopOver>
      <SelectContainer>
        <SelectFlag src={selectedLanguage.flag} alt="flags" />
        <SelectLanguage>{selectedLanguage.title}</SelectLanguage>
      </SelectContainer>
      <PopItem>
        <DropContainer>
          {languages?.map((language) => (
            <SelectContainer
              onClick={() =>
                setSelectedLanguage({
                  flag: language.flag,
                  title: language.title,
                })
              }
              key={language.id}
            >
              <SelectFlag src={language.flag} alt="flag" />
              <SelectLanguage>{language.title}</SelectLanguage>
            </SelectContainer>
          ))}
        </DropContainer>
      </PopItem>
    </PopOver>
  );
};

export default LanguageSelector;
