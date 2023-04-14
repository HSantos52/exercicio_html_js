const form = document.getElementById('form-compare');
const numeroB = document.getElementById("numero-B");
let formValido = false;

function numeroValido(numeroA,numeroB) {
    const comparaNumeros = (numeroB > numeroA);
    return comparaNumeros;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById("numero-A");
    const mensagemSucesso = `Parabéns! O valor de B: <b>${numeroB.value}<b> é maior que o valor de A: <b>${numeroA.value}<b>`;

    formValido = numeroValido(numeroA.value,numeroB.value);
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";
        document.querySelector('.error-message').style.display = "none";
        numeroB.style.border = '';

        numeroA.value = "";
        numeroB.value = "";
    } else {
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = "block";
        const containerMensagemSucesso = document.querySelector('.sucess-message').style.display = "none";
        numeroA.value = "";
        numeroB.value = "";
    }
})
