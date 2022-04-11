import mongoose, { Schema } from "mongoose";
import { createHmac } from 'crypto';
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30,
        unique: true,
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

userSchema.methods = {
        authenticate(password) {
            return this.password == this.encrytPassword(password);
        },
        encrytPassword(password) {
            if (!password) return
            try {
                return createHmac("sha256", "abcs").update(password).digest("hex");
            } catch (error) {
                console.log(error)
            }
        }
    }
    // trước khi execute .save() thì chạy middleware sau.
userSchema.pre("save", function(next) {
    this.password = this.encrytPassword(this.password);
    next();
})
export default mongoose.model('User', userSchema);