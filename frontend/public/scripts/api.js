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
  localStorage.setItem('username', data.username);  // Store username
  localStorage.setItem('userToken', data.token);  // Store token (if applicable)

  // Return the response data (optional, depending on how you want to use it)
  return data;
}

// User signup
export async function signup(username, password) {
  const response = await fetch(`${BACKEND_URL}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),  // Just send username and password
  });

  if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Signup failed');
  }

  return response.json();
}

// Fetch a random resolution
export async function fetchRandomResolution() {
    const response = await fetch(`${BACKEND_URL}/resolutions/random`);
    if (!response.ok) throw new Error('Failed to fetch random resolution');
    return response.json();
}

// Submit a new resolution
export async function submitResolution(name, resolution) {
    const response = await fetch(`${BACKEND_URL}/resolutions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, resolution }),
    });
    if (!response.ok) throw new Error('Failed to submit resolution');
    return response.json();
}

// Fetch previous resolutions
export async function fetchPreviousResolutions(name) {
    const response = await fetch(`${BACKEND_URL}/resolutions?name=${encodeURIComponent(name)}`);
    if (!response.ok) throw new Error('Failed to fetch previous resolutions');
    return response.json();
}
