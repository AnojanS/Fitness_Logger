//establishing dependency requirements
const express = require('express');
const cors = require('cors');

//configuring environment variables into dotenv file
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

//allowing the parsing of JSON in and out of server
app.use(cors());
app.use(express.json());

//starting server
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});