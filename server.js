require("dotenv").config();

const express = require("express");
const path = require("path");

const app = require("./app");

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`PackComply running on ${port}`);
});
