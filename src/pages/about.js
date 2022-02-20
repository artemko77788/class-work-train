import { getHomeAboutValue } from "../languages/methods.js";
import { refs } from "../refs/index.js";

export const createAboutPage = () => {
  refs.main.innerHTML = `<h2>${getHomeAboutValue("text")}<h2>`;
};
