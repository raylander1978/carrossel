document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".wrapper .carrossel");
    const items = document.querySelectorAll(".wrapper .carrossel");
    const totalItems = items.length;
    let currentIndex = 0;
  
    // Adiciona a classe "show" ao item atual
    items[currentIndex].classList.add("show");
  
    // Adiciona um ouvinte de evento para a seta "Next"
    document.querySelector(".next").addEventListener("click", function () {
      if (currentIndex < totalItems - 3) {
        // Oculta o item atual
        items[currentIndex].classList.remove("show");
        // Mostra o próximo item
        currentIndex++;
        items[currentIndex + 2].classList.add("show");
      }
    });
  
    // Adiciona um ouvinte de evento para a seta "Previous"
    document.querySelector(".prev").addEventListener("click", function () {
      if (currentIndex > 0) {
        // Oculta o item atual
        items[currentIndex + 2].classList.remove("show");
        // Mostra o item anterior
        currentIndex--;
        items[currentIndex].classList.add("show");
      }
    });
  });
  