// === DB: User Controller ===
// --- Require dependencies ---
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// --- DB Methods ---
module.exports = {
  // Return ALL Users
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // Add an new user to the database
  createNewUser: function (req, res) {
    const userToCreate = {
      email: req.body.email,
    };
    bcrypt.hash(req.body.password, 8, (err, hashedPassword) => {
      if (err) throw new Error(err);
      console.log(hashedPassword);
      userToCreate.password = hashedPassword;
      // TODO: Will need to update this
      db.User.create(userToCreate)
        .then((newUser) => {
          const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SIGNATURE);
          res.json({ token: token });
        })
        .catch((err) => {
          res.status(500).end();
        });
    });
  },
  // Compare user credentials to submitted information to confirm identity
  loginUser: function (req, res) {
    db.User.findOne({ email: req.body.email.toLowerCase() })
      .then((foundUser) => {
        bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
          if (result) {
            const token = jwt.sign({ _id: foundUser._id }, process.env.JWT_SIGNATURE);
            res.json({ token: token });
          } else {
            res.status(401).json(err);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
