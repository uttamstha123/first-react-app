const express = require("express");
const router = express.Router();
const { getUser, setUser } = require("../controllers/userControllers");

router.route("/").get(getUser).post(setUser);

router.put("/:id", (req, res) => {
  res.json({ message: `Update user ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `Delete user ${req.params.id}` });
});

module.exports = router;
