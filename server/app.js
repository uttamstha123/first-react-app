const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");

// middlewares
/*** parse json ***/
app.use(express.json());
/** connect client with server **/
app.use(cors());
/*** router middleware ***/
app.use("/api", require("./routes/userRoute"));
app.use(errorHandler);

// connection to DB
mongoose.connect(
  "mongodb+srv://Uttam:test123@cluster0.enmab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => {
    console.log("DB conncted");
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log("Server is listening");
    });
  }
);
