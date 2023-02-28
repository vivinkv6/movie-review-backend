
const movieReview = require("../models/movieModel");
const mongoose=require('mongoose');

//Get All Movies

const getMovies=async(req,res)=>{
    const movies = await movieReview.find({}).sort({updatedAt:-1});
    res.json(movies);
}

//Get a Movie

const getMovie=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
       return res.status(404).json("ID Not Found")
    }

    const movie = await movieReview.findById({_id:id});

    if(!movie)
    {
        return res.status(404).json("Movie Not Found")
    }
    res.json(movie);
}


//Post a Movie

const postMovieReview=async (req, res) => {
    const { title, description, rating } = req.body;
    const postMovie = await movieReview.create({ title, description, rating });
    res.json(postMovie);
  }


  //update a movie

  const updateMovie=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
       return res.status(404).json("ID Not Found")
    }

    const movie = await movieReview.findByIdAndUpdate({_id:id},{...req.body});

    if(!movie)
    {
        return res.status(404).json("Update Failure")
    }
    res.json(movie);
}


//delete a  movie

const deleteMovie=async(req,res)=>{

    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
       return res.status(404).json("ID Not Found")
    }

    const movie = await movieReview.findByIdAndDelete({_id:id});

    if(!movie)
    {
        return res.status(404).json("Deletion Failure")
    }
    res.json(movie);

}

  module.exports={
    getMovies,
    getMovie,
    postMovieReview,
    updateMovie,
    deleteMovie
  }