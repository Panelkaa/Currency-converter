let availbaleCurrency = 'RUB'; // default value
let desiredCurrency = 'USD';
let availableCurrencyAmount = 1; // default value
let showCurrency = false;

const leftInput = document.querySelector('.left-value');
const rightInput = document.querySelector('.right-value');
const leftDescription = document.querySelector('.from-description');
const rightDescription = document.querySelector('.in-description');
const availableCurrencies = document.querySelectorAll('.availbaleCurrency');
const desiredCurrencies = document.querySelectorAll('.desiredCurrency');

leftInput.value = availableCurrencyAmount;

availableCurrencies[0].style.backgroundColor = '#833AE0';
desiredCurrencies[1].style.backgroundColor = '#833AE0';

availableCurrencies.forEach((currency) => {
  availableCurrencies.forEach((c) => {
  currency.addEventListener('click', () => {
      c.style.background = (c === currency) ? '#833AE0' : 'white'; // make selected violet, others - white
      availbaleCurrency = currency.querySelector('.left-vulue-text').innerText
      console.log(availbaleCurrency)
    })
    
  });
});

desiredCurrencies.forEach((currency) => {
  desiredCurrencies.forEach((c) => {
  currency.addEventListener('click', () => {
      c.style.background = (c === currency) ? '#833AE0' : 'white';
      desiredCurrency = currency.querySelector('.right-vulue-text').innerText 
      console.log(desiredCurrency)
    })
  });
  
});

leftInput.oninput = function() {
  console.log(`${availbaleCurrency} один ${desiredCurrency} dnjhjq`)
  let course = fetch(`https://api.exchangerate.host/latest?base=${availbaleCurrency}&symbols=${desiredCurrency}`)
  .then (course => course.json())
  .then(data => {        
    leftDescription.innerHTML = `1 ${availbaleCurrency} = ${data.rates[desiredCurrency]} ${desiredCurrency}`;
    availableCurrencyAmount = leftInput.value;
    rightInput.value = (parseFloat(leftInput.value) * data.rates[desiredCurrency]).toFixed(2);
  });
  let courseREV = fetch(`https://api.exchangerate.host/latest?base=${desiredCurrency}&symbols=${availbaleCurrency}`)
  .then(courseREV => courseREV.json())
  .then (data => {
    rightDescription.innerHTML = `1 ${desiredCurrency} = ${data.rates[availbaleCurrency]} ${availbaleCurrency}`;
  })
  
} 
  