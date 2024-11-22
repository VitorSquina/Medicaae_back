import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "O nome do usuário é obrigatório"] }, // Verifique se está preenchido corretamente
  cpf: { type: String, required: [true, "O CPF é obrigatório"], unique: true },
  email: { type: String, required: [true, "O e-mail é obrigatório"], unique: true },
  password: { type: String, required: [true, "A senha pé obrigatória"] },
});

const user = mongoose.model("user", userSchema);
export default user;
