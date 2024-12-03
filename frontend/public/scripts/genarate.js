/*
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

// Example: Populate the card dynamically
updateCard('JohnDoe', 'This is an example card text.');
*/
// Function to update the card dynamically

/*
function updateCard(username, text) {
    document.getElementById('username').innerText = username || 'Anonymous';
    document.getElementById('text').innerText = text || 'No resolution available';
}

// Function to fetch the latest resolution for the logged-in user
async function fetchLatestResolution() {
    const token = localStorage.getItem('userToken'); // Retrieve the token stored during login
    const username = localStorage.getItem('username'); // Retrieve the username stored during login

    if (!token) {
        alert("You need to log in to generate a resolution card.");
        window.location.href = "login.html"; // Redirect to login page
        return;
    }

    try {
        // API call to fetch user resolutions
        const response = await fetch("http://localhost:3222/resolutions", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`, // Attach the token
            },
        });

        const resolutions = await response.json();

        if (!response.ok) {
            throw new Error(resolutions.error || "Failed to fetch resolutions");
        }

        // Update the card with the latest resolution
        if (resolutions.length > 0) {
            const latestResolution = resolutions[0]; // Assuming resolutions are sorted by creation date
            updateCard(username, latestResolution.text);
        } else {
            updateCard(username, "You don't have any resolutions yet.");
        }
    } catch (error) {
        console.error("Error fetching resolutions:", error);
        alert(error.message || "An unexpected error occurred. Please try again.");
        updateCard(username, "Error loading resolution.");
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

// Fetch the latest resolution and populate the card
fetchLatestResolution();
*/
async function updateCard() {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to generate a card.');
      return;
    }
  
    try {
      const response = await fetch('/api/resolution/random', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
  
      const username = 'Anonymous'; // Replace with the actual username if available
      const resolutionText = data.text || 'No resolution available';
  
      document.getElementById('username').innerText = username;
      document.getElementById('text').innerText = resolutionText;
    } catch (err) {
      alert('Failed to fetch resolution.');
    }
  }
  
  document.getElementById('download-btn').addEventListener('click', () => {
    const card = document.getElementById('card');
    html2canvas(card).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'resolution_card.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  });
  