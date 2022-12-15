const router = require("express").Router();
const { User, Organization } = require("../models");
const withAuth = require("../utils/auth");

// Need conditional rendering to allow authorized users access to admin page
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((nonProfit) => nonProfit.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req?.session?.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/organizations", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }
  const organizations = await Organization.findAll();
  console.log(organizations[0].dataValues);
  res.render("organizations", { organizations });
});

module.exports = router;
