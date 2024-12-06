import { signup } from './api.js'; // Ensure the path is correct

const validateSignup = async (event) => {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // Validate if passwords match before making the API call
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }

    try {
        console.log("Calling signup API...");
        // Pass both username and password (and confirmPassword in case backend needs it)
        const response = await signup(username, password, confirmPassword); 
        
        if (response && response.message === "Signup successful") {
            alert("Signup successful!");
            //console.log("Redirecting to main page...");
            window.location.href = "index.html"; // Redirect to the main page after signup
        } else {
            alert("Signup failed: " + (response.message || "Unknown error"));
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert(error.message || "Signup failed.");
    }
};

// Ensure DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", validateSignup);
});
