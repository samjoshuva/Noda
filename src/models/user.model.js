import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  about: {
    type: String
  },
  dateOfBirth: {
    type: Date
  }
});

export default model("User", userSchema);
