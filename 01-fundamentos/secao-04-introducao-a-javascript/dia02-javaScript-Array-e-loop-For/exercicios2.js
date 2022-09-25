// Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i ++){
    for (let i2 = 0; i2 < i; i2 ++ ){
        if (numbers[i] < numbers[i2]){
        let position = numbers[i]
        numbers[i] = numbers[i2]
        numbers[i2] = position; 
        }
    }   
}
console.log (numbers)
console.log('')

// Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let i = 1; i < numbers.length; i ++){
    for (let i2 = 0; i2 < i; i2 ++ ){
        if (numbers[i] > numbers[i2]){
        let position = numbers[i]
        numbers[i] = numbers[i2]
        numbers[i2] = position; 
        }
    }   
}
console.log (numbers)
// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumber = []

for (let i = 0; i < numbers2.length; i++){
    if (i + 1 < numbers2.length){
        newNumber.push(numbers2[i] * numbers2[i+1])
    }
    else {
        newNumber.push(numbers2[i] * 2)
    }
}
console.log(newNumber);