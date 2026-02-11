const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const connectDb = require("./Config/Db");
const sessionRoutes = require("./Sesstions&Cookies/SessionRoutes");
const authRouter = require("./Mvc/Routers/AuthRouter");

dotenv.config();
connectDb();
const app = express();

// ALLOWED ORIGINS (FRONTEND + AZURE)
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5173",

  // Firebase dashboard
  "https://shrigaar-dashboard.web.app",

  // Production site
  "https://shrigaar.com",
  "https://www.shrigaar.com",

  // Azure backend (exact domain)
  "https://api.shrigaar.com"
];
// CORS CONFIG (SAFE + FLEXIBLE)
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Postman, server-to-server

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ BLOCKED BY CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);


// Handle preflight
app.options("*", cors());

// --------------------------------------------------
// GLOBAL MIDDLEWARE
// --------------------------------------------------
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// --------------------------------------------------
// SESSION CONFIG (SECURE FOR PRODUCTION)
// --------------------------------------------------
app.use(
  session({
    name: "shrigaar.sid",
    secret: process.env.SESSION_SECRET || "supersecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 1000 * 60 * 60 * 24 // 24 hours
    }
  })
);

// --------------------------------------------------
// HEALTH CHECK (AZURE USES THIS)
// --------------------------------------------------
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Shrigaar Backend API is running on Azure"
  });
});

// --------------------------------------------------
// API ROUTES
// --------------------------------------------------
app.use("/api/v1", authRouter);
app.use("/api/v1", sessionRoutes);

// --------------------------------------------------
// GLOBAL ERROR HANDLER
// --------------------------------------------------
app.use((err, req, res, next) => {
  console.error("🔥 SERVER ERROR:", err.message.red);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

// --------------------------------------------------
// START SERVER (AZURE PROVIDES PORT)
// --------------------------------------------------
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `✅ Server running in ${process.env.NODE_ENV || "development"} mode`.green
  );
  console.log(`🌐 Listening on PORT: ${PORT}`.cyan);
});

// --------------------------------------------------
module.exports = app;
