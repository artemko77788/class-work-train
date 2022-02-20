import { createHeader } from "../header/header.js";
import { getHomeSetingsValue } from "../languages/methods.js";
import { refs } from "../refs/index.js";
import { state } from "../state/state.js";

const languages = [
  {
    name: "English",
    value: "english"
  },
  {
    name: "Українська",
    value: "ukrainian"
  },
  {
    name: "Русский",
    value: "russian"
  }
];

const createOption = languageItem =>
  `<option value="${languageItem.value}" ${languageItem.value === state.settings.language ? "selected" : ""}>${
    languageItem.name
  }</option>`;

const createLanguageSelector = languages => {
  const option = languages.map(createOption).join("");
  return `<select name="languageSelect" "${state.settings.language}">
     ${option}
    </select>`;
};

export const createSettingsPage = () => {
  refs.main.innerHTML = `<h2>${getHomeSetingsValue("title")}</h2>
  <label>${getHomeSetingsValue("nameLanguageSwich")}:
  ${createLanguageSelector(languages)}
  <label>`;
  //поставим слушатель на select
  const selectRef = document.querySelector(`[name="languageSelect"]`);
  const getActiveLanguage = evt => {
    localStorage.setItem("language", JSON.stringify(evt.target.value));
    state.settings.language = evt.target.value;
    createLanguageSelector(languages);
    createHeader();
  };
  selectRef.addEventListener("change", getActiveLanguage);
};
