// script.js
/*function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    // Toggle the dropdown visibility
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function logout() {
    // Add your logout logic here (e.g., clearing session, redirecting to login page)
    alert("Logged out successfully!");
    window.location.href = 'login.html'; // Redirect to login page
}*/


document.getElementById("random-btn").addEventListener("click", function () {
    window.location.href = "random.html"; // เปลี่ยนเส้นทางไปยัง page1.html
});

document.getElementById("write-btn").addEventListener("click", function () {
    window.location.href = "own.html"; // เปลี่ยนเส้นทางไปยัง page2.html
});

document.getElementById("previous-btn").addEventListener("click", function () {
    window.location.href = "previous.html"; // เปลี่ยนเส้นทางไปยัง page3.html
});
