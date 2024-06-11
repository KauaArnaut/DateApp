// register.js

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = existingUsers.some(user => user.email === email);

  if (userExists) {
    alert('Email já cadastrado, faça o login.');
    window.location.href = 'login.html';
  } else {
    existingUsers.push({ email, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));
    alert('Account created successfully!');
    window.location.href = 'login.html';
  }
});
