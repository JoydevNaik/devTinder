const adminAuth = (req, res, next) => {
  const adminAuthorization = "xyz";
  const authorization = adminAuthorization === "xyz";
  if (!authorization) {
    res.status(401).send("Unauthorized access!!");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const userAuthorization = "xyz";
  const authorization = userAuthorization === "xyz";
  if (!authorization) {
    res.status(401).send("Unauthorized access!!");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
