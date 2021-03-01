// === Record Schema ===
// --- Require dependencies ---
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// --- Setting Record Schema ---
const recordSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    cloud_url: {
        type: String,
    },
    description: {
        type: String,
        trim: true,
    },
    record_type: {
        type: String,
        required: "Record type required"
    },
})

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;