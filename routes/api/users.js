// === Users Router ===
// --- Require dependencies ---
const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// --- Routes ---
router
  .route("/")
  .get(usersController.findAll);

  module.exports = router;