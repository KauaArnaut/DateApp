document.addEventListener('DOMContentLoaded', function() {
  
   const profilePictureInput = document.getElementById('profilePictureInput');

const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});

    

  document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = localStorage.getItem('loggedInUser');
    if (!email) {
      alert('No logged in user found. Please login.');
      window.location.href = 'login.html';
      return;
    }

    const profilePicture = profilePictureInput.files[0];
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthday = document.getElementById('birthday').value;

    if (!profilePicture) {
      alert('Please select a profile picture.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = function() {
      const userProfile = {
        email: email,
        profilePicture: reader.result,
        firstName: firstName,
        lastName: lastName,
        birthday: birthday
      };

      localStorage.setItem(email + '_profile', JSON.stringify(userProfile));
      alert('Profile created successfully!');
      window.location.href = 'dashboard.html';
    };

    reader.readAsDataURL(profilePicture);
  });
});
