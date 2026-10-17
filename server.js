require("dotenv").config();

const express = require("express");
const path = require("path");

const app = require("./app");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`PackComply running on ${port}`);
});
