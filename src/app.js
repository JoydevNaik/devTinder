const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Welcome to my server");
});

app.use("/test", (req, res) => {
  res.send("Hello Hello");
});

app.listen(3000, () => {
  console.log("Server is successfully started in port no 3000....");
});
