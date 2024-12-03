// document.querySelector(".back-btn").addEventListener("click", function () {
//     window.location.href = "main.html"; // เปลี่ยนเส้นทางไปยัง random.html
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const cardContainer = document.getElementById("cardContainer");

//     // Function to create a card
//     const createCard = (text) => {
//         const card = document.createElement("div");
//         card.className = "card";
//         card.textContent = text; // Set card text from database
//         return card;
//     };

//     // Fetch resolutions from backend API
//     fetch('/api/resolutions')
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch resolutions');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             if (data.length > 0) {
//                 // Populate cards based on fetched data
//                 data.forEach((item) => {
//                     const newCard = createCard(item);
//                     cardContainer.appendChild(newCard);
//                 });
//             } else {
//                 // If no data, show a placeholder card
//                 const placeholderCard = createCard("No resolutions yet");
//                 cardContainer.appendChild(placeholderCard);
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             const errorCard = createCard("Error loading resolutions");
//             cardContainer.appendChild(errorCard);
//         });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const username = localStorage.getItem('username');
//     console.log('Username from localStorage:', username); // Debugging if the username is fetched
    
//     if (username) {
//         document.getElementById('username').innerText = username;
//     } else {
//         document.getElementById('username').innerText = 'Guest'; // Default username if not logged in
//     }
// });
import { BACKEND_URL } from './config.js';

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("cardContainer");
    const token = localStorage.getItem('userToken'); // Get the token from localStorage

    // Function to create a card
    const createCard = (text) => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = text; // Set card text from database
        return card;
    };

    // Fetch resolutions from backend API
    fetch(`${BACKEND_URL}/api/resolutions`, {
        headers: {
            'Authorization': `Bearer ${token}`, // Add token in Authorization header
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch resolutions');
        }
        return response.json();
    })
    .then((data) => {
        if (data.length > 0) {
            // Populate cards based on fetched data
            data.forEach((item) => {
                const newCard = createCard(item.text); // Assuming 'text' is the resolution field
                cardContainer.appendChild(newCard);
            });
        } else {
            // If no data, show a placeholder card
            const placeholderCard = createCard("No resolutions yet");
            cardContainer.appendChild(placeholderCard);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        const errorCard = createCard("Error loading resolutions");
        cardContainer.appendChild(errorCard);
    });
});

document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "main.html"; // Redirect to main.html
});

document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem('username');
    console.log('Username from localStorage:', username); // Debugging if the username is fetched
    
    if (username) {
        document.getElementById('username').innerText = username;
    } else {
        document.getElementById('username').innerText = 'Guest'; // Default username if not logged in
    }
});
