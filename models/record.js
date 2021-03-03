// === Record Schema ===
// --- Require dependencies ---
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// --- Setting Record Schema ---
const recordSchema = new Schema({
    cloud_url: {
        type: String,
    },
    record_type: {
        type: String,
    },
    fileTitle: {
        type: String,
        trim: true,
    },
    fileDescription: {
        type: String,
        trim: true,
    },
    fileDate: {
        type: Date
    },
    fileLatitude: {
        type: Number
    },
    fileLongitude: {
        type: Number
    },
    fileAddressOne: {
        type: String,
        trim: true
    },
    fileAddressTwo: {
        type: String,
        trim: true
    },
    fileCity: {
        type: String,
        trim: true
    },
    fileState: {
        type: String,
        trim: true
    },
    fileZip: {
        type: String,
        trim: true
    },
    fileCountry: {
        type: String,
        trim: true
    }
})

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;