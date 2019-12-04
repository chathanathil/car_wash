const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const ObjectID = require("mongodb").ObjectID;

// Load User Model
const User = require("../../models/User");

// Load Work Model
const Work = require("../../models/Work");

router.get("/test", (req, res) => res.json({ msg: "search Works" }));

// @route GET api/search/:query
// @desc Search car
// @access Public
router.get(
  "/:query",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Work.aggregate([
      {
        $match: {
          vno: { $regex: req.params.query, $options: "i" }
        }
      }
      // {$limit:4}
    ])
      .then(work => {
        res.json(work);
      })
      .catch(err => res.status(404).json({ msg: "not found" }));
  }
);

module.exports = router;
