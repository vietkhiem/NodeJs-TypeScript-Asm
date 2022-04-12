import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        unique: true,
        index: true
    },
    price: {
        type: Number,

    },
    img: {
        type: String,

    },
    desc: {
        type: String,

    },
    category: {
        type: ObjectId,
        ref: "Category"

    }
}, { timestamps: true })
productSchema.index({ "$**": 'text' });

export default mongoose.model('Product', productSchema);