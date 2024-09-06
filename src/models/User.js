import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'doctor', 'patient'], default: 'patient' },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);
