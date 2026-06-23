const express = require("express");
const router = express.Router();

let users = require("../data/users");

// GET ALL USERS

router.get("/", (req, res) => {
  res.status(200).json(users);
});

// GET SINGLE USER

router.get("/:id", (req, res) => {

  const user = users.find(
    u => u.id == req.params.id
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(200).json(user);
});

// CREATE USER

router.post("/", (req, res) => {

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and Email required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// UPDATE USER

router.put("/:id", (req, res) => {

  const user = users.find(
    u => u.id == req.params.id
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  user.name = req.body.name;
  user.email = req.body.email;

  res.status(200).json(user);
});

// DELETE USER

router.delete("/:id", (req, res) => {

  const index = users.findIndex(
    u => u.id == req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users.splice(index, 1);

  res.status(200).json({
    message: "User deleted"
  });
});

module.exports = router;