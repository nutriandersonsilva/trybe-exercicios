//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem-Vinda, ' + info.personagem );
console.log('');
// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

info [ 'recorrente'] = 'Sim';
console.log(info);
console.log('');
//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for ( key in info){
    console.log(key);
}
console.log('');
//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for ( key in info){
    console.log( info[key]);
}
console.log('');
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}
for (let add in info){
    if (( add === 'recorrente') && info[add] && info2[add]){
        console.log('Ambos recorrente');

        }else {
            console.log(info[add] + ' e ' + info2[add]);
}
}
console.log('');
// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = { nome: 'Julia', sobrenome: 'Pessoa',idade: 21,
    livrosFavoritos: [{
    titulo: 'O Pior Dia de Todos',
    autor: 'Daniela Kopsch',
    editora: 'Tordesilhas',},],
};
console.log('O livro favorito de '+ leitor.nome + ' ' + leitor.sobrenome + 'se chama   ' + leitor.livrosFavoritos[0].titulo);

leitor.livrosFavoritos.push({
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
})
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos' );