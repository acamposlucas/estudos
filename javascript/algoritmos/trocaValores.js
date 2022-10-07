/**
 * Dada duas variáveis K e J, sendo K = 3 e J = 5, escreva um código sem utilizar uma terceira variável capaz de trocar o valor entre elas.
 * Ao final:
 * K = 5;
 * J = 3;
 */

function trocaValores(a, b) {
	let k = a;
	let j = b;

	k = k + j;
	j = k - j;
	k = k - j;

	return [k, j];
}

const [k, j] = trocaValores(2, 6);

console.log(k);
console.log(j);
