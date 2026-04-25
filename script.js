
const botao = document.getElementById('botao');


function imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && altura !== '') {
        alert('valor preenchido com sucesso');
       
    } else {
        alert('preencha todos os campos');
    }
}

botao.addEventListener('click', imc);
