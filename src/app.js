const express = require("express");
const { adminAuth, userAuth } = require("./middleware/auth");
const app = express();

app.use("/admin", adminAuth);
app.get("/admin/getUserData", (req, res) => {
  res.send("User Data");
});

app.listen(3000, () => {
  console.log("Server is successfully started in port no 3000....");
});
