//Percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (number of numbers )
console.log(number);
console.log('');
// Some todos os valores contidos no array e imprima o resultado;
let result = 0
for (let i =0; i < numbers.length; i ++){
    result +=  numbers[i];
}
console.log(result);
console.log('');
// Calcule e imprima a média aritmética dos valores contidos no array;
let average = 0
average = result / numbers.length
console.log(average);
console.log('');
//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (average >= 20){
    console.log('Valor maior que 20');
}
else{
    console.log('Valor menor que 20');
}
console.log('');
//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let larger = numbers[0]
for (let i =1;  i < numbers.length; i ++){
    if (numbers[i] > larger){
        larger = numbers[i]
    }
}
console.log(larger);
console.log('');
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let odd = 0
for ( i = 0; i < numbers.length; i ++){
if (numbers[i] % 2 !==0){
    odd ++;
    console.log(odd);
    }}
if (odd === 0){
    console.log('Nenhum valor impar encontrado');
    }
else {
    console.log(odd);
}
console.log('');
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let smaller = numbers[0]
for (let i =1;  i < numbers.length; i ++){
    if (numbers[i] < smaller){
        smaller= numbers[i]
    }
}
console.log(smaller);
console.log('');
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let arry =[]
for (let i = 1; i <= 25; i ++){
    arry.push[i]
    
}
console.log(arry);

for (let i = 0; i < arry.length; i ++){
    console.log(arry[i] / 2);
}
