/* function interruptPattern(event) {
    event.preventDefault()
} */
let name1 = document.querySelector('#name').value.length;
let email = document.querySelector('#email').value.length;
let reason = document.querySelector('#why').value.length;

window.onload = function () {
    let btnSubmit = document.getElementById('submit-btn')
    btnSubmit.addEventListener('click', interruptPattern)

    let btnClear = document.getElementById('clear-btn')
    btnClear.addEventListener('click', clearBtn)

    let agreement = document.getElementById('agreement');
    agreement.addEventListener('change', enableSubmit);
}

function clearBtn() {
    let formElements = document.querySelectorAll('input')
    let textArea = document.querySelector('textarea')
    for (let i = 0; i < formElements.length; i++) {
        let input = formElements[i]
        input.value = '';
        input.checked = false;
    }
    textArea.value = '';
}

function enableSubmit() {
    let submitBtn = document.getElementById('submit-btn');
    let agreement = document.getElementById('agreement');
    submitBtn.disabled = !agreement.checked;
}


