import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    login: {type: String, lowercase: true, index: true},
    password: String
});