const express = require("express");
const path = require("path");
const app = express();

// express.static(path.join(__dirname, "/index.html"));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(express.static(path.join(__dirname, "/js")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/assets/index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
