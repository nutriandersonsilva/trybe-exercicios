// Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:

// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 

let n = 5
let symbol = '*'
let line = ''

for (let i = 0; i < n; i++){
    line = line + symbol;
}
for (let i = 0; i < n; i++){
    console.log(line);
}
console.log('');
// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n1 = 5
let symbol1 = '*'
let line1 = ''

for ( let i = 0; i <= n1; i++){
    console.log(line1)
    line1 = line1 + symbol1
}
console.log('');
// Agora inverta o lado do triângulo. Por exemplo 'DIFICIL DE ENTENDER's
let n3 = 5;
let symbol3 = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n3; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n3; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol3;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
