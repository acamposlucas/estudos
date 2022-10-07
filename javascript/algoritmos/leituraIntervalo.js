/**
 * Escreva um algoritmo que leia 80 números e ao final informar quantos números estão no invervalo entre 10 e 150
 */
let array = [];
for (let i = 0; i < 80; i++) {
	array.push(i);
}

function intervalo(arr, intervaloX, intervaloY) {
	return arr.filter((n) => n > intervaloX && n < intervaloY).length;
}

console.log(intervalo(array, 10, 150));
