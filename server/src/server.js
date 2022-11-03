const http = require("http");
require("dotenv").config();

const app = require("./app");

const { mongoConnect } = require("./services/mongo");

// Routes for testing: http://localhost:8000/v1/patients and http://localhost:8000/v1/doctors
const PORT = process.env.PORT || 8000;

// wrapping our express middleware with http server
const server = http.createServer(app);

async function startServer() {
  console.log("Waiting to connect to MongoDB...");
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
