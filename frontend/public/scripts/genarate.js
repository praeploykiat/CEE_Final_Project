import { BACKEND_URL } from './config.js';

document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "main.html"; // Navigate back to main page
});

async function updateCard() {
    const token = localStorage.getItem('userToken');
    const username = localStorage.getItem('username'); // Retrieve username from localStorage

    if (!token || !username) {
        alert('You must be logged in to generate a card.');
        return;
    }

    try {
        const response = await fetch(`${BACKEND_URL}/api/resolutions`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });

        // Check if the response is not JSON (e.g., HTML error page)
        if (!response.ok) {
            throw new Error('Failed to fetch resolutions: ' + response.statusText);
        }

        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Expected JSON but received: ' + contentType);
        }

        const data = await response.json();

        // Filter the latest resolution based on createdAt
        const latestResolution = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

        if (!latestResolution) {
            throw new Error('No resolution found for the user');
        }

        // Update the card with the latest resolution
        const resolutionText = latestResolution.text || 'No resolution available';
        document.getElementById('username').innerText = username;
        document.getElementById('resolutionText').innerText = resolutionText;

    } catch (err) {
        alert('Failed to fetch resolution: ' + err.message);
    }
}

// Function to generate PNG and download it
document.getElementById('download-btn').addEventListener('click', () => {
    const card = document.getElementById('card');
    html2canvas(card).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'resolution-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

updateCard();
