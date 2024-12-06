// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the dropdown, buttons, and other elements
    const dropdown = document.getElementById("dropdown");
    const logoutBtn = document.getElementById("logout-btn");
    const profileIcon = document.getElementById("profile-icon");
    const username = document.getElementById("usernameja");

    // Toggle dropdown visibility on username or profile icon click
    const toggleDropdown = () => {
        dropdown.classList.toggle("show");
    };

    // If there's a username stored in localStorage, show it in the profile
    const usernameFromStorage = localStorage.getItem('username');
    if (usernameFromStorage) {
        username.textContent = `Hi, ${usernameFromStorage}!`; // Set the username
    } else {
        window.location.href = 'index.html'; // Redirect if no username
    }

    // Event listener for toggling dropdown visibility
    profileIcon.addEventListener('click', toggleDropdown);
    
    // Close the dropdown if clicked outside of it
    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target) && !profileIcon.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });

    // Event listener for the logout button
    logoutBtn.addEventListener('click', () => {
        const confirmLogout = confirm("Are you sure to logout?");
        if (confirmLogout) {
            localStorage.removeItem('username'); // Clear the username from localStorage
            window.location.href = 'index.html'; // Redirect to login page
        }
    });

    // Button navigation event listeners
    document.querySelector(".random-btn").addEventListener("click", () => {
        window.location.href = "random.html"; // Redirect to random.html
    });

    document.querySelector(".write-btn").addEventListener("click", () => {
        window.location.href = "own.html"; // Redirect to own.html
    });

    document.querySelector(".previous-btn").addEventListener("click", () => {
        window.location.href = "previous.html"; // Redirect to previous.html
    });
});

