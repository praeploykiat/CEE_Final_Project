/*import "dotenv/config";
import "./config/db.js";

import app from "./app.js";

// This is for maintaining the server.
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  console.log(err.stack);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(`${err}`);
  server.close(() => {
    process.exit(1);
  });
});

const PORT = 3222;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend Server ready at http://localhost:${PORT}`);
});
*/

import mongoose from 'mongoose';
import app from './app.js';

const uri = 'mongodb+srv://praeploy05:pauli1405@cluster0.fqkyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// MongoDB Connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start Server
const PORT = 3222;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});