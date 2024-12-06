import { submitResolution } from './api.js';

// Back button logic
document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "main.html"; // Redirect to main.html
});

// Next button logic
const nextButton = document.querySelector(".next-btn");

nextButton.addEventListener("click", async function () {
    console.log("Next button clicked");

    const resolutionText = document.querySelector(".text-input").value; // Get the resolution text from input field
    const username = localStorage.getItem('username'); // Get the username from localStorage

    // Log username for debugging
    console.log('Username from localStorage:', username);

    // Check if resolution text is empty
    if (!resolutionText) {
        alert("Please enter a resolution before proceeding.");
        return;
    }

    // Check if username exists in localStorage
    if (!username) {
        alert("Username not found! Please log in first.");
        return;
    }

    try {
        console.log("Submitting resolution:", resolutionText);

        // Submit the resolution to the backend
        await submitResolution(username, resolutionText);

        // Redirect to generate.html to generate the resolution card
        window.location.href = "genarate.html"; // Redirect to generate.html after success
    } catch (error) {
        alert("Failed to submit resolution: " + error.message); // Alert in case of failure
    }
});

// Directly use username when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem('username');
    console.log('Username from localStorage:', username); // Debugging if the username is fetched
    
    if (username) {
        document.getElementById('username').innerText = username;
    } else {
        document.getElementById('username').innerText = 'Guest'; // Default username if not logged in
    }
});
