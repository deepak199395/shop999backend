// ================= CLEAN & SAFE SERVER FILE =================

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

/* ---------------------------------------------------
   ✔ ALLOWED ORIGINS (SAFE)
------------------------------------------------------ */
const allowedOrigins = [
  "http://localhost:3000",
  "https://shop999.vercel.app",
  "https://coro-app.netlify.app",
  "https://coroemi.netlify.app",
  "https://coroemiassist.netlify.app",
  "https://shrigaar.netlify.app" 
];

/* ---------------------------------------------------
   ✔ CORS SETUP (SAFE)
------------------------------------------------------ */
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ BLOCKED ORIGIN:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle OPTIONS
app.options("*", cors());

/* ---------------------------------------------------
   ✔ MIDDLEWARE
------------------------------------------------------ */
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
);

/* ---------------------------------------------------
   ✔ HEALTH CHECK ROUTE
------------------------------------------------------ */
app.get("/", (req, res) => {
  res.send("✅ CORO Backend API is running safely!");
});

/* ---------------------------------------------------
   ✔ CLEAN API MOUNT POINT
   ❗ REPLACES: /back-end/rest-API/Secure
------------------------------------------------------ */
app.use("/api/v1", require("./Mvc/Routers/AuthRouter")); 
app.use("/api/v1", sessionRoutes);

/* ---------------------------------------------------
   ✔ START SERVER
------------------------------------------------------ */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Safe Backend Server running on port ${PORT}`.bgBlue);
});

module.exports = app;
