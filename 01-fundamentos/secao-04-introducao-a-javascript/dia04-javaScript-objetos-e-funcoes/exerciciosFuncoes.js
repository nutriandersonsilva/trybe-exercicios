// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function polindromo(palavra) {
    for (i in palavra) {
        if (palavra[i] != palavra[(palavra.length - 1) - i]) {
            return false;
        }
    }
    return true;
}
console.log(polindromo('arara'));
console.log(polindromo('desenvolvimento'));
console.log('');
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function higher(numbers) {
    let index = 0;
    for (let i in numbers) {
        if (numbers[index] < numbers[i]) {
            index = i;

        }
    }
    return index;
}
console.log(higher([2, 3, 6, 7, 10, 1]));
console.log('');
//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function higher(numbers) {
    let index = 0;
    for (let i in numbers) {
        if (numbers[index] > numbers[i]) {
            index = i;
        }
    }
    return index;
}
console.log(higher([2, 4, 6, 7, 10, 0, -3]));
console.log('');
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function bigName(word) {
    let bigName = word[0];
    for (let i in word) {
        if (bigName.length < word[i].length) {
            bigName = word[i]
        }
    }
    return bigName
}
console.log(bigName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log('');
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function counter(repetition) {
    let counter = 0;
    let number = repetition[0];

    for (let i = 0; i > repetition.length; i++) {
        if (  number === repetition[i]){
            repetition[i] =  number  ;
        }
    }
    for (let i = 0; i < repetition.length; i++) {
        if (number === repetition[i]) {
            counter++;
        }
    }
    return number;
}
console.log(counter([2, 3, 2, 5, 8, 2, 3]));
console.log('');
//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function sum (numbers){
    let total = 0;
    for (let i = 0; i <= numbers; i++){
        total = i + total;
    }
    return total;
}
console.log(sum(5))
console.log('');
//crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word
function check(word, finalWord) {
    word = word.split('');
    finalWord = finalWord.split('');
    let negative = true;
    for ( let i = 0; i < finalWord.length; i++){
        if (word[word.length - finalWord.length + i] != finalWord[i])
        negative = false;
    }
    return negative;
}
console.log(check('trybe', 'be')); 
console.log(check('joaofernando', 'fernan')); 
console.log('');
