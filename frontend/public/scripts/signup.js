// function validateSignup(event) {
//     event.preventDefault(); // Prevent form submission

//     const username = document.getElementById("username").value.trim();
//     const password = document.getElementById("password").value.trim();
//     const confirmPassword = document.getElementById("confirmPassword").value.trim();

//     const popup = document.getElementById("popup");
//     const popupMessage = document.getElementById("popupMessage");

//     // Check if username exists in the database
//     if (existingUsernames.includes(username)) {
//         popupMessage.textContent = "Username already exists. Please choose a different one.";
//         popup.style.display = "flex"; // Show the popup
//         return;
//     }

//     // Check if passwords match
//     if (password !== confirmPassword) {
//         popupMessage.textContent = "Password and Confirm Password do not match.";
//         popup.style.display = "flex"; // Show the popup
//         return;
//     }

//     // If all validations pass
//     popupMessage.textContent = "Signup successful!";
//     popup.style.display = "flex"; // Show the popup

//     // Simulate adding the new user to the database
//     existingUsernames.push(username);
//     console.log("New Usernames Database:", existingUsernames);
// }

// // Function to close the popup
// function closePopup() {
//     const popup = document.getElementById("popup");
//     popup.style.display = "none"; // Hide the popup
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const usernameElem = document.getElementById('username');
//     const dropdown = document.getElementById('dropdown');
//     const logoutBtn = document.getElementById('logout-btn');
//     const profileIcon = document.getElementById('profile-icon');

//     // Check if the elements are correctly retrieved from the DOM
//     if (!usernameElem || !dropdown || !logoutBtn || !profileIcon) {
//         console.error('Some elements are missing from the DOM');
//         return; // Exit early to prevent further errors
//     }

//     // Get username from localStorage
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//         // If username exists, display it
//         usernameElem.textContent = storedUsername;
//     } else {
//         // Redirect to login if no username found
//         window.location.href = 'index.html';
//     }

//     // Logout functionality
//     logoutBtn.addEventListener('click', function () {
//         const confirmLogout = confirm('Are you sure you want to logout?');
//         if (confirmLogout) {
//             localStorage.removeItem('userToken'); // Clear token
//             localStorage.removeItem('username'); // Clear username
//             window.location.href = 'index.html'; // Redirect to index.html
//         }
//     });

//     // Other dropdown and navigation functionalities
//     usernameElem.addEventListener('click', toggleDropdown);
//     profileIcon.addEventListener('click', toggleDropdown);

//     function toggleDropdown() {
//         dropdown.classList.toggle('show');
//     }

//     // Close dropdown if clicked outside
//     document.addEventListener('click', function (event) {
//         if (!dropdown.contains(event.target) && !usernameElem.contains(event.target) && !profileIcon.contains(event.target)) {
//             dropdown.classList.remove('show');
//         }
//     });

//     // Navigation to other pages
//     document.querySelector('.random-btn').addEventListener('click', function () {
//         window.location.href = 'random.html';
//     });

//     document.querySelector('.write-btn').addEventListener('click', function () {
//         window.location.href = 'own.html';
//     });

//     document.querySelector('.previous-btn').addEventListener('click', function () {
//         window.location.href = 'previous.html';
//     });
// });



// Function to validate signup form
// function validateSignup(event) {
//     event.preventDefault(); // Prevent form submission

//     const username = document.getElementById("username").value.trim();
//     const password = document.getElementById("password").value.trim();
//     const confirmPassword = document.getElementById("confirm-password").value.trim();

//     const popup = document.getElementById("popup");
//     const popupMessage = document.getElementById("popupMessage");

//     // Check if username exists in the database
//     const existingUsernames = []; // Replace with actual database or array of usernames
//     if (existingUsernames.includes(username)) {
//         popupMessage.textContent = "Username already exists. Please choose a different one.";
//         popup.style.display = "flex"; // Show the popup
//         return;
//     }

//     // Check if passwords match
//     if (password !== confirmPassword) {
//         popupMessage.textContent = "Password and Confirm Password do not match.";
//         popup.style.display = "flex"; // Show the popup
//         return;
//     }

//     // If all validations pass
//     popupMessage.textContent = "Signup successful!";
//     popup.style.display = "flex"; // Show the popup

//     // Simulate adding the new user to the database
//     existingUsernames.push(username);
//     console.log("New Usernames Database:", existingUsernames);
// }

// // Function to close the popup
// function closePopup() {
//     const popup = document.getElementById("popup");
//     popup.style.display = "none"; // Hide the popup
// }
import { signup } from './api.js'; // Ensure the path is correct

const validateSignup = async (event) => {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // Validate if passwords match before making the API call
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }

    try {
        console.log("Calling signup API...");
        // Pass both username and password (and confirmPassword in case backend needs it)
        const response = await signup(username, password, confirmPassword); 
        
        if (response && response.message === "Signup successful") {
            alert("Signup successful!");
            //console.log("Redirecting to main page...");
            window.location.href = "index.html"; // Redirect to the main page after signup
        } else {
            alert("Signup failed: " + (response.message || "Unknown error"));
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert(error.message || "Signup failed.");
    }
};

// Ensure DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", validateSignup);
});
