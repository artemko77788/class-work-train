import { createAboutPage } from "../pages/about.js";
import { createAuthPage } from "../pages/auth.js";
import { createHomePage } from "../pages/home.js";
import { refs } from "../refs/index.js";

const items = [
  {
    name: "Home",
    path: "/home"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Sign in",
    path: "/signin"
  },
  {
    name: "Sign up",
    path: "/signup"
  }
];

const createHeaderMarkup = () => {
  return items.reduce((acc, { name, path }) => {
    return (acc += `<li class= "navListItem" data-navlink='${path}'>${name}</li>`);
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
    if (e.target.dataset.navlink === "/home") createHomePage();
    if (e.target.dataset.navlink === "/about") createAboutPage();
    if (e.target.dataset.navlink === "/signin")
      createAuthPage({
        name: "Sign in",
        path: "/signin"
      });
    if (e.target.dataset.navlink === "/signup")
      createAuthPage({
        name: "Sign up",
        path: "/signup"
      });
  });
};
