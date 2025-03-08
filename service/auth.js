const jwt = require("jsonwebtoken");
const secretKey = "Saad$`%@2";

function setUser(user) {
  // sessionIdToUserMap.set(id, user);
  const payload = {
    _id: user._id,
    ...user,
  };

  return jwt.sign(payload, secretKey);
}

function getUser(token) {
  return jwt.verify(token, secretKey);
}

module.exports = {
  setUser,
  getUser,
};
