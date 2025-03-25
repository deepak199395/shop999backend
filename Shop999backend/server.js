const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./Config/Db");
const dotenv = require("dotenv");

dotenv.config();
connectDb();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Test route
app.get("/", (req, res) => {
  res.send("Hello from Shop@99 on Vercel!");
});

// API routes
app.use("/api/auth", require("./Mvc/Routers/AuthRouter"));

module.exports = app; 
