// === Server ===
// --- Require Express ---
const express = require("express");
// --- Require Mongoose ---
const mongoose = require("mongoose");
// --- Initialize Express app ---
const app = express();

// --- Set Express PORT ---
const PORT = process.env.PORT || 3001;

// --- Express Middleware ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- Mongoose/MongoDB connection settings ---
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:watchdawg", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// --- Server Routes ---
// GET: Config route, confirm server live
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// --- Listen on designated port ---
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
