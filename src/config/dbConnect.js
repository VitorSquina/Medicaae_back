import mongoose from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(process.env.DB_CONNECT);
  return mongoose.connection;
};

export default conectaNaDatabase;