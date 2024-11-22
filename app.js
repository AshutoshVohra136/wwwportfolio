// const express = require("express");

// require("dotenv").config();
// const app = express();
// const path = require("path");

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
// app.listen(process.env.PORT || 4040, () =>
//   console.log(`running on Port : ${process.env.PORT}`)
// );

const express = require("express");
const path = require("path");

require("dotenv").config();
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => console.log(`Running on Port: ${PORT}`));
