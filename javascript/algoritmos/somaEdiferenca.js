/**
 * Escreva um algoritmo que recebe 2 números inteiros do usuário e retorna  soma e a diferença dos números.
 */

function somaEdiferenca(x, y) {
	const soma = x + y;
	const diferenca = x - y;

	return {
		soma,
		diferenca,
	};
}

console.log(somaEdiferenca(3, 4));
