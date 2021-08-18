const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8030;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const URL = process.env.MONGODB_URL;




const connect = () =>
  mongoose
    .connect(URL, {
        useCreateIndex: true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
    .catch((err) => console.error(err.message))

connect()
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!!')
});

app.listen(PORT,() =>{
    console.log(`Server is up and running on port number: ${PORT}`)
})