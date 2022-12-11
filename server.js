// Set variables
const express = require("express");
const path = require("path");
const app = express();
const { clog } = require("./middleware/clog");

// Set PORT variable
const PORT = process.env.PORT || 3001;
app.use(clog);
// Set express static route
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set listening on PORT
app.listen(PORT, () => console.log("server running"));
