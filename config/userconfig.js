const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://Sana:fRR5WaYfojskBJ4N@cluster0.w7osevc.mongodb.net/merndb",{useNewUrlParser: true, useUnifiedTopology: true} )
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectDB;
