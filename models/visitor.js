import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
  ip: { type: String, unique: true },
  location: { type: String },
});

const Visitor =
  mongoose.models.Visitor || mmongoose.model('Visitor', visitorSchema);
export default Visitor;
