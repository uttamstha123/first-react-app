const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");

/** middlewares **/
//  parse json
app.use(express.json());
//  connect client with server
app.use(cors());
//  router middleware
app.use("/api", require("./routes/userRoute"));

// error middleware
app.use(errorHandler);

// connection to DB
connectDB();
app.listen(process.env.PORT || 3001, () => {
  console.log("Server is Listening");
});
