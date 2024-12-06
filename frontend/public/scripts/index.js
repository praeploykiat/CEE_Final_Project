import { login } from './api.js'; // Import the login function from api.js

// Make the closePopup function globally accessible
window.closePopup = function () {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
};

// Function to decode JWT manually
function decodeJWT(token) {
    const base64Url = token.split('.')[1]; // Get the payload part of the JWT
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Base64 URL to Base64 standard encoding
    const decodedData = atob(base64); // Decode the Base64 string
    return JSON.parse(decodedData); // Parse the decoded string as JSON
}

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

        // Save token and username in localStorage
        localStorage.setItem('userToken', data.token); // Use 'userToken' for consistency
        localStorage.setItem('username', data.username); // Save username (if needed)
        console.log('Token and Username saved to localStorage:', data.token, data.username);

        // Decode the JWT token manually to get the username
        const decoded = decodeJWT(data.token);
        console.log('Decoded Token:', decoded);
        const decodedUsername = decoded.username; // Get the username from the decoded token
        console.log('Decoded Username:', decodedUsername);
        localStorage.setItem('username', decodedUsername); // Save the decoded username in localStorage

        // Show a success popup instead of alert
        showPopup('Login successful! Redirecting...');
        setTimeout(() => {
            window.location.href = 'main.html'; // Redirect to the main page after showing the success popup
        }, 2000); // Wait 2 seconds before redirecting
    } catch (error) {
        console.error('Login Error:', error);

        // Check if error is from the backend (i.e., the server responded with a message)
        if (error.response && error.response.data && error.response.data.message) {
            // If error message is available, show it in an alert
            showPopup(error.response.data.message); // Display the error message (e.g., "Invalid username or password")
        } else {
            // For unexpected errors, show a general message
            showPopup(error.message || 'An error occurred. Please try again later.');
        }
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
