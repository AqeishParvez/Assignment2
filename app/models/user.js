//File Name: user.js, Student Name: Aqeish Parvez, Student ID: 301225795, Date: February 14th, 2023

import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const { PassportLocalSchema } = mongoose;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    emailAddress: String,
    displayName: String,

}, {
    timestamps: true,
    collection: 'users'
})
 
UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);