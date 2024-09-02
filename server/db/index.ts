import mongoose, { Schema, Document } from "mongoose";

interface UserDocument extends Document {
    username: string;
    password: string;
}

const UserSchema: Schema<UserDocument> = new mongoose.Schema({
    username: { type: String},
    password: { type: String}
});

export const User = mongoose.model<UserDocument>('User', UserSchema);
