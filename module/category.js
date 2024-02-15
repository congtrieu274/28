import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./const.js";
// truyen api product vao ham fetchApi
fetchApi(API_CATEGORY).then((data) => {
  console.log(data);
  let htmls = data.map((item) => {
    return `
      <div class="category__item">${item}</div>
   `;
  });
  console.log(htmls); // data dang la mang cac string
  // convert sang string
  htmls = htmls.join(""); // khong ngan cach giua cac ki tu
  console.log(htmls);
  const category = document.querySelector(".category__list");
  category.innerHTML = htmls;
});
