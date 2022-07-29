let button = document.getElementById('button');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

function somaNumeros(numero1, numero2) {
	if (typeof numero1 === 'number' && typeof numero2 === 'number') {
		return numero1 + numero2;
	} else {
		return Number(numero1) + Number(numero2);
	}
}

button.addEventListener('click', () => {
	console.log(somaNumeros(input1.value, input2.value));
})