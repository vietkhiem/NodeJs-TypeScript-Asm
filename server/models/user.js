import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const userchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,

    },
    email: {
        type: String,
        unique: true

    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('user', userchema);