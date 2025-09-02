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

// Serve static files from the "public" directory (go up one level from api/)
app.use(express.static(path.join(__dirname, "..", "public")));

// Route to serve the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// Handle all other routes by serving index.html (for SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// Export the app for Vercel
module.exports = app;

// Only start server if not in Vercel environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  const PORT = process.env.PORT || 4040;
  app.listen(PORT, () => console.log(`Running on Port: ${PORT}`));
}
