import { BACKEND_URL } from './config.js';

export async function login(username, password) {
  // Make the login request to the backend
  const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  // Check for unsuccessful response
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  // Parse the response JSON
  const data = await response.json();

  // Store the username and token in localStorage
  localStorage.setItem('username', data.username);  
  localStorage.setItem('userToken', data.token);  

  return data;
}

// User signup
export async function signup(username, password, confirmPassword) {
  const response = await fetch(`${BACKEND_URL}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, confirmPassword }),  // Send both password and confirmPassword
  });

  if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Signup failed');
  }

  return response.json();
}


// Fetch a random resolution
export async function fetchRandomResolution() {
    const response = await fetch(`${BACKEND_URL}/api/resolutions/random`);
    if (!response.ok) throw new Error('Failed to fetch random resolution');
    return response.json();
}


export async function submitResolution(username, resolutionText) {
  const userId = localStorage.getItem('userId'); // Retrieve the user ID from localStorage

  const response = await fetch(`${BACKEND_URL}/api/resolutions`, {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}` // Add token if needed
      },
      body: JSON.stringify({ user: userId, text: resolutionText }), // Match the schema field names
  });

  if (!response.ok) throw new Error('Failed to submit resolution');
  return response.json();
}

// Fetch previous resolutions with authentication
export async function fetchPreviousResolutions(name) {
  const token = localStorage.getItem('userToken'); // Get the token from localStorage

  if (!token) {
      throw new Error('User is not authenticated');
  }

  const response = await fetch(`${BACKEND_URL}/api/resolutions?name=${encodeURIComponent(name)}`, {
      headers: {
          'Authorization': `Bearer ${token}`, // Add token in Authorization header
      }
  });

  if (!response.ok) throw new Error('Failed to fetch previous resolutions');
  return response.json();
}