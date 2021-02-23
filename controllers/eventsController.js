// === DB: Event Controller ===
// --- Require dependencies ---
const db = require("../models");

// --- DB Methods ---
module.exports = {
  // Return ALL Events
  findAll: function (req, res) {
    db.Event.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // Return ONE Event identified by passed in id
  findById: function (req, res) {
    db.Event.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // Creates NEW Event based on request body
  create: function (req, res) {
    db.Event.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // Updates Event identified with passed in id with request body
  update: function (req, res) {
    db.Event.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // Removes ONE Event identified by passed in id
  remove: function (req, res) {
    db.Event.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
