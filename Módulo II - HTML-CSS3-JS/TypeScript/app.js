"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function adicionarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
