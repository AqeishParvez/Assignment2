//File Name: movies.js, Student Name: Aqeish Parvez, Student ID: 301225795, Date: February 14th, 2023
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: String,
    year: Number,
    director: String,
    genre: String,
    runtime: Number

}, {
    timestamps: true,
    collection: "movies"
});

export default mongoose.model("Movies", MovieSchema);