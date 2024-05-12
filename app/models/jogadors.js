import mongoose, { Schema } from "mongoose";

const jogadorSchema = new Schema(
  {
    nome: String,
    nacionalidade: String,
    rankingatual: Number,
  },
  { timestamps: true }
);

const Jogadors =
  mongoose.models.Jogadors || mongoose.model("Jogadors", jogadorSchema);

export default Jogadors;
