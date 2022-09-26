// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
let factorial = 1 

for (let i = 10; i > 0; i --){
    factorial *=i;
}
console.log(factorial)
console.log('')
// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let inverse = ''
inverse = word.split('').reverse().join('');
console.log(inverse);
console.log('')
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];

let big = array [0]
let small = array [0]
for  (let i = 0; i <array.length; i ++){
    if (array[i].length > big.length)
    big = array[i]
}

for ( let i = 0; i <array.length; i ++){
    if (array[i].length < small.length)
    small = array[i]
}
console.log (big)
console.log(small);
console.log('')
//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
console.log('')
// dificudade nesse!
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);