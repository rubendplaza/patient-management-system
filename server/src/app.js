const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./routes/api");

const app = express();

// Middleware
app.use(
  cors({
    // For dev: where our client will be running. Allow resource sharing with this port
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

// makes api route /v1
app.use("/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
