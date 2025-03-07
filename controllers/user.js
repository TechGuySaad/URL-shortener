const Users = require("../models/user");
const { setUser } = require("../service/auth");

const { v4: uuidv4 } = require("uuid");
async function handleUserSignup(req, res) {
  const { user, email, password } = req.body;

  await Users.create({ user, email, password });

  return res.redirect("/home");
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });
  if (!user) {
    return res.render("/login", {
      error: "Wrong email or password",
    });
  }

  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);

  return res.redirect("/home");
}

module.exports = { handleUserSignup, handleUserLogin };
