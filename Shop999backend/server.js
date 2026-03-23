const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./Config/Db");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const sessionRoutes = require("./Sesstions&Cookies/SessionRoutes");

dotenv.config();
connectDb();

const app = express();

// ✅ Enable ETag (smart caching)
app.set("etag", true);

// ✅ Allowed Origins
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://localhost:3003",
  "http://localhost:3004",
  "https://shrigaar.com",
  "https://www.shrigaar.com",
  "https://coro-app.netlify.app",
  "https://shringaarprod.netlify.app",
  "https://shringaars.com",
  "https://shringaarauth.netlify.app",
  "https://shrigaar-dashboard.web.app"
];

// ✅ CORS Configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// ✅ Smart Cache Middleware (Production Ready)
app.use((req, res, next) => {
  const url = req.originalUrl;

  // ❌ No cache for sensitive routes
  if (
    url.includes("/login") ||
    url.includes("/register") ||
    url.includes("/session") ||
    url.includes("/auth")
  ) {
    res.setHeader("Cache-Control", "no-store");
  }

  // ✅ Cache only GET requests (safe data)
  else if (req.method === "GET") {
    res.setHeader("Cache-Control", "public, max-age=300"); // 5 minutes
  }

  // ❌ No cache for modifying requests
  else {
    res.setHeader("Cache-Control", "no-store");
  }

  next();
});

// ✅ Session Configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // HTTPS only in prod
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("Backend running on Render 🚀");
});

// ✅ Routes
app.use("/api/v1", require("./Mvc/Routers/AuthRouter"));
app.use("/api/v1", sessionRoutes);

// ✅ Global Error Handler (Optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen.white);
});