import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Verifique se está preenchido corretamente
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const user = mongoose.model("user", userSchema);
export default user;
