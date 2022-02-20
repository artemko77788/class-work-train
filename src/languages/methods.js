import { languages } from "../languages/index.js";
import { state } from "../state/state.js";

export const getHeaderNavigationValue = name => {
  return languages[state.settings.language].header.navigation[name];
};
export const getHomePageValue = value => {
  return languages[state.settings.language].homePage[value];
};
export const getHomePageValueOfCar = value => {
  return languages[state.settings.language].homePage.carsDescription[value];
};
export const getHomeAboutValue = value => {
  return languages[state.settings.language].about[value];
};
export const getHomeAuthValue = value => {
  return languages[state.settings.language].auth[value];
};

export const getHomeSetingsValue = value => {
  return languages[state.settings.language].setings[value];
};
