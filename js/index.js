// ITERATION 1
// For now, the only thing this function is doing is alerting Calculate Prices clicked! when the Calculate Prices button is clicked.
// Step 1: Inside updateSubtotal(), create two variables (we suggest naming them price and quantity).
console.log('EL JS ESTA CARGANDO CORRECTAMENTE');

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;

  const quantity = product.querySelector('.quantity input').value;

  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = price * quantity;

  const result = price * quantity;

  product.querySelector('.subtotal span').innerText = result

    return result

  }

// console.log(updateSubtotal());

//console.log('Calculating subtotal, yey!');

function calculateAll() {
  
  const productArray = document.querySelectorAll('.product');

let total = 0;

  productArray.forEach((product) => {

  const res = updateSubtotal(product);

  total += res;

});

document.querySelector("#total-value span").innerText = total;

  //console.log(total)
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
