const elemento = document.getElementById("menos");
elemento.addEventListener("click", decrement);

const elementa = document.getElementById("mais");
elementa.addEventListener("click", increment);

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if (currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    } else {
        console.log("O botão de acrescer não funciona para valores maiores que 10")
    }

    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
}