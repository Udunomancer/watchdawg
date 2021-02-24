// === Event Schema ===
// --- Require dependencies ---
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// --- Setting Event Schema ---
const eventSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Enter a title for the event",
    },
    description: {
        type: String,
        trim: true,
    },
    latitude: {
        type: Number,
        required: "Both latitude and longitude are required.",
    },
    longitude: {
        type: Number,
        required: "Both latitude and longitude are required.",
    },
    time: {
        type: Date,
        // required: "A Time-stamp is required for an event.",
    },
    files: {
        type: Array
    },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;