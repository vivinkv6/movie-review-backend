require("dotenv").config();
const express = require("express");
const movieReview = require("./Routes/review");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');




app.use(express.json());

app.use(cors());

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
