import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    randomString: { type: String },
    role: { type: String },
  },
  { versionKey: false }
);

export default mongoose.model("User", userSchema);
