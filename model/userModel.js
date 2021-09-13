import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 30,
      unique: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      max: 50
    },

    password: {
      type: String,
      required: true,
      min: 6
    },

    profilePicture: {
      type: String,
      default: ''
    },

  },

  {
    timestamps: true
  }

);

UserSchema.plugin(uniqueValidator);
const User = mongoose.model('User', UserSchema);
export default User;