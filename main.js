let slideIndex = 1;

function mudarSlide(n) {
    mostrarSlide(slideIndex += n);    
}

function slideAtual(n) {
    mostrarSlide(slideIndex = n);
}

function mostrarSlide(n) {
        const slides = document.getElementsByClassName("mySlide");
        const dots = document.getElementsByClassName("dot");
    
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
    
        // Esconde todos os slides
        Array.from(slides).forEach(slide => slide.style.display = "none");
    
        // Remove a classe "active" dos dots
        Array.from(dots).forEach(dot => dot.classList.remove("active"));
    
        // Mostra o slide atual e atualiza o dot
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
}   

    // Cria dots dinamicamente e inicializa o primeiro slide
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.mySlide');
    const dotsContainer = document.querySelector('.dots-container');
    
        // Cria os dots
slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.onclick = () => slideAtual(i + 1);
            dotsContainer.appendChild(dot);
        });
    
    // Inicializa o primeiro slide e dot
mostrarSlide(slideIndex);
    });