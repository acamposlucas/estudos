/**
 * Elabore um algoritmo que leia dois vetores contendo a nota de 10 alunos. O primeiro vetor deve conter as notas do 1o bimestre e o segundo vetor deve conter as notas do 2o bimestre. Em seguida, armazene em um terceiro vetor a media das notas de cada aluno. Sabendo-se que a média para aprovação é igual a 6, imprima o total de alunos que obtiveram nota acima da média e o vetor resultante de notas.
 */

const bim1 = [3, 9, 1];
const bim2 = [2, 9, 3];

function imprimeAcimaDaMedia(arr1, arr2) {
	let resultado = [];
	for (let i = 0; i < arr1.length; i++) {
		let nota = arr1[i] + arr2[i] / 2;
		if (nota >= 6) {
			resultado.push(nota);
		}
	}

	return `Total de alunos acima da média: ${resultado.length}\n${resultado}`;
}

console.log(imprimeAcimaDaMedia(bim1, bim2));
