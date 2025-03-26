const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const { token } = cookies;
    if (!token) {
      throw new Error("Invalid Token");
    }
    const decodedMessage = await jwt.verify(token, "DevTinder@123");
    const { _id } = decodedMessage;
    const user = await User.findById(_id);
    res.send(user);
    if (!user) {
      throw new Error("User not found!!");
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  userAuth,
};
