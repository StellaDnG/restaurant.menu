document.addEventListener('DOMContentLoaded', () => {
  const cartItems = [];
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const clearCartButton = document.getElementById('clear-cart');

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.getAttribute('data-item');
      const price = parseInt(button.getAttribute('data-price'));
      cartItems.push({ item, price });
      updateCart();
    });
  });

  clearCartButton.addEventListener('click', () => {
    cartItems.length = 0;
    updateCart();
  });

  function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cartItems.forEach((cartItem, index) => {
      const li = document.createElement('li');
      li.textContent = `${cartItem.item} - NT$${cartItem.price}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = '移除';
      removeButton.style.backgroundColor = '#ff4444';
      removeButton.style.color = 'white';
      removeButton.style.border = 'none';
      removeButton.style.padding = '0.3rem 0.6rem';
      removeButton.style.borderRadius = '5px';
      removeButton.style.cursor = 'pointer';
      removeButton.addEventListener('click', () => {
        cartItems.splice(index, 1);
        updateCart();
      });
      li.appendChild(removeButton);
      cartItemsList.appendChild(li);
      total += cartItem.price;
    });

    cartTotal.textContent = `總計: NT$${total}`;
  }
});