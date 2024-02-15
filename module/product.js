import { renderProduct } from "./renderProduct.js";
import { param } from "./variable.js";

renderProduct();
// search

const inputSearch = document.querySelector("#searh_input");
const btn_search = document.querySelector("#searh_btn");
btn_search.addEventListener("click", () => {
  param.q = inputSearch.value;
  console.log(inputSearch.value);

  renderProduct();
});
