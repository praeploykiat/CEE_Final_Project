import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; //Creates and verifies tokens for user authentication.
import User from '../models/userModel.js'; // Include the .js file extension for ES Modules

// JWT is stateless: It encodes the user's session data into the token itself, eliminating the need for server-side storage. 
//verify who is logged in

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a secure secret

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords don't match" });
  }

  try {
    const newUser = new User({ username, password }); // create user
    await newUser.save(); //save to database
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(400).json({ message: 'Username already exists' });
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

      const isMatch = await bcrypt.compare(password, user.password); //Compares the provided password with the hashed password in the database using bcrypt.compare().
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
