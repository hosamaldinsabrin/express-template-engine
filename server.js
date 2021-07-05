import express from "express";
import api from "./routes.js";
const app = express();
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("hello world!");
  res.end();
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
