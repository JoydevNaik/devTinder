const express = require("express");
const { adminAuth, userAuth } = require("./middleware/auth");
const app = express();

app.use("/admin", adminAuth);
app.get("/admin/getUserData", (req, res) => {
  //try {
  throw new console.error("gsahgahjabj");

  res.send("User Data");
  //} catch (err) {
  //  res.status(500).send("Something went wrong!!");
  //}
});
app.use("/", (err, req, res, next) => {
  res.status(500).send("Something new went wrong!!");
});

app.listen(3000, () => {
  console.log("Server is successfully started in port no 3000....");
});
