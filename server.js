const express = require("express");
const path = require("path");

const app = express();
// Serve static files
app.use(express.static(path.join(__dirname, "dist,")));

// for any request that doesn't match a static file, serve, index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html)"));
});

// Expose
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server runinig on prot:${PORT}`);
});
