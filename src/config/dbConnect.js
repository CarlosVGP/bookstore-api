import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_ACESS);

const db = mongoose.connection;

export default db;
