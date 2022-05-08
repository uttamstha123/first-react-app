const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
// middlewares
/*** parse json ***/
app.use(express.json());
/** connect client with server **/
app.use(cors());


// connection to DB
mongoose.connect(
  "mongodb+srv://Uttam:test123@cluster0.enmab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => {
    console.log("DB conncted");
    app.listen(3001, () => {
      console.log("Server is listening");
    });
  }
);

// making requests
const UserModel = require("./models/User");

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  // pass the data through our model
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});
