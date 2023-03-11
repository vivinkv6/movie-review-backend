require("dotenv").config();
const express = require("express");
const movieReview = require("./Routes/review");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: 'https://movie-review.cyclic.app/api',
  optionsSuccessStatus: 200
}



app.use(cors());

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", movieReview);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server and Database Run `);
    });
  })
  .catch((err) => {
    console.log(err);
  });
