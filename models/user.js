// === User Schema ===
// --- Require dependencies ---
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// --- Setting User Schema ---
const userSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    user_name: {
        type: String,
        trim: true,
        required: "Username is a required field",
    },
    password: {
        type: String,
        trim: true,
        required: "Password is a required field",
    },
    email: {
        type: String,
        trim: true,
        required: "Email is a required field",
    },
    user_role: {
        type: Boolean,
    },
    admin_role: {
        type: Boolean,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;