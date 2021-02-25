// === Record Schema ===
// --- Require dependencies ---
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// --- Setting Record Schema ---
const recordSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Enter a title for the Record",
    },
    cloud_url: {
        type: String,
        required: "Cloudinary URL required",
    },
    description: {
        type: String,
        trim: true,
    },
    record_type: {
        type: String,
        required: "Record type required"
    },
    event_id: {
        type: Schema.Types.ObjectId,
        ref: "Event"
    },
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;