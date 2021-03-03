// === DB: Record Controller ===
// --- Require database models ---
const db = require("../models");
// --- Require cloudinary SDK ---
const cloudinary = require("cloudinary").v2;

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
    console.log(req.body.file);
    db.Record.create({
      fileTitle: req.body.fileTitle,
      fileDescription: req.body.fileDescription,
      fileLatitude: req.body.fileLatitude,
      fileLongitude: req.body.fileLongitude,
      fileAddressOne: req.body.fileAddressOne,
      fileAddressTwo: req.body.fileAddressTwo,
      fileCity: req.body.fileCity,
      fileState: req.body.fileState,
      fileZip: req.body.fileZip,
      fileCountry: req.body.fileCountry
    })
      // .then((dbModel) => {
      //   console.log(dbModel);
      //   cloudinary.uploader.upload(
      //     req.body.file,
      //     { public_id: dbModel._id,
      //     resource_type: "auto" },
      //     function (error, result) {
      //       console.log(result, error);
      //     }
      //   );
      // })
      // .then((cloudObject) => {
      //   console.log(cloudObject);
      //   db.Record.findOneAndUpdate(
      //     { _id: cloudObject.public_id },
      //     {
      //       record_type: cloudObject.resource_type,
      //       cloud_url: cloudObject.url,
      //     }
      //   );
      // })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Record.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Record.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Record.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
