const express = require("express");
const app = express();
const api = require("./routes");
const { response } = require("express");

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("hello world!");
  res.end();
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
