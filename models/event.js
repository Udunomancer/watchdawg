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
  date: {
    type: Date
  },
  latitude: {
    type: Number,
    required: "Both latitude and longitude are required.",
  },
  longitude: {
    type: Number,
    required: "Both latitude and longitude are required.",
  },
  addressOne: {
    type: String,
    trim: true
  },
  addressTwo: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  zip: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  records: [
    {
      type: Schema.Types.ObjectId,
      ref: "Record",
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
