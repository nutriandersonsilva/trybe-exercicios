
const gerarEmail = nomeCompleto => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_')
    return { nomeCompleto, email: `${email}@trybe.com` }
}

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    }
    return employees;
};

console.log(newEmployees(gerarEmail));
console.log('');
/* Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”). */

const sorteio = (number, resultado) => number === resultado;

const sorteioResultado = (resultado, callback,) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callback(resultado, number) ? 'Tente novamente' : 'Parabéns você ganhou';
}

console.log(sorteioResultado(2, sorteio));
console.log('');

/* Crie uma HOF que receberá três parâmetros:

O primeiro será um array de respostas corretas (soluções);

O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

Uma resposta correta adiciona 1 ponto à pontuação final;

A ausência de uma resposta não altera a pontuação (quando for “N.A”);

Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays: */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparação = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    if (RIGHT_ANSWERS === STUDENT_ANSWERS) {
        return 1;
    }
    if (STUDENT_ANSWERS === 'N.A') {
        return 0;
    }
    return 0.5;
}

const pontos = (RIGHT_ANSWERS, STUDENT_ANSWERS, acertos) => {
    let pontos = 0;
    for (let i = 0; i < RIGHT_ANSWERS.length; i++) {
        const acertosReturn = acertos(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i])
        pontos += acertosReturn;
    }
    return `Resultado: ${pontos} pontos`;
}
console.log(pontos(RIGHT_ANSWERS, STUDENT_ANSWERS, comparação));