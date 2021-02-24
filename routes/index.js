// === Router for Routes ===
// --- Require dependencies ---
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// --- If /api route, use defined api routes ---
router.use("/api", apiRoutes);

// --- If not /api route, deliver react ---
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;