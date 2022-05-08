const UserModel = require("../models/User");

const getUser = (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json(result);
    }
  });
};

const setUser = async (req, res) => {
  const { name, age, username } = req.body;
  if (!name && !age && !username) {
    res.status(400);
    throw new Error("Please do the necessary");
  }
  console.log('Got User Detail')
  const user = req.body;
  // pass the data through our model
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
};

module.exports = { getUser, setUser };
