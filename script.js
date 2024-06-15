let Celcius = document.getElementById("Celcius");
let Fahrenheit = document.getElementById("Fahrenheit");
let Kelvin = document.getElementById("Kelvin");

function celconvertor() {
    let f = (parseFloat(Celcius.value) * 9) / 5 + 32;
    Fahrenheit.value = parseFloat(f.toFixed(2));
    let k = (parseFloat(Celcius.value) + 273.15);
    Kelvin.value = parseFloat(k.toFixed(2));
}
function fahconvertor() {
    let c = (parseFloat(Fahrenheit.value) - 32) * 5 / 9;
    Celcius.value = parseFloat(c.toFixed(2));
    let k1 = (parseFloat(Fahrenheit.value - 32) * 5 / 9 + 273.15);
    Kelvin.value = parseFloat(k1.toFixed(2));
}
function kelconvertor() {
    let c1 = (parseFloat(Kelvin.value) - 273.15);
    Celcius.value = parseFloat(c1.toFixed(2));
    let f1 = (parseFloat(Kelvin.value - 273.15) * 9 / 5 + 32);
    Fahrenheit.value = parseFloat(f1.toFixed(2));
}