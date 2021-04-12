const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config")
const { body, check, validationResult } = require("express-validator");

const User = require("../models/User");

// ========================== using check ==============================

// @route   POST api/users
// @desc    Register a user
// @access  Public
// router.post(
//   "/",
//   [check("name", "Please add name").not().isEmpty(),
// check("email", "Please include a valid email").isEmail(),
// check("password", "please enter a password with 6 or more characters").isLength({min:6})],
//   (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()){
//         return res.status(400).json({ errors: errors.array() });
//     }
//     res.send('passed!')
//   }
// );

// ========================== using body ==============================

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  // username must be an name
  body("name", " A name is required.").not().isEmpty(),
  // username must be an email
  body("email", " A valid email is required.").isEmail(),
  // password must be at least 6 chars long
  body("password", "Password of 6 or more characters is required.").isLength({ min: 6 }),
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (user) {
        res.status(400).json({ message: "User already exists" });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, config.get("jwtSecret"),{
          expiresIn: 360000
      }, (err, token)=>{
          if(err) throw err;
          res.json({token})
      })
    } catch (error) {
      console.error(error.message);
      res.status(400).send("Server Error");
    }
    //   User.create({
    //     username: req.body.username,
    //     password: req.body.password,
    //   }).then(user => res.json(user));
  }
);

module.exports = router;
