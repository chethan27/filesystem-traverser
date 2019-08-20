const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const readline = require("readline-sync");
const bodyParser = require('body-parser')

const app = express();

// middleware code
app.use(cors()); //helps in cross origin resource sharing
app.use(express.json()); //helps in parsing json
app.use(bodyParser.json());

// let port = readline.question("enter port number ");
const port = 4000;

// console.log(port);

mongoose.connect(
  "mongodb://chethan:chethan@cluster0-shard-00-00-pwmf3.gcp.mongodb.net:27017,cluster0-shard-00-01-pwmf3.gcp.mongodb.net:27017,cluster0-shard-00-02-pwmf3.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const statsRouter = require("./routes/stats");

app.use("/stats", statsRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
}); // helps in listening on a certain port
