(function() {
  function updateDescriptionAndTitle(index) {
    const titlesText = document.querySelector('.Algorithm');
    const descText = document.querySelector('.Desc');

    switch (index) {
      case 0:
        titlesText.innerHTML = 'Algorithm';
        descText.innerHTML = 'Users going through a vetting process to ensure you never match with bots.';
        break;
      case 1:
        titlesText.innerHTML = 'Matches';
        descText.innerHTML = 'We match you with people that have a large array of similar interests.';
        break;
      case 2:
        titlesText.innerHTML = 'Premium';
        descText.innerHTML = 'Sign up today and enjoy the first month of premium benefits on us.';
        break;
      default:
        titlesText.innerHTML = 'Algorithm';
        descText.innerHTML = 'Users going through a vetting process to ensure you never match with bots.';
        break;
    }
  }

  // Função para atualizar os indicadores
  function updateIndicators(index) {
    const indicators = document.querySelectorAll('.indicator');

    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  // Exportar as funções para serem acessíveis fora do escopo IIFE (opcional)
  window.updateDescriptionAndTitle = updateDescriptionAndTitle;
  window.updateIndicators = updateIndicators;
})();
