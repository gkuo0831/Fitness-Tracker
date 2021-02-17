const Workout = require("../models/workout.js");
const router = require("express").Router();

router.get("/api/workout", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
