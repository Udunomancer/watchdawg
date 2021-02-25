// === Records Route ===
// --- Require dependencies ---
const router = require ("express").Router();
const recordsController = require("../../controllers/recordsController");

// --- Routes ---
router
  .route("/")
  .get(recordsController.findAll)
  .post(recordsController.create);

router
  .route("/:id")
  .get(recordsController.findById)
  .put(recordsController.update)
  .delete(recordsController.remove);

module.exports = router;