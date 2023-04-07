import { model, Schema } from 'mongoose';

export interface IUser {
  name: string;
  slug: string;
  email: string;
  phone: string;
  profileImg: string;
  password: string;
  role: string;
  active: Boolean;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'name required'],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'email required'],
      unique: true,
      lowercase: true,
    },
    phone: String,
    profileImg: String,

    password: {
      type: String,
      required: [true, 'password required'],
      minlength: [6, 'Too short password'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const UserModel = model<IUser>('User', UserSchema, 'users');

export default UserModel;