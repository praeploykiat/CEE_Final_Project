document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "main.html"; // เปลี่ยนเส้นทางไปยัง random.html
});
document.querySelector(".next-btn").addEventListener("click", function () {
    window.location.href = "genarate.html"; // เปลี่ยนเส้นทางไปยัง random.html
});

document.addEventListener("DOMContentLoaded", () => {
    // Simulating database data
    const databaseData = [
        "First resolution",
        "First resolution",
        "Second resolution",
        "Third resolution",
        "First resolution",
        "Second resolution",
        "Third resolution",
    ]; // Replace this with your actual database query result

    const cardContainer = document.getElementById("cardContainer");

    // Function to create a card
    const createCard = (text) => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = text; // Set card text from database
        return card;
    };

    // Populate cards based on database data
    if (databaseData.length > 0) {
        databaseData.forEach((item) => {
            const newCard = createCard(item);
            cardContainer.appendChild(newCard);
        });
    } else {
        // If no data in the database, show a placeholder card
        const placeholderCard = createCard("No resolutions yet");
        cardContainer.appendChild(placeholderCard);
    }
});
