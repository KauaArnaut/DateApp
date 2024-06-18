
document.addEventListener('DOMContentLoaded', function() {
  const createAccountButton = document.querySelector('.createanaccountbutton');
  createAccountButton.addEventListener('click', () => {
    window.location.href = 'register.html';
  });
});
