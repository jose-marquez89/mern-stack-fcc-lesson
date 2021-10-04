const express = require('express');
const cors = require('cors');

/* At the time of the tutorial, bodyParser was being used.
   According to the instruction, the new version of express
   makes using bodyParser unnecessary
*/

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});