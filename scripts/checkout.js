
import {cart, removeFromCart} from '../../data/cart.js';

let cartSummaryHTML = '';


  cart.forEach((cartItem) => {
    cartSummaryHTML += `
    <div class="cart-item">
      <img class="item-image" src="${cartItem.image}">
      <div class="cart-item-right">
          <img class="trash" src="images/icons/trash.png">
          <div>
              <p class="store">${cartItem.store}</p>
              <p class="price">$${cartItem.price}.00</p>
          </div>
      </div>
    </div>
    `;
  });


document.querySelector('.cart-left').innerHTML = cartSummaryHTML;