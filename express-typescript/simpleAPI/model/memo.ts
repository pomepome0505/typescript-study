import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  message: String,
  checked: Boolean,
});

const model = mongoose.model('memo', schema);
export default model;