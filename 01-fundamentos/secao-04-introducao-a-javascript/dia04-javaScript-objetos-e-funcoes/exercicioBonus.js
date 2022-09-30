//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
const numbers = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
};
function roman(number) {
    number = number.toLowerCase();
    const len = number.length;
    let soma = numbers[number[len - 1]];
    let atual = numbers[number[len - 1]];

    for (let i = 2; i <= len; i++) {
        const prox = numbers[number[len - i]];

        if (atual <= prox) {
            soma += prox;
        } else {
            soma -= prox;
        }

        atual = prox;
    }

    return soma;
}

console.log(roman('MMXVIII'));
console.log(roman('VI'));
console.log(roman('IV'));
console.log('');
// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
//Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.
const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
    const res = [];

    for (let i = 0; i < vector.length; i++) {
        const numbers = vector[i];
        for (let iSub = 0; iSub < numbers.length; iSub ++) {
            const current = numbers[iSub];

            if ((current % 2) === 0) {
                res.push(current);
            }
        }
    }

    return res;
}
console.log(arrayOfNumbers(vector));
console.log('');
//A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

//Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

const res = {};

for (let i = 0; i < basket.length; i++) {
    const fruit = basket[i];
    if (!res[fruit]) res[fruit] = 0;
    res[fruit] += 1;
}

const summaries = [];
// parte de baixo tive dificuldade de fazer. 
for (fruit in res) {
    let msg = `${res[fruit]} ${fruit}`;
    if (res[fruit] > 1) msg += 's';
    summaries.push(msg);
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);
console.log('');
// Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.
//Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.
let moradores = {
    blocoUm: [
        {
            nome: 'Luiza',
            sobrenome: 'Guimarães',
            andar: 10,
            apartamento: 1005,
        },
        {
            nome: 'William',
            sobrenome: 'Albuquerque',
            andar: 5,
            apartamento: 502,
        },
    ],
    blocoDois: [
        {
            nome: 'Murilo',
            sobrenome: 'Ferraz',
            andar: 8,
            apartamento: 804,
        },
        {
            nome: 'Zoey',
            sobrenome: 'Brooks',
            andar: 1,
            apartamento: 101,
        },
    ],
};
for (let i = 0; i < moradores.blocoUm.length; i++) {
    console.log(moradores.blocoUm[i].nome + ' ' + moradores.blocoUm[i].sobrenome);
}

for (let i = 0; i < moradores.blocoDois.length; i++) {
    console.log(moradores.blocoDois[i].nome + ' ' + moradores.blocoDois[i].sobrenome);
}