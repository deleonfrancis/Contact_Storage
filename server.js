// imports express(by using common js)
const express = require("express");

// initialize express as a constant
const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Contact Storage API..." })
);

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
