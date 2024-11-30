// ฟังก์ชัน toggle dropdown (เปิด/ปิด เมนู)
/*function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    // Toggle the dropdown visibility
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// ฟังก์ชัน logout
function logout() {
    const logoutConfirmed = confirm("Are you sure you want to log out?");
    if (logoutConfirmed) {
        // ล้างข้อมูลที่เกี่ยวข้อง เช่น การลบ session หรือ cookie ที่ใช้ในการล็อกอิน
        // ทำการ redirect ไปที่หน้า index.html
        window.location.href = 'index.html'; // หรือจะใช้ window.location.replace() ถ้าไม่อยากให้กลับมาหน้านี้ได้
    }
}

// เพิ่ม event listener ให้กับ username เพื่อให้สามารถคลิกได้
document.getElementById('username').addEventListener('click', toggleDropdown);

const username = document.getElementById("username").textContent;
console.log(username);  */


// ดึงองค์ประกอบใน DOM
const username = document.getElementById("username");
const dropdown = document.getElementById("dropdown");
const logoutBtn = document.getElementById("logout-btn");
const profileIcon = document.getElementById("profile-icon");

// เมื่อคลิกที่ username หรือ profile icon ให้แสดง/ซ่อน dropdown
username.addEventListener("click", toggleDropdown);
profileIcon.addEventListener("click", toggleDropdown);

// ฟังก์ชันสำหรับการแสดง/ซ่อน dropdown
function toggleDropdown() {
    dropdown.classList.toggle("show");
}

// เมื่อคลิกที่ logout ให้แสดงข้อความยืนยัน
logoutBtn.addEventListener("click", function () {
    const confirmLogout = confirm("Are you sure to logout?");
    if (confirmLogout) {
        // เปลี่ยนเส้นทางไปยังหน้า index.html
        window.location.href = "index.html";
    }
});

// ปิด dropdown หากคลิกนอก dropdown หรือ profile
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && !username.contains(event.target) && !profileIcon.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});




document.querySelector(".random-btn").addEventListener("click", function () {
    window.location.href = "random.html"; // เปลี่ยนเส้นทางไปยัง random.html
});

document.querySelector(".write-btn").addEventListener("click", function () {
    window.location.href = "own.html"; // เปลี่ยนเส้นทางไปยัง own.html
});

document.querySelector(".previous-btn").addEventListener("click", function () {
    window.location.href = "previous.html"; // เปลี่ยนเส้นทางไปยัง previous.html
});

