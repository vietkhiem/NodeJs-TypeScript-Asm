import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        unique: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    thumnail: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true })
productSchema.index({ "$**": 'text' });

export default mongoose.model('Product', productSchema);