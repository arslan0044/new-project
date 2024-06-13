import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  isMerchant:{
    type:Boolean,
    default:false
  },
  name: {
    type: String,
    trim: true, // Remove leading/trailing whitespace
  },
  phone_number: {
    type: String,
    trim: true, // Remove leading/trailing whitespace (optional)
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
