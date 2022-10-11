//Você deve aplicar preferências das pessoas leitoras na página, para melhorar a experiência de leitura dessas pessoas.
function generateColors() {
    var hexadecimais = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Cor do texto;
document.getElementById('color').addEventListener('click', function () {
    let text1 = document.getElementById('text2')
    text1.style.color = generateColors()

    localStorage.setItem('textColor', text1.style.color = generateColors())
})

// Cor de fundo da tela;
document.getElementById('color2').addEventListener('click', function () {
    let text2 = document.getElementById('text1')
    text2.style.backgroundColor = generateColors()

    localStorage.setItem('backColor', text2.style.backgroundColor = generateColors() )
})

// Tamanho da fonte;
tamanho = 16
function diminuir(){
    tamanho--;
    localStorage.setItem('size', document.body.style.fontSize=tamanho+"px")
}
function aumentar(){
    tamanho++;
    localStorage.setItem('size1', document.body.style.fontSize=tamanho+"px")
}

let savedText = localStorage.getItem('textColor')
text1.style.color = savedText

let savedBack = localStorage.getItem('backColor')
text2.style.backgroundColor = savedBack

let savedSize = localStorage.getItem('size')
document.body.style.fontSize= savedSize;

let savedSize1 = localStorage.getItem('size1')
document.body.style.fontSize= savedSize1;


