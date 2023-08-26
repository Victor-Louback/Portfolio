function typeWriter(elemento, tempo) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, tempo * i);
    });
}

function startTypingAnimation() {
    const titulo1 = document.getElementById('titulo1');
    const titulo2 = document.getElementById('titulo2');
    titulo2.classList.add('invisivel');

    typeWriter(titulo1, 80);
    setTimeout(() => {
        titulo2.classList.remove('invisivel'); typeWriter(titulo2, 80); // Chama typeWriter para o titulo2 após um atraso de 3 segundos
    }, 2000);
    
}

// Inicializar a animação de digitação
startTypingAnimation();

// Definir um intervalo para reiniciar a animação após um certo período
const intervalo = 10000; // 7 segundos

setInterval(() => {
    startTypingAnimation();
}, intervalo);
