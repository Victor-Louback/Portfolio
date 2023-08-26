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

    typeWriter(titulo1, 100);
    setTimeout(() => {
        titulo2.classList.remove('invisivel'); typeWriter(titulo2, 100); // Chama typeWriter para o titulo2 após um atraso de 3 segundos
    }, 2500);
    
}

// Inicializar a animação de digitação
startTypingAnimation();
