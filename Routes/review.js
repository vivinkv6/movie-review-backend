const express = require("express");
const {postMovieReview,getMovies,getMovie,updateMovie,deleteMovie}=require('../controllers/movieController');
const router = express.Router();


//get all movie reviews
router.get("/", getMovies);

//get a single movie review
router.get("/:id",getMovie);

//post a review
router.post("/", postMovieReview);

//delete a single review
router.delete("/:id", deleteMovie);

//update a single review
router.patch("/:id", updateMovie);

module.exports = router;
