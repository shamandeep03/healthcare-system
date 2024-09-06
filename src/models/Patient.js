import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  contact: {
    phone: String,
    email: String,
  },
  medicalHistory: [String],
  prescriptions: [{
    doctorId: mongoose.Schema.Types.ObjectId,
    medication: String,
    dosage: String,
    date: Date,
  }],
  appointments: [{
    doctorId: mongoose.Schema.Types.ObjectId,
    date: Date,
    reason: String,
  }],
}, { timestamps: true });

export default mongoose.models.Patient || mongoose.model('Patient', patientSchema);
