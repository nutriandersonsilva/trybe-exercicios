const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// - Diferente dos outros li, o li que esta um pouco acima tem uma CLASS que o modifica (transform: translateY(-20px);)


// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
function addTech(add) {
    let tech = document.querySelector('.tech');
    tech.classList.remove('tech');
    add.target.classList.add('tech');
    input.value = '';
}
firstLi.addEventListener('click', addTech);
secondLi.addEventListener('click', addTech);
thirdLi.addEventListener('click', addTech);
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// adicionando um por vez dentro dentro da CLASS tech

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function (add) {
    let tech = document.querySelector('.tech');
    tech.innerText = add.target.value;
})

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
//https://www.horadecodar.com.br/2020/11/23/como-forcar-a-abertura-de-um-link-em-outra-aba/
myWebpage.addEventListener('dblclick', function(){
    window.open('https://nutriandersonsilva.github.io/', "_blank");
    
})
// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', function(mouse){
    mouse.target.style.color = 'magenta'
})

myWebpage.addEventListener('mouseout', function(mouse){
    mouse.target.style.color = 'unset'
})
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
        // O Event é passado como um parâmetro para a função.
        event.target.innerText = 'Opção reiniciada';
        // O event possui várias propriedades, porém a mais usada é o event.target,
        // que retorna o objeto que disparou o evento.
    }

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.