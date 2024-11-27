// script.js
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    // Toggle the dropdown visibility
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function logout() {
    // Add your logout logic here (e.g., clearing session, redirecting to login page)
    alert("Logged out successfully!");
    window.location.href = 'login.html'; // Redirect to login page
}
