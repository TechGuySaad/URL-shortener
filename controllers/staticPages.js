async function handleGetPage(req, res) {
  res.render("home", {
    name: "Saad",
  });
}

module.exports = { handleGetPage };
