// === Records Route ===
// --- Require dependencies ---
const router = require ("express").Router();
const recordsController = require("../../controllers/recordsController");

// --- Routes ---
router
  .route("/")
  .get(recordsController.findAll);

module.exports = router;