function criarBolha() {
    const div = document.querySelector('.bolhas');
    const bolhaCriada = document.createElement('span');
    bolhaCriada.classList.add('bolha');
    var tamanho = Math.random() * 60;

    bolhaCriada.style.width = 20 + tamanho + 'px';
    bolhaCriada.style.height = 20 + tamanho + 'px';
    bolhaCriada.style.left = Math.random() * innerWidth + 'px';
    div.appendChild(bolhaCriada);

    setTimeout(() => {
        bolhaCriada.remove();
    }, 4000);
}

setInterval(criarBolha, 50);
