//  Renders homepage
async function handleGetPage(req, res) {
  return res.render("home", {
    name: "Saad",
  });
}

// Renders login page
async function handleLoginPage(req, res) {
  return res.render("login");
}

// Renders signup page
async function handleSignupPage(req, res) {
  return res.render("signup");
}

module.exports = { handleGetPage, handleLoginPage, handleSignupPage };
