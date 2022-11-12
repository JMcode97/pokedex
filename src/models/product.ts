import { Schema, model } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});

export default model('Product', productSchema);