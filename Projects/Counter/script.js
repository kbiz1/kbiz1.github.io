const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');

function plusButtonFunc() {
    var inputValue = document.getElementById('NumInput').innerHTML;
    inputValue++;
    document.getElementById('NumInput').innerHTML = inputValue;
}

function minusButtonFunc() {
    var inputValue = document.getElementById('NumInput').innerHTML;
        inputValue--;
        document.getElementById('NumInput').innerHTML = inputValue;
}