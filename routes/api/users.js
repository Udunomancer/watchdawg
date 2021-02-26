// === Users Router ===
// --- Require dependencies ---
const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// --- Routes ---
// GET: Find all users
router
  .route("/")
  .get(usersController.findAll);

// POST: Add a new user
router.route("/signup").post(usersController.createNewUser);

// POST: Login an existing user
router.route("/login").post(usersController.loginUser);

module.exports = router;