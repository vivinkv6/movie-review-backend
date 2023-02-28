const express = require("express");

const router = express.Router();

const movieReview = require("../models/movieModel");

//get all movie reviews
router.get("/", (req, res) => {
  res.json({ msg: "get all movies" });
});

//get a single movie review
router.get("/:id", (req, res) => {});

//post a review
router.post("/", async (req, res) => {
  const { title, description, rating } = req.body;
  const model = await movieReview.create({ title, description, rating });
  res.json(model);
});

//delete a single review
router.delete("/:id", (req, res) => {});

//update a single review
router.patch("/:id", (req, res) => {});

module.exports = router;
