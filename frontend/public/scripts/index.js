// function validateLogin(event) {
//   event.preventDefault(); // Prevent form submission
  
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // Replace with actual validation logic
//   if (username !== "hi" || password !== "123") {
//       showPopup();
//   } else {
//       //alert("Login successful!"); // Redirect or handle success
//       window.location.href = "main.html";
//   }
// }

// function showPopup() {
//   const popup = document.getElementById("popup");
//   popup.style.display = "block";
// }


// function closePopup() {
//   const popup = document.getElementById("popup");
//   popup.style.display = "none";
// }
import { login } from './api.js'; // Import the login function from api.js

// Make the closePopup function globally accessible
window.closePopup = function () {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
};

// Validate Login
async function validateLogin(event) {
    event.preventDefault(); // Prevent the form from submitting
    console.log('Form submitted'); // Check if form submission is triggered

    const username = document.getElementById('username').value.trim();
    localStorage.setItem("username", username);
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        showPopup('Please fill in both fields.');
        return;
    }

    try {
        console.log('Attempting to call login API');
        const data = await login(username, password); // Call the login API
        console.log(data); // Log the response

        localStorage.setItem('token', data.token); // Save token
        alert('Login successful!');
        window.location.href = 'main.html'; // Redirect to the main page
    } catch (error) {
        console.error('Login Error:', error);
        showPopup(error.message || 'An error occurred. Please try again later.');
    }
}

// Show the popup with a message
function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popup.style.display = 'block';
}

// Attach validateLogin to the form's submit event
document.getElementById('login-form').addEventListener('submit', validateLogin);


