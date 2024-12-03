import express from 'express';
import jwt from 'jsonwebtoken';
import Resolution from '../models/resolutionModel.js';
import User from '../models/userModel.js';

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret_key';

// Middleware to authenticate
function auth(req, res, next) {
    const authHeader = req.headers['authorization']; // Get the Authorization header
    console.log("Authorization Header Received:", authHeader); // Log the header

    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log("Authorization Header Missing or Invalid");
        return res.status(401).json({ error: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1]; // Extract the token part after "Bearer"
    console.log("Token Extracted:", token);
    
    try {
      const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
      console.log("Decoded Token:", decoded);
      req.userId = decoded.id; // Attach the user ID to the request object
      next(); // Pass control to the next middleware or route handler
    } catch (err) {
      console.error("Token Verification Error:", err.message);
      res.status(403).json({ error: 'Invalid token' });
    }
  }
  
/*function auth(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
}*/

// Add a resolution
router.post('/', auth, async (req, res) => {
  const { text } = req.body;
  try {
    const resolution = new Resolution({ user: req.userId, text });
    await resolution.save();
    res.status(201).json({ message: 'Resolution added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add resolution' });
  }
});

// Get random resolution
router.get('/random', async (req, res) => {
  try {
    const resolutions = await Resolution.find();
    const randomResolution = resolutions[Math.floor(Math.random() * resolutions.length)];
    res.json({ text: randomResolution ? randomResolution.text : 'No resolutions available' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch resolutions' });
  }
});

// Get user resolutions
router.get('/', auth, async (req, res) => {
  try {
    const resolutions = await Resolution.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(resolutions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch resolutions' });
  }
});

// In your backend, modify the route to fetch the latest resolution for the logged-in user:
router.get('/latest', async (req, res) => {
  const userId = req.user.id; // Assuming you have user authentication set up
  
  try {
      const resolution = await Resolution.findOne({ user: userId }).sort({ createdAt: -1 }); // Sort by createdAt, descending
      if (!resolution) {
          return res.status(404).json({ message: 'No resolution found for the user.' });
      }
      res.json(resolution);
  } catch (err) {
      res.status(500).json({ message: 'Error fetching latest resolution' });
  }
});

export default router;
