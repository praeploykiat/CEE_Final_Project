function validateSignup(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");

    // Check if username exists in the database
    if (existingUsernames.includes(username)) {
        popupMessage.textContent = "Username already exists. Please choose a different one.";
        popup.style.display = "flex"; // Show the popup
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        popupMessage.textContent = "Password and Confirm Password do not match.";
        popup.style.display = "flex"; // Show the popup
        return;
    }

    // If all validations pass
    popupMessage.textContent = "Signup successful!";
    popup.style.display = "flex"; // Show the popup

    // Simulate adding the new user to the database
    existingUsernames.push(username);
    console.log("New Usernames Database:", existingUsernames);
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Hide the popup
}
