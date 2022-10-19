/* Exercício 1
Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

Crie uma função que receba um número e retorne seu fatorial.

Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Com base nessas informações:

Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).

Dentro da função crie uma variável result, que será o retorno final da função.

Crie a lógica para retornar o fatorial de N!.

Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre-se de utilizar template literals nesse momento). */

const fact = number => number > 1 ? number * fact(number -1) : 1;
console.log(fact(10));

const word = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(word("Antonio foi ao banheiro e não sabemos o que aconteceu")); 