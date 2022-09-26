// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}
console.log('')
//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let key in names) {
    console.log('Olá ' + names[key])
}

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
console.log('')
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let key in car) {
    console.log(key, car[key])
}
console.log('')

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)

let a = 55
let b = 65
let c = 60

function sum(a, b) {
    return a + b
}
console.log(sum(a, b));
function subtr(a, b) {
    return a - b
}
console.log(subtr(a, b));
function multi(a, b) {
    return a * b
}
console.log(multi(a, b));
function divis(a, b) {
    return a / b
}
console.log(divis(a, b));
function modulo(a, b) {
    return a % b
}
console.log(modulo(a, b));
console.log('');
function number(a, b) {
    if (a > b) {
        return a + ' é maior que: ' + b;
    } else {
        return a + ' é menor que: ' + b;
    }
}
console.log(number(a, b));
console.log('');

function higherNumber(a, b, c) {
    if (a > b && a > c)
        return a + ' é maior que: ' + b + 'e' + c;
    else if (b > a && b > c) {
        return b + ' é maior que: ' + a + 'e' + c
    } else {
        return c + ' é maior que: ' + a + 'e' + c;
    }
}
console.log(higherNumber(a, b, c));
console.log('');

function parameter(a) {
    if (a > 0) 
    return 'positivo';
    else if (a < 0){
    return 'negativo'
    }else {
    return 'zero'
}
}
console.log(parameter(a));
console.log('');
function triangle (a, b, c){
    if (a + b + c === 180)
    return 'True'
    else if ( a < 0 && b < 0 && c < 0 ){
    return 'Negative'
    }else{
        return "Erro"
    }
}
console.log(triangle(a,b,c));