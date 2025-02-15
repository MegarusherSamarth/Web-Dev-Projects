const curE1_one = document.getElementById("currency-one");
const curE1_two = document.getElementById("currency-two");
const amtE1_one = document.getElementById("amount-one");
const amtE1_two = document.getElementById("amount-two");
const rateE1 = document.getElementById("rate");

const swap = document.getElementById("swap");

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = curE1_one.value;
  const currency_two = curE1_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rateE1.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amtE1_two.value = (amtE1_one.value * rate).toFixed(2);
    });
}

// Event Listners
curE1_one.addEventListener("change", calculate);
amtE1_one.addEventListener("input", calculate);
curE1_two.addEventListener("change", calculate);
amtE1_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = curE1_one.value;
  curE1_one.value = curE1_two.vvalue;
  curE1_two.value = temp;
  calculate();
});

calculate();
