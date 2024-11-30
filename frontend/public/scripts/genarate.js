// script.js

// Function to update the card dynamically
function updateCard(username, text) {
    document.getElementById('username').innerText = username;
    document.getElementById('text').innerText = text;
}

// Function to generate PNG and download it
document.getElementById('download-btn').addEventListener('click', () => {
    const card = document.getElementById('card');
    html2canvas(card).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "main.html"; // เปลี่ยนเส้นทางไปยัง random.html
});


// Example: Populate the card dynamically
updateCard('JohnDoe', 'This is an example card text.');

