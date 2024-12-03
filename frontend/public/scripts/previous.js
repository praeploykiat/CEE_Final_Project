document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "main.html"; // เปลี่ยนเส้นทางไปยัง random.html
});


document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("cardContainer");

    // Function to create a card
    const createCard = (text) => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = text; // Set card text from database
        return card;
    };

    // Fetch resolutions from backend API
    fetch('/api/resolutions')
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
                    const newCard = createCard(item);
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

