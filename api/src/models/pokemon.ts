import { Schema, model } from "mongoose";

const pokemonSchema = new Schema({
    id: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    height: {
        type: String,
        required: true,
        trim: true,
    },
    weight: {
        type: String,
        required: true,
        trim: true,
    },
    img: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    versionKey: false,
    timestamps: false,
});

export default model('Pokemon', pokemonSchema);