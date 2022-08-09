import { UkFlag, SpainFlag, FranceFlag } from "utils/assets.config";
const languages = [
  {
    id: 201,
    title: "EN",
    flag: UkFlag,
  },
  {
    id: 202,
    title: "ESP",
    flag: SpainFlag,
  },
  {
    id: 203,
    title: "FR",
    flag: FranceFlag,
  },
];

export const getLanguages = (selectedLanguage) => {
  return languages.filter((language) => language.title !== selectedLanguage);
};
