import mongoose from 'mongoose';
import bcrypt from 'bcrypt'; //for hashing and verifying passwords securely

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Hash password before saving the user in database - cannot be reversed to its original form
userSchema.pre('save', async function (next) { //Mongoose middleware that triggers before a document is saved to the database
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10); // salt round determines how many times the hashing process is applied
  next();
});

// Creating the Model
const User = mongoose.model('User', userSchema);

// Exporting the Model
export default User;
