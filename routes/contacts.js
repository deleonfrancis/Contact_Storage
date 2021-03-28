const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get("/", (req, res) => {
    res.send("Get all contacts")
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