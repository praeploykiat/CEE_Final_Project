import mongoose from 'mongoose';

const resolutionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Resolution = mongoose.model('Resolution', resolutionSchema);

export default Resolution;
