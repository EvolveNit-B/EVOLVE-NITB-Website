import mongoose, { Schema } from "mongoose";

const counterSchema = new Schema({
  id: { type: String, required: true },
  sequence_value: { type: Number, default: 10000, required: true },
});

const Counter = mongoose.models.Counter || mongoose.model("Counter", counterSchema);

export default Counter;