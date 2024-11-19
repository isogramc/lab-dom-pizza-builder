// Write your Pizza Builder JavaScript in this file.

const btnPepperoni = document.querySelector('.btn-pepperoni');
const btnMushrooms = document.querySelector('.btn-mushrooms');
const btnGreenPeppers = document.querySelector('.btn-green-peppers');
const btnSauce = document.querySelector('.btn-sauce');
const btnCrust = document.querySelector('.btn-crust');

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

window.onload = function (){
  resetButtons();
  renderButtons();
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((onePep) => {
    if (state.mushrooms) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce')
  if(state.whiteSauce){
    sauce.classList.add("sauce-white")
  }
  else {
    sauce.classList.remove("sauce-white")
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust')
  //crust.classList.toggle("crust-gluten-free");
  if(state.glutenFreeCrust){
   crust.classList.add("crust-gluten-free")
  }
  else {
   crust.classList.remove("crust-gluten-free")
  }
}

function resetButtons(){
  btnCrust.classList.remove("active");
  btnPepperoni.classList.remove("active");
  btnMushrooms.classList.remove("active");
  btnGreenPeppers.classList.remove("active");
  btnSauce.classList.remove("active");
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //on first load perform reset
    // button.classList.toggle("active");
    if(state.glutenFreeCrust){
      btnCrust.classList.add("active");
    }else{
      btnCrust.classList.remove("active");
    }
    if(state.pepperoni){
      btnPepperoni.classList.add("active");
    }else{
      btnPepperoni.classList.remove("active");
    }
    if(state.mushrooms){
      btnMushrooms.classList.add("active");
    }else{
      btnMushrooms.classList.remove("active");
    }
    if(state.greenPeppers){
      btnGreenPeppers.classList.add("active");
    }else{
      btnGreenPeppers.classList.remove("active")
    }
    if(state.whiteSauce){
      btnSauce.classList.add("active");
    }else{
      btnSauce.classList.remove("active");
    }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const ulElement = document.querySelector("aside ul")
  ulElement.innerHTML = ''; // emptying the <ul>
  let itemPrice = 0;

  for(let ingredient in state){
    if(state[ingredient]){
      ulElement.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
      itemPrice += ingredients[ingredient].price;
    }
  }

  ulElement.nextElementSibling.innerHTML = `$${basePrice + itemPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
