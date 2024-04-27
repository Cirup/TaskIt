import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    task: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref:"Task" }],
})

const User = mongoose.model("User", userModel);

export default User;