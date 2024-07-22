import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
})

const User = mongoose.model("User", userModel);

export default User;