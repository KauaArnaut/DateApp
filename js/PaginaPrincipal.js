class PaginaPrincipal {
  constructor() {
    this.sections = document.querySelectorAll('.section');
    this.menuLinks = document.querySelectorAll('.menu-link');

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.menuLinks.forEach(link => {
      link.addEventListener('click', (event) => this.handleMenuClick(event));
    });
  }

  handleMenuClick(event) {
    event.preventDefault();

    // Hide all sections
    this.sections.forEach(section => {
      section.style.display = 'none';
    });

    // Show the selected section
    const sectionId = event.target.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = 'block';
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const paginaPrincipal = new PaginaPrincipal();
});
