const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")

const { body, check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get("/", auth,  async (req, res) => {
    try {
        const contacts = await Contact.find({user: req.user.id}).sort({date:-1})
    res.json(contacts)
    } catch (error) {
        console.error(err.message)
        res.status(500).send("server error")
    }
});

// @route   POST api/contact
// @desc    Add new contact
// @access  Public
router.post("/", (req, res) => {
    res.send("Add new contact")
});

// @route   PUT api/contact/:id
// @desc    Update contact
// @access  Public
router.put("/:id", (req, res) => {
    res.send("Update contact")
});

// @route   DELETE api/contact/:id
// @desc    Delete contact
// @access  Public
router.delete("/:id", (req, res) => {
    res.send("Delete contact")
});

module.exports = router;