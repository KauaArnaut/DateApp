document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const user = existingUsers.find(user => user.email === email && user.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', email);
    const userProfile = localStorage.getItem(email + '_profile');
    
    if (userProfile) {
      alert('Login successful!');
      window.location.href = 'dashboard.html';
    } else {
      alert('Login successful! Please create your profile.');
      window.location.href = 'profile.html';
    }
  } else {
    alert('Invalid email or password.');
  }

  

});
