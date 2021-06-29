// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let total = 0;
  // ITERATION 2
  const productElements = document.querySelectorAll('.product');
  for (productElement of productElements) {
    let subtotal = updateSubtotal(productElement);
    total += subtotal;
  }

  // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.parentNode.removeChild(
    target.parentNode.parentNode
  );
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll('tfoot input');
  const product = inputs[0].value;
  const price = Number(inputs[1].value).toFixed(2);

  const productElement = document.createElement('tr');
  productElement.classList.add('product');

  const nameElement = document.createElement('td');
  nameElement.classList.add('name');
  const nameTextElement = document.createElement('span');
  nameTextElement.innerText = product;
  nameElement.appendChild(nameTextElement);

  const priceElement = document.createElement('td');
  priceElement.classList.add('price');
  const priceTextElement = document.createElement('span');
  priceTextElement.innerText = `${price}`;
  const priceCurrency = document.createTextNode('$');
  priceElement.appendChild(priceCurrency);
  priceElement.appendChild(priceTextElement);

  const quantityElement = document.createElement('td');
  quantityElement.classList.add('quantity');
  const quantityInputElement = document.createElement('input');
  quantityInputElement.setAttribute('type', 'number');
  quantityInputElement.setAttribute('value', '0');
  quantityInputElement.setAttribute('min', '0');
  quantityInputElement.setAttribute('placeholder', 'Quantity');
  quantityElement.appendChild(quantityInputElement);

  const subtotalElement = document.createElement('td');
  subtotalElement.classList.add('subtotal');
  const subtotalTextElement = document.createElement('span');
  subtotalTextElement.innerText = 0;
  const subtotalCurrency = document.createTextNode('$');
  subtotalElement.appendChild(subtotalCurrency);
  subtotalElement.appendChild(subtotalTextElement);

  const buttonWrapperElement = document.createElement('td');
  buttonWrapperElement.classList.add('action');

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('btn');
  buttonElement.classList.add('btn-remove');
  buttonElement.innerText = 'Remove';

  buttonElement.addEventListener('click', removeProduct);

  buttonWrapperElement.appendChild(buttonElement);
  productElement.appendChild(nameElement);
  productElement.appendChild(priceElement);
  productElement.appendChild(quantityElement);
  productElement.appendChild(subtotalElement);
  productElement.appendChild(buttonWrapperElement);

  const productTable = document.querySelector('tbody');
  productTable.appendChild(productElement);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteButtons = document.querySelectorAll('.btn-remove');
  for (btn of deleteButtons) {
    btn.addEventListener('click', removeProduct);
  }

  const newProductButton = document.querySelector('#create');
  newProductButton.addEventListener('click', createProduct);
});
