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

    squares.forEach(square => {
        square.addEventListener('click', () => {
            const squareId = square.getAttribute('data-id');
            
            // Fetch text from the backend (replace '/getTextBySquareId' with your API endpoint)
            fetch(`/getTextBySquareId?id=${squareId}`)
                .then(response => response.json())
                .then(data => {
                    popupText.textContent = data.text || "No text available.";
                    popup.classList.remove('hidden'); // Show the popup
                })
                .catch(error => {
                    console.error('Error fetching text:', error);
                    popupText.textContent = "Error loading text.";
                    popup.classList.remove('hidden');
                });
        });
    });
});

// Close popup function
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}


