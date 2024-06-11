document.addEventListener('DOMContentLoaded', function() {
  const interestButtons = document.querySelectorAll('.interest-button');

  interestButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('selected');
    });
  });

  const saveInterestsButton = document.getElementById('saveInterestsButton');

  saveInterestsButton.addEventListener('click', () => {
    const selectedInterests = [];
    const selectedButtons = document.querySelectorAll('.interest-button.selected');

    selectedButtons.forEach(button => {
      selectedInterests.push(button.getAttribute('data-interest'));
    });

    if (selectedInterests.length === 0) {
      alert('Please select at least one interest.');
      return;
    }

    const email = localStorage.getItem('loggedInUser');
    if (!email) {
      alert('No logged in user found. Please login.');
      window.location.href = 'login.html';
      return;
    }

    let userProfile = JSON.parse(localStorage.getItem(email + '_profile')) || {};
    userProfile.interests = selectedInterests;
    localStorage.setItem(email + '_profile', JSON.stringify(userProfile));
    alert('Interests saved successfully!');

    // Redirect to dashboard.html
    window.location.href = 'PaginaPrincipal.html';
  });
});
