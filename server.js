// imports express(by using common js) 
const express = require("express");

// initialize express as a constant 
const app = express()

app.get('/', (req, res)=> res.json({msg: "Welcome to the Contact Storage API..."}))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

