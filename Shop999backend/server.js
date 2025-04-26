const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./Config/Db");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const sessionRoutes= require("./Sesstions&Cookies/SessionRoutes")
dotenv.config();
connectDb();
const app = express();
// Middleware
const allowedOrigins=[
  "http://localhost:3000", 
  "https://shop999.vercel.app"  
]

app.use(cors({
  origin:function(origin,callback){
    if(!origin|| allowedOrigins.includes(origin)){
      callback(null,true);
    }else{
      callback(new Error("Not allowed by CORS"));

    }
  },
  credentials: true,

}))
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || "supersecretkey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  }
}))
// Test route
app.get("/", (req, res) => {
  res.send("Hello from Shop@99 on Vercel with Sessions!");
});

// API routes
app.use("/back-end/rest-API/Secure", require("./Mvc/Routers/AuthRouter"));
app.use("/back-end/rest-API/Secure", sessionRoutes); 

// server running on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgBlue);
}); // server running on port
module.exports = app;

//npm run server
// Start the server with the command: node server.js
// Ensure to install necessary dependencies:
// npm install express colors cors morgan dotenv
// This file sets up the Express server and connects to the database.
