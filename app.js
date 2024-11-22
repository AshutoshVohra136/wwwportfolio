const express = require("express");

require("dotenv").config();
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(process.env.PORT || 4040, () =>
  console.log(`running on Port : ${process.env.PORT}`)
);

// const express = require("express");
// const path = require("path");

// const app = express();

// // Serve video from the public folder
// app.use("/public", express.static(path.join(__dirname, "../public")));

// // Serve the index.html file for the root route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../index.html"));
// });

// module.exports = app;
