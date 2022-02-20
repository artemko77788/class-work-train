import { getHomeAuthValue } from "../languages/methods.js";
import { refs } from "../refs/index.js";

const createAuthForm = name => {
  return `<form name ='authForm'>
     <label >${getHomeAuthValue("email")}
       <input type ="email" name="email"></input></label>
      <label>${getHomeAuthValue("password")}
        <input type="password" name="password"></input></label>
      <button type= "submit">${name}</button>
   </form>`;
};

export const createAuthPage = curentPage => {
  refs.main.innerHTML = createAuthForm(curentPage.name);
  const user = {
    email: "",
    password: ""
  };

  const authForm = document.forms.authForm;
  authForm.addEventListener("input", e => (user[e.target.name] = e.target.value));
  authForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log(user);
  });
};
