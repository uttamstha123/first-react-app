const UserModel = require("../models/User");

const getUser = async (req, res) => {
  await UserModel.find({}, (err, result) => {
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
  console.log("Got User Detail");
  const user = req.body;
  // pass the data through our model
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
};

const updateUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }
  const updateUser = await UserModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true } //
  );
  res.json(updateUser);
};

const deleteUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User does not exists");
  }
  const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
  res.json(deletedUser);
};
module.exports = { getUser, setUser, updateUser, deleteUser };
