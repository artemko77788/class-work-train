import { getHeaderNavigationValue } from "../languages/methods.js";
import { createAboutPage } from "../pages/about.js";
import { createAuthPage } from "../pages/auth.js";
import { createHomePage } from "../pages/home.js";
import { createSettingsPage } from "../pages/settings.js";
import { refs } from "../refs/index.js";

const items = [
  {
    name: "home",
    path: "/home"
  },
  {
    name: "about",
    path: "/about"
  },
  {
    name: "signin",
    path: "/signin"
  },
  {
    name: "signup",
    path: "/signup"
  },
  {
    name: "settings",
    path: "/settings"
  }
];

const createHeaderMarkup = () => {
  return items.reduce((acc, item) => {
    return (acc += `<li class= "navListItem" data-navlink='${item.path}'>${getHeaderNavigationValue(item.name)}</li>`);
  }, "");
  // items.map(el => `<li class= "navListItem>${el.name}</li>`).join('')
};

const setActiveLink = targetEl => {
  const activeElement = refs.navList.querySelector(".navListActive");

  activeElement.classList.remove("navListActive");
  targetEl.classList.add("navListActive");
};

export const createHeader = () => {
  refs.navList.innerHTML = createHeaderMarkup();
  refs.navList.firstElementChild.classList.add("navListActive");
  createHomePage();
  refs.navList.addEventListener("click", e => {
    if (e.target.nodeName !== "LI") return;

    setActiveLink(e.target);

    switch (e.target.dataset.navlink) {
      case "/about":
        createAboutPage();
        break;

      case "/signin":
        createAuthPage({
          name: "Sign in",
          path: "/signin"
        });
        break;

      case "/signup":
        createAuthPage({
          name: "Sign up",
          path: "/signup"
        });
        break;

      case "/settings":
        createSettingsPage();
        break;
      default:
        createHomePage();
    }
  });
};
