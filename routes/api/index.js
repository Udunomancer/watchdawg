// === Router for API Routes ===
// --- Require dependencies ---
const router = require("express").Router();
const eventRoutes = require("./events");
const recordRoutes = require("./records");
const userRoutes = require("./users");

// --- Events: /api/events Routes ---
router.use("/events", eventRoutes);

// --- File: /api/records Routes ---
router.use("/records", recordRoutes);

// --- User: /api/users Routes
router.use("/users", userRoutes);

module.exports = router;