const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./Config/Db");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const sessionRoutes = require("./Sesstions&Cookies/SessionRoutes");

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDb();

const app = express();

// ✅ Allowed Origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://shop999.vercel.app",
  "https://coro-app.netlify.app",
   "https://coroemiassistant.netlify.app",
   "https://coroemi.netlify.app"
  
];

// ✅ Enhanced CORS Setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ CORS blocked for origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Ensure preflight (OPTIONS) requests are handled
app.options("*", cors());

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // ✅ Secure only in production
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("✅ Hello from Shop@99 backend on Vercel — CORS enabled!");
});

// ✅ API Routes
app.use("/back-end/rest-API/Secure", require("./Mvc/Routers/AuthRouter"));
app.use("/back-end/rest-API/Secure", sessionRoutes);

// ✅ Server Port (for local run)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`.bgBlue);
});

module.exports = app;
