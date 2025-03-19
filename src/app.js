const express = require("express");

const connectDb = require("./config/database");
const { User } = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("data save successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

connectDb()
  .then(() => {
    console.log("Datebase is connected successfully");
    app.listen(3000, () => {
      console.log("Server is successfully started in port no 3000....");
    });
  })
  .catch((err) => {
    console.error("Error not connected");
  });
