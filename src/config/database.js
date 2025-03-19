const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://joydevnaik09:dfAAHU8rO4gFpPbo@learnmongodb.izchm.mongodb.net/devTinder"
  );
};
module.exports = connectDb;
