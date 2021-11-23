const express = require("express");
const app = express();

const path = require("path");

const api = require("./routes/api");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const port = 8080;
app.use("/", api);

app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
