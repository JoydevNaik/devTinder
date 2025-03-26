const express = require("express");
const connectDb = require("./config/database");
const authRouter = require("../routes/authRoutes");
const profileRouter = require("../routes/profileRoutes");

const app = express();

app.use(express.json());
app.use("/", authRouter);
app.use("/", profileRouter);

connectDb()
  .then(() => {
    console.log("Datebase is connected successfully");
    app.listen(3000, () => {
      console.log("Server is successfully started in port no 3000....");
    });
  })
  .catch((err) => {
    res.status(400).send(err.message);
  });
