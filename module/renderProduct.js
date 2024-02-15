import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./const.js";
import { param } from "./variable.js";

export const renderProduct = () => {
  const API = `${API_PRODUCT}/search?q=${param.q}`;
  fetchApi(API).then((data) => {
    // console.log(data);

    console.log(param.q);
    console.log(API);
    let htmls = data.products.map((item) => {
      return `
      
      <div class="product__item">
        <div class="product__img">
          <img src="${item.thumbnail}" alt="${item.description}">
         </div>
      <div class="product__desc">
      <div class="product__title">${item.title}</div>
     
      <div class="product__price">Price : ${item.price}$</div>
      <div class="product__stock">Còn lại : ${item.stock} sản phẩm </div>
     
      </div>
      <div class="product__discountPercentage"> - ${item.discountPercentage}%</div>
     </div>
     `;
    });
    // console.log(htmls); // data dang la mang cac string
    // convert sang string
    htmls = htmls.join(""); // khong ngan cach giua cac ki tu
    // console.log(htmls);
    const product = document.querySelector(".products__list");
    product.innerHTML = htmls;
  });
};
