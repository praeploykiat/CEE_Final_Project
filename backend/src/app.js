import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import resolutionRoutes from './routes/resolutionRoutes.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());  // Body parser for JSON payloads


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resolutions', resolutionRoutes);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

export default app;
