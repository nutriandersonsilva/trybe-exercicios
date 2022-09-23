/* 1 */
const a = 20;
const b = 5;
let res;

res = a + b;
console.log('seu resultado é: ' + res );
res = a - b;
console.log('seu resultado é: ' + res );
res = a * b;
console.log('seu resultado é: ' + res );
res = a / b;
console.log('seu resultado é: ' + res );
res = a % b;
console.log('seu resultado é: ' + res );

console.log('')
/* 2 */
const num1 = 20;
const num2 = 45;
if (num1 > num2){
    console.log('numero 1 é maior que numero 2');
}
else if(num2 > num1){
    console.log('numero 2 é maior que numero 1');
}
console.log('');
/* 3 */
const num3 = 500;
const num4 = 45;
const num5 = 1000;

if (num3 > num4 && num3 > num5){
    console.log( 'numero 1 é maior que: numero 2 e numero 3')
}
else if( num4 > num3 && num4 > num5)(
    console.log( 'numero 2 é maior que: numero 1 e numero 3')
)
else if ( num5 > num1 && num5 > num3){
    console.log( 'numero 3 é maior que: numero 1 e numero 2')
}

console.log('');
/* 4 */
const valor1 = true

if (valor1 === true){
    console.log('O valor é positivo');
}
else if (valor1 === false){
    console.log('O valor é negativo');
}
else { 
    console.log(' o valor é zero')
}

console.log('');
/* 5 */
const angulo1 = 59
const angulo2 = 60
const angulo3 = 60
let triangulo = angulo1 + angulo2 + angulo3;
let valores = angulo1 > 0 && angulo2 > 0 && angulo3 >0; 


if (valores){
    if (triangulo == 180){
        console.log(true);
}
else { 
    console.log(false)
}
}else {
console.log('Erro');
}

console.log('');
/* 6 */
let peca = 'PeãeO'

switch (peca.toLowerCase()){
    case 'cavalo':
        console.log('Anda em formato de L')
    break
    case 'peão':
        console.log('Anada uma casa para frente')
    break
    case 'rainhha':
        console.log('anda quantas casa quiser para todos os lados')
    break 
default:
    console.log('Erro, peça invalida')
}

console.log('');
/* 7 */
let nota = 92

if (nota < 0 || nota > 100){
    console.log('ERRO:Nota errada')}
    else if (nota >=90){
    console.log('A')
}
    else if (nota >=80){
    console.log('B')
}
    else if (nota >=70){
    console.log('C')
}
    else if (nota >=60){
    console.log('D')
}
    else if (nota >=50){
    console.log('E')
}
    else{
    console.log('F')
}

console.log('');
/* 8 */
const val1 = 10;
const val2 = 3;
const val3 = 7;
let par = false;

if (val1 % 2 === 0 || val2 % 2 === 0 || val3 % 2 === 0) {
    par = true
}
console.log(par)

console.log('');
/* 9 */
const val4 = 12;
const val5 = 11;
const val6 = 11;
let impar = false;

if (val4 % 2 === 0 || val5 % 2 === 0 || val6 % 2 === 0) {
    impar = true
}
console.log(impar)

console.log('');
/* 10 */
const prod = 10
const venda = 100

if (prod >= 0 && venda >=0 ) {
const valProd = prod * 1.2;
const valorFinal = venda - valProd;
console.log(valorFinal)
} 
else{
    console.log ('Erro: valores são menores que zero')
}

console.log('');
/* 11 */
let salario = 4500
let inss
let ir 

if (salario <=1556.94){
    inss = salario * 0.08
}
else if (salario <=2594,92){
    inss = salario * 0.09
}
else if (salario <=5189.91){
    inss = salario * 0.11
}
else {
    inss = 570.88
}

let salarioBruto = salario - inss

if (salarioBruto <= 1903.98){
    ir = 0
}
else if (salarioBruto <=2826.65){
    ir = (salarioBruto * 0.075 ) - 142.8
}
else if (salarioBruto <= 3751.05){
    ir = (salarioBruto * 0.15) - 354.8
}
else if (salarioBruto <= 4664.68){
    ir = (salarioBruto * 0.225) - 636.13 
}
else {
    ir = (salarioBruto * 0.275) - 869.36
}

console.log ('Seu salario é de: ' + (salarioBruto - ir))

