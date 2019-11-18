//establishing dependency requirements
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//configuring environment variables into dotenv file
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

//allowing JSON parsing in and out of server
app.use(cors());
app.use(express.json());

//connecting to mongoDB database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("successfully connected to MongoDB database");
})

//import exercises and users router
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//starting server
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});