import { getHomePageValue, getHomePageValueOfCar } from "../languages/methods.js";
import { refs } from "../refs/index.js";

const cars = [
  {
    id: "1",
    name: "Fiat",
    price: 120
  },
  {
    id: "2",
    name: "Toyota",
    price: 150
  },
  {
    id: "3",
    name: "BMW",
    price: 130
  },
  {
    id: "4",
    name: "VW",
    price: 140
  },
  {
    id: "5",
    name: "Peugeut",
    price: 155
  },
  {
    id: "6",
    name: "Honda",
    price: 115
  }
];

export const createMarkup = cars => {
  const carList = document.querySelector(".carList");
  carList.innerHTML = cars
    .map(
      car => `<li class="carListItem">
  <p>${getHomePageValueOfCar("name")}: ${car.name}</p>
<p>${getHomePageValueOfCar("price")}: ${car.price}</p>
  </li>`
    )
    .join("");
};

const getFilteredList = event => {
  const value = event.target.value;
  const list = cars.filter(car => car.name.toLowerCase().includes(value.toLowerCase()) || car.price <= Number(value));
  createMarkup(list);
};

export const createHomePage = () => {
  refs.main.innerHTML = ` 
  <div class= "homepage">
  <h2>${getHomePageValue("namePage")}<h2>
  <label>${getHomePageValue("filter")}:
  <input type='text' class= 'carFilter'/>
  </label>
  <ul class ='carList' >
  </ul>
  </div>`;

  createMarkup(cars);

  const carFilter = document.querySelector(".carFilter");

  carFilter.addEventListener("input", _.debounce(getFilteredList, 300));
};
