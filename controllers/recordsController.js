// === DB: Record Controller ===
// --- Require dependencies ---
const db = require("../models");

// --- DB Methods ---
module.exports = {
    // Return ALL Records
    findAll: function (req, res) {
        db.Record.find(req.query)
          .sort({ date: -1 })
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Record.create(req.body)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Record.findById(req.params.id)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
    }
}