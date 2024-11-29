// ฟังก์ชัน toggle dropdown (เปิด/ปิด เมนู)
function toggleDropdown() {
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
console.log(username);  





document.querySelector(".random-btn").addEventListener("click", function () {
    window.location.href = "random.html"; // เปลี่ยนเส้นทางไปยัง random.html
});

document.querySelector(".write-btn").addEventListener("click", function () {
    window.location.href = "own.html"; // เปลี่ยนเส้นทางไปยัง own.html
});

document.querySelector(".previous-btn").addEventListener("click", function () {
    window.location.href = "previous.html"; // เปลี่ยนเส้นทางไปยัง previous.html
});
