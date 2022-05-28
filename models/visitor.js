import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
  ip: { type: String, unique: true },
  location: { type: String },
});

const Visitor =
  mongoose.models.Visitor || mongoose.model('Visitor', visitorSchema);
export default Visitor;
