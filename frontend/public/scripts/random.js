document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "main.html"; // เปลี่ยนเส้นทางไปยัง random.html
});

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
        square.addEventListener('click', () => {
            // Remove the 'selected' class from all squares
            squares.forEach(sq => sq.classList.remove('selected'));
            
            // Add the 'selected' class to the clicked square
            square.classList.add('selected');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    // Mock dataset for testing
    const mockDatabase = {
        1: "Hello from square 1!",
        2: "This is square 2's text.",
        3: "Square 3 says hi!",
        4: "You're viewing square 4.",
        5: "Text for square 5 here.",
    };

    squares.forEach(square => {
        square.addEventListener('click', () => {
            const squareId = square.getAttribute('data-id');
            
            // Fetch text from the mock dataset
            const text = mockDatabase[squareId] || "No text available for this square.";
            
            // Display the text in the popup
            popupText.textContent = text;
            popup.classList.remove('hidden'); // Show the popup
        });
    });
});

// Close popup function
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden'); // Hide the popup
}

