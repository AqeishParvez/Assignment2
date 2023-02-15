//File Name: businesscontacts.js, Student Name: Aqeish Parvez, Student ID: 301225795, Date: February 14th, 2023
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BusinessContactsSchema = new Schema({
    name: String,
    phonenumber: Number,
    email: String,
}, {
    timestamps: true,
    collection: "businesscontacts"
});

export default mongoose.model("BusinessContacts", BusinessContactsSchema);