// === DB: User Controller ===
// --- Require dependencies ---
const db = require("../models");

// --- DB Methods ---
module.exports = {
    // Return ALL Users
    findAll: function (req, res) {
        db.User.find(req.query)
          .sort({ date: -1 })
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
    },
    
}