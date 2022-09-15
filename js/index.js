const items = document.getElementsByClassName('item');
const amount = document.getElementById('amount');
const clear = document.getElementById('clear');
const checkout = document.getElementById('checkout');
const remove = document.getElementById('remove');

let cart = [];

for (let item of items) {
  item.addEventListener('click', function () {
    cart.push(item.textContent);
    amount.textContent = cart.length;
  });
}

// * Clear should remove all elements from cart
clear.addEventListener('click', function () {
  cart = [];
  amount.textContent = cart.length;
});

// * Checkout should print in console the cart contents
checkout.addEventListener('click', function () {
  console.log(cart);
});

// * Remove Last Item should remove last item from cart
remove.addEventListener('click', function () {
  cart.pop();
  amount.textContent = cart.length;
  console.log(cart);
});
