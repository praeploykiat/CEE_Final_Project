// // ฟังก์ชัน toggle dropdown (เปิด/ปิด เมนู)
// /*function toggleDropdown() {
//     const dropdown = document.getElementById('dropdown');
//     // Toggle the dropdown visibility
//     dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
// }

// // ฟังก์ชัน logout
// function logout() {
//     const logoutConfirmed = confirm("Are you sure you want to log out?");
//     if (logoutConfirmed) {
//         // ล้างข้อมูลที่เกี่ยวข้อง เช่น การลบ session หรือ cookie ที่ใช้ในการล็อกอิน
//         // ทำการ redirect ไปที่หน้า index.html
//         window.location.href = 'index.html'; // หรือจะใช้ window.location.replace() ถ้าไม่อยากให้กลับมาหน้านี้ได้
//     }
// }

// // เพิ่ม event listener ให้กับ username เพื่อให้สามารถคลิกได้
// document.getElementById('username').addEventListener('click', toggleDropdown);

// const username = document.getElementById("username").textContent;
// console.log(username);  */


// // ดึงองค์ประกอบใน DOM

// //document.getElementById("username").textContent = localStorage.getItem("username");
// //const username = document.getElementById("username");
// //username.textContent = localStorage.getItem("username");

// //const username = localStorage.getItem("username");
// const dropdown = document.getElementById("dropdown");
// const logoutBtn = document.getElementById("logout-btn");
// const profileIcon = document.getElementById("profile-icon");

// // เมื่อคลิกที่ username หรือ profile icon ให้แสดง/ซ่อน dropdown
// username.addEventListener("click", toggleDropdown);
// profileIcon.addEventListener("click", toggleDropdown);

// // ฟังก์ชันสำหรับการแสดง/ซ่อน dropdown
// function toggleDropdown() {
//     dropdown.classList.toggle("show");
// }

// // เมื่อคลิกที่ logout ให้แสดงข้อความยืนยัน
// logoutBtn.addEventListener("click", function () {
//     const confirmLogout = confirm("Are you sure to logout?");
//     if (confirmLogout) {
//         // เปลี่ยนเส้นทางไปยังหน้า index.html
//         window.location.href = "index.html";
//     }
// });

// // ปิด dropdown หากคลิกนอก dropdown หรือ profile
// document.addEventListener("click", function (event) {
//     if (!dropdown.contains(event.target) && !username.contains(event.target) && !profileIcon.contains(event.target)) {
//         dropdown.classList.remove("show");
//     }
// });




// document.querySelector(".random-btn").addEventListener("click", function () {
//     window.location.href = "random.html"; // เปลี่ยนเส้นทางไปยัง random.html
// });

// document.querySelector(".write-btn").addEventListener("click", function () {
//     window.location.href = "own.html"; // เปลี่ยนเส้นทางไปยัง own.html
// });

// document.querySelector(".previous-btn").addEventListener("click", function () {
//     window.location.href = "previous.html"; // เปลี่ยนเส้นทางไปยัง previous.html
// });

// function login() {
//     // Example: After validating the username and password
//     const username = document.getElementById('usernameInput').value; // Replace with actual input field ID
//     localStorage.setItem('username', username); // Save username in localStorage
//     window.location.href = 'main.html'; // Redirect to main page
// }

// document.addEventListener('DOMContentLoaded', () => {
//     // Get username from localStorage (or replace with your method of retrieving the username)
//     const username = localStorage.getItem('username');

//     if (username) {
//         // Insert username into the DOM
//         const usernameSpan = document.getElementById('usernameja');
//         usernameSpan.textContent = `Hi, ${username}!`;

//         // Show dropdown when profile icon is clicked
//         const profileIcon = document.getElementById('profile-icon');
//         const dropdown = document.getElementById('dropdown');

//         profileIcon.addEventListener('click', () => {
//             dropdown.classList.toggle('show'); // Toggle visibility of the dropdown
//         });

//         // Logout functionality
//         const logoutBtn = document.getElementById('logout-btn');
//         logoutBtn.addEventListener('click', () => {
//             localStorage.removeItem('username'); // Clear username
//             window.location.href = 'login.html'; // Redirect to login page
//         });
//     } else {
//         // Redirect to login page if username is not set
//         window.location.href = 'index.html';
//     }
// });

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

