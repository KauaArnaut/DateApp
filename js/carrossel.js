(function() {
  // Inicializar o carrossel
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-image');
    const indicators = document.querySelectorAll('.indicator');

    let currentImageIndex = 0;

    function initializeCarousel() {
      images[currentImageIndex].classList.add('active');
      updateDescriptionAndTitle(currentImageIndex);
      updateIndicators(currentImageIndex);
    }

    initializeCarousel();

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        images[index].classList.add('active');
        updateDescriptionAndTitle(index);
        updateIndicators(index);
        currentImageIndex = index;
      });
    });

    setInterval(() => {
      images[currentImageIndex].classList.remove('active');
      indicators[currentImageIndex].classList.remove('active');

      currentImageIndex = (currentImageIndex + 1) % images.length;

      images[currentImageIndex].classList.add('active');
      updateDescriptionAndTitle(currentImageIndex);
      updateIndicators(currentImageIndex);
    }, 3000);
  });
})();
