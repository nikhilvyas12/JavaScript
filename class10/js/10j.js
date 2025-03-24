let calculation = localStorage.getItem('calculation') || '';
calcTotal();

function updateCalculation(value) {
  calculation += value;
  calcTotal();
  //console.log(calculation);
  localStorage.setItem('calculation', calculation);
}

function calcTotal() {
  document.querySelector('.js-result-calc').innerHTML = calculation;
}

