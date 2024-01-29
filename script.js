  document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");
    let currentIndex = 0;

    function showSlide(index) {
      sliders.forEach((slider) => {
        slider.classList.remove("show");
      });

      sliders[index].classList.add("show");
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % sliders.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
      showSlide(currentIndex);
    }

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    // Exibir o primeiro slide ao carregar a página
    showSlide(currentIndex);
  });
