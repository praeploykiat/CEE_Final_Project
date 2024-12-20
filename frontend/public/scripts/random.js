import { fetchRandomResolution } from './api.js';

document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "main.html"; // Navigate back to main page
});

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    
    // Add click event to squares for selection
    squares.forEach(square => {
        square.addEventListener('click', () => {
            // Remove the 'selected' class from all squares
            squares.forEach(sq => sq.classList.remove('selected'));
            
            // Add the 'selected' class to the clicked square
            square.classList.add('selected');

            // Fetch a random resolution when a square is clicked
            fetchRandomResolutionFromAPI();
        });
    });
    const closeButton = document.querySelector('.close-btn');
    closeButton.addEventListener('click', closePopup);
});

// Function to fetch a random resolution from the backend using the API
function fetchRandomResolutionFromAPI() {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    // Call the imported fetchRandomResolution function
    fetchRandomResolution()
        .then(data => {
            popupText.textContent = data.text || "No resolution available.";  // Display the fetched resolution
            popup.classList.remove('hidden');  // Show the popup
        })
        .catch(error => {
            console.error('Error fetching random resolution:', error);
            popupText.textContent = "Error loading resolution.";  // Display an error message if there's an issue
            popup.classList.remove('hidden');
        });
}

// Close popup function
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');  // Hide the popup when close button is clicked
}

document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem('username');
    console.log('Username from localStorage:', username); // Debugging if the username is fetched
    
    if (username) {
        document.getElementById('username').innerText = username;
    } else {
        document.getElementById('username').innerText = 'Guest'; // Default username if not logged in
    }
});
