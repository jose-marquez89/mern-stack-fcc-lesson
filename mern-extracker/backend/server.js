const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

/* At the time of the tutorial, bodyParser was being used.
   According to the instruction, the new version of express
   makes using bodyParser unnecessary
*/

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

// I think this may be "middleware"
app.use(cors());
app.use(express.json());

// mongodb connection stuff
const uri = process.env.ATLAS_URI;

/* this might not be the right way to handle a promise rejection,
   regardless, it was necessary to do so. useCreateIndex was set
   to true and threw and error
*/
mongoose.connect(uri, { useNewUrlParser: true })
    .catch(err => console.log(err));

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});