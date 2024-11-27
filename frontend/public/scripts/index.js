function validateLogin(event) {
  event.preventDefault(); // Prevent form submission
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Replace with actual validation logic
  if (username !== "correctUsername" || password !== "correctPassword") {
      showPopup();
  } else {
      alert("Login successful!"); // Redirect or handle success
  }
}

function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

