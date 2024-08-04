import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.String,
    },
})

const User = mongoose.model("User", userModel);

export default User;