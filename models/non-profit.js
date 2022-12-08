const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

// Where we will non profits be seen
let nonProfit = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/non-profit", (req, res) => {
  const book = req.body;

  // Output the book to the console for debugging
  console.log(non - profit);
  books.push(non - profit);

  res.send("non profit is added ");
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
