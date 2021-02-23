// === Router for API Routes ===
// --- Require dependencies ---
const router = require("express").Router();
const eventRoutes = require("./events");

// --- Events: /api/events Routes ---
router.use("/events", eventRoutes);

// --- File: /api/files Routes ---

// --- User: /api/users Routes

module.exports = router;