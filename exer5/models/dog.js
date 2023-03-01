import mongoose from "mongoose"

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    breed: {
        type: String
    },
    dateEnter: {
        type: Date,
        required: true
    },
    dateAdopt: {
        type: Date,
    }
})

export default mongoose.model("Dog", dogSchema)