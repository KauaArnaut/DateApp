document.addEventListener('DOMContentLoaded', function() {
  const manButton = document.getElementById('manButton');
  const womanButton = document.getElementById('womanButton');
  const otherButton = document.getElementById('otherButton');
  const saveButton = document.getElementById('saveButton');

  let selectedGender = '';

  manButton.addEventListener('click', () => {
    selectedGender = 'Man';
    highlightSelected(manButton);
  });

  womanButton.addEventListener('click', () => {
    selectedGender = 'Woman';
    highlightSelected(womanButton);
  });

  otherButton.addEventListener('click', () => {
    selectedGender = 'Other';
    highlightSelected(otherButton);
  });

  saveButton.addEventListener('click', () => {
    if (!selectedGender) {
      alert('Please select a gender.');
      return;
    }

    const email = localStorage.getItem('loggedInUser');
    if (!email) {
      alert('No logged in user found. Please login.');
      window.location.href = 'login.html';
      return;
    }

    let userProfile = JSON.parse(localStorage.getItem(email + '_profile')) || {};
    userProfile.gender = selectedGender;
    localStorage.setItem(email + '_profile', JSON.stringify(userProfile));
    alert('Gender saved successfully!');

    // Redirect to interests.html
    window.location.href = 'interests.html';
  });

  function highlightSelected(button) {
    document.querySelectorAll('.gender-button').forEach(btn => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');
  }
});