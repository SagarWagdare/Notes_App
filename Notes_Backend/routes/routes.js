const express = require("express");
const app = express();
const operations= require("./operations/operations")
app.use("/operation",operations)

module.exports = app