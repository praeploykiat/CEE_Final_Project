import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'; // Include the .js file extension for ES Modules

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a secure secret

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords don't match" });
  }

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
});
// router.post('/signup', async (req, res) => {
//   const { username, password, confirmPassword } = req.body;

//   if (password !== confirmPassword) {
//     return res.status(400).json({ message: "Passwords don't match" });
//   }

//   try {
//     const newUser = new User({ username, password });
//     await newUser.save();
//     res.status(201).json({ message: 'Signup successful' });
//   } catch (error) {
//     res.status(400).json({ message: 'Username already exists' });
//   }
// });

// Login Route
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid username or password' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid username or password' });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
//     res.json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//       const user = await User.findOne({ username });
//       console.log("User found:", user);

//       if (!user) {
//           return res.status(400).json({ message: 'Invalid username or password' });
//       }

//       const isMatch = await bcrypt.compare(password, user.password);
//       console.log("Password match:", isMatch);

//       if (!isMatch) {
//           return res.status(400).json({ message: 'Invalid username or password' });
//       }

//       const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
//       console.log("Token created:", token);

//       res.json({ message: 'Login successful', token });
//   } catch (error) {
//       console.error("Server error during login:", error);
//       res.status(500).json({ message: 'Server error' });
//   }
// });
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
      const user = await User.findOne({ username });
      console.log("User found:", user);

      if (!user) {
          return res.status(400).json({ message: 'Invalid username or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      console.log("Password match:", isMatch);

      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid username or password' });
      }

      // Include the username in the token payload
      const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
      console.log("Token created:", token);

      res.json({ message: 'Login successful', token });
  } catch (error) {
      console.error("Server error during login:", error);
      res.status(500).json({ message: 'Server error' });
  }
});

export default router;
