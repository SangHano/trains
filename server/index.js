const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 3005;

//Middleware to format body into JSON
app.use(require("body-parser").json());

//Middleware for logging
app.use(require("morgan")("dev"));

app.use((req, res, next) => {

  //Check if the authorization header is valid
  const auth = req.headers.authorization;

  //Grabs the token if it exists
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;

  try{
    //Decode token to find the user's id
    const { id } = jwt.verify(token, process.env.JWT);
    //set userID on the request
    req.userId = id;
  }
  catch{
    req.userId = null;
  }

  //Send the request to the next function
  next();
});

//middleware to serve static files
app.use(express.static(path.join(__dirname, "..", "client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/dist/index.html"));
});

app.use("/api", require("./api"));
app.use("/auth", require("./auth"));

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is up and running and listening on port ${PORT}`);
  } else {
    console.log(`Something went wrong`);
  }
});
