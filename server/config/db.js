const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
    })
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
    process.exit(1); // exit with failure that is 1.
  }
};

module.exports = connectDB;

/*
git remote add origin https://github.com/uttamstha123/mern-stack.git
git branch -M main
git push -u origin main
*/