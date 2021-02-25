// === Events Router ===
// --- Require dependencies ---
const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// --- Routes ---
router
  .route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

router
  .route("/:id/records")
  .get(eventsController.findEventRecordsWithId)

module.exports = router;