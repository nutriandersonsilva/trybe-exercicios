/* Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

Crie uma função para mostrar o tamanho de um objeto.

Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
 */


const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

/* const periodo = {turno: 'noite'}

Object.assign(lesson2, periodo)
console.log(lesson2);

 */

const addVariable = (obj, key, value) => {
    obj[key] = value;
};
addVariable(lesson2, 'turno', 'noite');
console.log(lesson2);
console.log('');

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));
console.log('');

const sizeObj = (obj) => Object.keys(obj).length;
console.log(sizeObj(lesson1));
console.log('');

const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson1));
console.log('');

const assign = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(assign);
console.log('');

const students = (obj) => {
    let total = 0;

    const array = Object.keys(obj);

    for (index in array) {
        total += obj[array[index]].numeroEstudantes;
    }
    return total;
};
console.log(students(assign));


/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: */

const getValueByNumber = (obj, number) => Object.values(obj)[number];

console.log(getValueByNumber(lesson1, 2));


const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let i in arr) {
        if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
    }
    return isEqual;
};
console.log(verifyPair(lesson2, 'professor', 'Carlos'));