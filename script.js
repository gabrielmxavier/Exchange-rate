

const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            const rate = (data.rates[currency_two]).toFixed(3);

            rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event listeners

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;

    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;

    calculate();
});

calculate();

// Mobile menu

var inicio = true;

function mobileBtn() {

    if (inicio) {

        var closeBtn = document.querySelector('.menu');
        closeBtn.className = 'openBtn';
        closeBtn.innerHTML = '<span class="iconify" data-inline="false" data-icon="ic:round-menu"></span>';
        document.getElementById('display-mob').style.height = '0';
        inicio = false;
        

    } else {
        

        var burgerBtn = document.querySelector('.openBtn');
        burgerBtn.className = 'menu';
        burgerBtn.innerHTML = '<span class="iconify" data-inline="false" data-icon="ic:round-close"></span>'
        document.getElementById('display-mob').style.height = '120px';
        inicio = true;

    }
}

mobileBtn();



