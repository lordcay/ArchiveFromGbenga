const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");

const cors = require("cors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

// Routes Files
//const sme = require("./routes/sme");

//load env vars
dotenv.config({ path: "./config/.env" });

//connect to database
connectDB();

const app = express();

//Boy Parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

//set security headers
app.use(helmet());

//enable CORS
app.use(cors());

//Mount Routers

// app.use("/api/v1/nmfb/", nyif);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // close Server & exit Process

  server.close(() => process.exit(1));
});
