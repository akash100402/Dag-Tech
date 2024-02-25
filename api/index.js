import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(
  process.env.MONGO_URI
).then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });



const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})