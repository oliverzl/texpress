const express = require("express");

//INIT EXPRESS

const app = express();

//CREATE ENDPOINTS/ROUTE HANDLERS
app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

//LISTEN ON PORT
app.listen(5000);
