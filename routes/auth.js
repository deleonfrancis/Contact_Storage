const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { body, check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route   POST api/auth
// @desc    Authorize the user and get the token
// @access  Public
router.post(
  "/",
  // username must be an email
  body("email", "Valid Name is required.").isEmail(),
  // password must be at least 6 chars long
  body("password", "Password of 6 or more characters is required.").isLength({
    min: 6,
  }),
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ message: "Username or password is incorrect." });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Password is incorrect." });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(400).send("Server Error");
    }
  }
);

module.exports = router;
