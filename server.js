const express = requiere("express");
const path = require("path");

const app = express();
app.use(express.static(path.join("dist,", "index.html")));

app.get("*", (req, res) => {
  res.sendFile(path.join(path.dirname, "dist", "index.html)"));
});

const port = process.env.PORT || 8000;
app.listen(PORT, () => {
  return `server runinig on prot:${PORT}`;
});
