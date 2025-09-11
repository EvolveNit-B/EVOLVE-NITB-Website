import mongoose, { Schema } from "mongoose";
import Counter from "./Counter.js";

const userSchema = new Schema(
  {
    serial: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Email is required"],
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Email is required"],
      unique: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    phone_no: {
      type: String,
      trim: true,
      required: [true, "Phone no is required"],
      minlength: [10, "Phone number must be at least 10 digits"],
      maxlenght: [15, "Phone number must not exceed 15 digits"],
      match: [/^\d+$/, "Phone number must contain only digits"],
      unique: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      let userCounter = await Counter.findOne({ id: "user" });
      if (!userCounter) {
        userCounter = await new Counter({
          id: "user",
        }).save();
      }
      const counter = await Counter.findOneAndUpdate(
        { id: "user" },
        { $inc: { sequence_value: 1 } },
        { new: true }
      );
      this.serial = counter.sequence_value;
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
