import {products} from '../data/products.js';
import {cart, addToCart} from '../data/cart.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  <div class="item-container">
    <img class="item-image" src="${product.image}">
    <p class="store">${product.store}</p>
    <p class="price">$${product.price}.00</p>

    <button class="add-to-cart-circle" data-product-id="${product.id}">
      <img class="add-to-cart-icon" src="images/icons/add-to-cart.png">
    </button>
  </div>  
  `;
});

document.querySelector('.item-grid').innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.cart-quantity')
    .innerHTML = cartQuantity;
}

document.querySelectorAll('.add-to-cart-circle')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;
      addToCart(productId);
      updateCartQuantity();
    });
  });